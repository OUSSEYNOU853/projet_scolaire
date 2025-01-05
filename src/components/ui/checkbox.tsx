import React from 'react';

type CheckboxProps = {
  id: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = ({
  id,
  checked = false,
  onChange = () => {},
}: CheckboxProps) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={onChange}
    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
  />
);
