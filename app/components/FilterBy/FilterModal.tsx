import React, { useReducer, useState } from 'react';  
import { z } from 'zod'; // Import Zod for validation
import { filterReducer, initialState } from './FilterReducer'; // Adjust the path if necessary
import { FilterGroups } from "./FilterGroups"; // Adjust the path if necessary
import { Button } from '../Button'; // Adjust the path if necessary

// Define types for props
interface FilterModalProps {
  show: boolean;
  close: () => void;
  update: (filters: any) => void; // Replace `any` with your filter type if available
}

export const FilterModal: React.FC<FilterModalProps> = ({ show, close, update }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [formValues, setFormValues] = useState<{
    Brand: string[];
    Price: string[];
    Color: string[];
    Type: string[];
  }>({
    Brand: [],
    Price: [],
    Color: [],
    Type: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Define validation schema with Zod
  const validationSchema = z.object({
    Brand: z.array(z.string()).min(1, 'Select at least one brand'),
    Price: z.array(z.string()).min(1, 'Select at least one price range'),
    Color: z.array(z.string()).min(1, 'Select at least one color'),
    Type: z.array(z.string()).min(1, 'Select at least one type'),
  });

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormValues(prev => {
      const currentValues = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form values
    const result = validationSchema.safeParse(formValues);
    if (!result.success) {
      const validationErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        validationErrors[err.path[0]] = err.message;
      });
      setErrors(validationErrors);
      return;
    }
    
    // Dispatch values to your reducer or perform any other action
    dispatch({ type: 'SET_FILTERS', payload: formValues });
    close(); // Close the modal on submit
    update(formValues); // Call update with the form values
  };

  return show && (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "#171717c2" }}>
      <div className="bg-white rounded shadow-lg">
        <h2 className="text-xl mb-4 p-6">Filter By</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className='p-6' style={{ overflow: "hidden scroll", maxHeight: "50vh", width: 760, gap: 24 }}>
            <FilterGroups title={"Type"} list={['Mobile phone', 'Accessories']} onChange={handleCheckboxChange} />
            <FilterGroups title={"Brand"} list={['Samsung', 'Xiaomi', 'Apple', 'OnePlus', 'Sony']} onChange={handleCheckboxChange} />
            <FilterGroups title={"Price"} list={['0 - 100 Eur/month', '100 - 500 Eur/month', '500 - 1000 Eur/month', '1000 - 1500 Eur/month', '15000 - 2000 Eur/month']} onChange={handleCheckboxChange} />
            <FilterGroups title={"Color"} list={['Black', 'Yellow', 'Green', 'Silver', 'Rose gold', 'Red', 'white']} onChange={handleCheckboxChange} />
          </div>
          <div className='p-6 flex gap-4'>
            <Button color="brightOutlined" onClick={close} className="w-full">
              Close
            </Button>
            <Button color="dark" type="submit" className="w-full mr-2">
              See results
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
