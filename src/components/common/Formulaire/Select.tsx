import React from 'react';
import { cn } from '../../../utils/cn';

interface Option {
  valeur: string | number;
  label: string;
}

interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'value' | 'onChange'
  > {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  erreur?: string;
  aide?: string;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  erreur,
  aide,
  className,
  ...props
}: SelectProps) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Select Input */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'disabled:bg-gray-100 disabled:text-gray-500',
          erreur && 'border-red-300 focus:ring-red-500',
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.valeur} value={option.valeur}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Error or Help Text */}
      {erreur && <p className="text-sm text-red-600">{erreur}</p>}
      {aide && !erreur && <p className="text-sm text-gray-500">{aide}</p>}
    </div>
  );
};
