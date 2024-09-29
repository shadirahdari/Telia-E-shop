import React from 'react';
import { Checkbox } from '../CheckBox';

interface FilterGroupsProps {
    title: string;
    list: string[];
    onChange: (name: string, value: string, checked: boolean) => void;
}

export const FilterGroups: React.FC<FilterGroupsProps> = ({ title, list, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            {list.map((item, index) => (
                <Checkbox
                    label={item}
                    key={index}
                    type="checkbox"
                    id={`${title}-${index}`}
                    name={title}
                    value={item}
                    onChange={(e) => onChange(title, item, e.target.checked)} // Call the onChange handler
                />
            ))}
        </div>
    );
};
