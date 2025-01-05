// src/components/parametres/navigation/TabButton.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export const TabButton = ({
  active,
  onClick,
  icon: Icon,
  label,
}: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`
      relative flex items-center px-6 py-3 
      transition-all duration-200
      ${active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}
    `}
  >
    <div className="flex items-center space-x-2">
      <Icon
        className={`w-5 h-5 transition-colors duration-200 ${
          active ? 'text-blue-600' : 'text-gray-400'
        }`}
      />
      <span className="font-medium">{label}</span>
    </div>

    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
        initial={false}
      />
    )}
  </button>
);
