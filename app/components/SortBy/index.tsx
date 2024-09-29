import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside } from '../hooks/useClickOutside';
import { Button } from '../Button';

interface SortByProps {
  size?: string;
  type?: string;
  color?: string;
  children?: string;
  onClick?: () => void;
  className?: string;
}

const SortBy: React.FC<SortByProps> = ({ size, type, color, children, onClick, className }) => {
  const [selectedOption, setSelectedOption] = useState('Most popular');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const options = [
    { value: 'popular', label: 'Most popular' },
    { value: 'low-to-high', label: 'Price: lowest to highest' },
    { value: 'high-to-low', label: 'Price: highest to lowest' },
  ];

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleChevronDown = () => {
    const currentIndex = options.findIndex(option => option.label === selectedOption);
    if (currentIndex < options.length - 1) {
      setSelectedOption(options[currentIndex + 1].label);
    }
  };

  const handleChevronUp = () => {
    const currentIndex = options.findIndex(option => option.label === selectedOption);
    if (currentIndex > 0) {
      setSelectedOption(options[currentIndex - 1].label);
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <Button
        type="button"
        size={size}
        className="py-2 px-2 flex justify-center items-center gap-1.5 text-nowrap"
        id="sorting-button"
        aria-expanded="true"
        aria-haspopup="true"
        aria-label="Choose sorting for products"
        onClick={handleClick}>
        <svg className="sorter-icon h-4 w-4">
          <use href={`/assets/svg/icons.svg#sorter`} />
        </svg>
        {selectedOption}
      </Button>
      {isOpen && (
        <div
          className="font-popup fixed md:absolute inset-x-0 bottom-0 md:-bottom-2 md:translate-y-full mt-2 w-screen md:w-72 focus:outline-none cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          ref={dropdownRef}>
          <div className="flex justify-between h-9 bg-dropdown-header px-4 md:hidden">
            <div className="flex gap-4">
              <button onClick={handleChevronDown}>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use href={`/assets/svg/icons.svg#chevron-down`} />
                </svg>
              </button>
              <button onClick={handleChevronUp}>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use href={`/assets/svg/icons.svg#chevron-up`} />
                </svg>
              </button>
            </div>
            <button
              className="text-white font-popup font-medium text-sm"
              onClick={handleClick}>
              Done
            </button>
          </div>
          <div
            className="py-8 md:py-2 bg-gradient-to-b from-dropdown-gradient-1 to-dropdown-gradient-2 md:bg-none md:bg-dropdown-md md:rounded-md md:border md:border-dropdown-border"
            role="none">
            <button
              className="text-center text-sm text-[#474748] md:text-zinc-300 leading-4 font-[600] md:font-medium w-full px-4 py-1 md:text-left"
              disabled>
              Choose...
            </button>
            {options.map(option => (
              <button
                key={option.value}
                className={`${
                  selectedOption === option.label
                    ? 'bg-dropdown-option-selected text-white md:bg-inherit md:relative'
                    : 'text-white'
                } block text-center text-sm leading-4 font-normal w-full px-4 py-1 md:text-left`}
                onClick={() => handleSelect(option.label)}>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

SortBy.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SortBy;
