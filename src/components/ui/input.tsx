import React from 'react';

// src/components/ui/input.tsx
export const Input = ({ className, ...props }: any) => (
  <input
    className={`px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);
