import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Column {
  id: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  onSort?: (columnId: string) => void;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  loading?: boolean;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

const Tableau = ({
  columns,
  data,
  onSort,
  sortColumn,
  sortDirection,
  loading,
  pagination,
}: TableProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => onSort?.(column.id)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {sortColumn === column.id && (
                      <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-4 text-center">
                  Chargement...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-4 text-center">
                  Aucune donnée disponible
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column.id} className="px-6 py-4 whitespace-nowrap">
                      {column.render
                        ? column.render(row[column.id])
                        : row[column.id]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                pagination.onPageChange(pagination.currentPage - 1)
              }
              disabled={pagination.currentPage === 1}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm text-gray-700">
              Page {pagination.currentPage} sur {pagination.totalPages}
            </span>
            <button
              onClick={() =>
                pagination.onPageChange(pagination.currentPage + 1)
              }
              disabled={pagination.currentPage === pagination.totalPages}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tableau;
