// composants/commun/Formulaire/Champ.tsx
import React from 'react';
import { cn } from '../../../utils/cn';

interface ChampProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  erreur?: string;
  aide?: string;
}

export const Champ = ({
  label,
  erreur,
  aide,
  className,
  ...props
}: ChampProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className={cn(
          'block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'disabled:bg-gray-100 disabled:text-gray-500',
          erreur && 'border-red-300 focus:ring-red-500',
          className,
        )}
        {...props}
      />
      {erreur && <p className="text-sm text-red-600">{erreur}</p>}
      {aide && !erreur && <p className="text-sm text-gray-500">{aide}</p>}
    </div>
  );
};
