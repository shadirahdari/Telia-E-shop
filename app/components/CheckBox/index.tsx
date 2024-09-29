import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

interface CheckboxProps {
  label: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, name, value, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={id} className="custom-checkbox-wrapper">
        <div className={`custom-checkbox ${checked ? 'checked' : ''}`}>
          {checked && (
            <svg className="check-icon" viewBox="0 0 24 24">
              <path d="M20.285 6.25L9 17.535l-5.285-5.285 1.285-1.285L9 15l9.285-9.285z" />
            </svg>
          )}
        </div>
        {label}
      </label>
    </div>
  );
};

// Optional: PropTypes for runtime validation
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
