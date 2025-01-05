import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatWidgetProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  evolution: string;
  className?: string;
  iconColor?: string;
}

export default function StatWidget({
  icon,
  title,
  value,
  evolution,
  className = '',
  iconColor = 'text-gray-600',
}: StatWidgetProps) {
  const isPositive = evolution.startsWith('+');

  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-full ${iconColor} bg-white/80`}>
          {icon}
        </div>
        <span
          className={`flex items-center text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {evolution}
          {isPositive ? (
            <TrendingUp size={16} className="ml-1" />
          ) : (
            <TrendingDown size={16} className="ml-1" />
          )}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{value}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}
