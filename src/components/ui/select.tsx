import React from 'react';

export const Select = ({
  children,
  value,
  onValueChange,
  className,
}: {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) => (
  <select
    value={value}
    onChange={(e) => onValueChange?.(e.target.value)}
    className={`block w-full rounded-md border border-gray-300 px-3 py-2 ${className}`}
  >
    {children}
  </select>
);

export const SelectTrigger = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) => (
  <div id={id} className={`relative ${className}`}>
    {children}
  </div>
);

export const SelectContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`mt-1 ${className}`}>{children}</div>;

export const SelectItem = ({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) => (
  <option value={value} className={className}>
    {children}
  </option>
);

export const SelectValue = ({
  placeholder,
  className,
}: {
  placeholder?: string;
  className?: string;
}) => <span className={`text-gray-500 ${className}`}>{placeholder}</span>;
