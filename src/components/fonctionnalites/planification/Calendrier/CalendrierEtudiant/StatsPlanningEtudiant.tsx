import React from 'react';
import { motion } from 'framer-motion';

type StatCardProps = {
  title: string;
  value: string | number;
  color: 'blue' | 'green' | 'purple';
  icon: React.ReactNode;
};

const StatCard = ({ title, value, color, icon }: StatCardProps) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        <dt className="text-sm font-medium text-gray-500 flex items-center gap-2">
          {icon}
          {title}
        </dt>
        <dd className="mt-2 flex items-baseline justify-between">
          <div className="flex items-baseline text-2xl font-semibold">
            {value}
          </div>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${colors[color]} text-white`}
          >
            En direct
          </div>
        </dd>
      </div>
      <div className={`h-1 bg-gradient-to-r ${colors[color]}`} />
    </motion.div>
  );
};

export default StatCard;
