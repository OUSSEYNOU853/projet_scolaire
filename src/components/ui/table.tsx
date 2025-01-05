import React from 'react';

// src/components/ui/table.tsx
export const Table = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <table className={`min-w-full table-auto ${className}`}>{children}</table>
);

export const TableHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <thead className={`bg-gray-100 ${className}`}>{children}</thead>;

export const TableRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <tr className={`border-b ${className}`}>{children}</tr>;

export const TableHead = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th
    className={`px-6 py-3 text-left text-sm font-medium text-gray-500 ${className}`}
  >
    {children}
  </th>
);

export const TableBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <tbody className={className}>{children}</tbody>;

export const TableCell = ({
  children,
  className,
  colSpan,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) => (
  <td
    colSpan={colSpan} // Ajout de colSpan ici
    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${className}`}
  >
    {children}
  </td>
);
