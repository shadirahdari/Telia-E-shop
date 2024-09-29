import React, { useState } from "react";
import { Button } from "../Button";
import { FilterModal } from "./FilterModal";

const FilterBy: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowFilters(true)}
        color="brightOutlined"
        size="filter"
        className="py-2 flex justify-center items-center gap-1.5"
      >
        <svg className="filter-icon h-4 w-4">
          <use href="/assets/svg/icons.svg" />
        </svg>
        <span>Filter by</span>
        123
      </Button>

      <FilterModal
        show={showFilters}
        update={(values) => console.log(values)} // Update this function as needed
        close={() => setShowFilters(false)}
      />
    </>
  );
};

export default FilterBy;
