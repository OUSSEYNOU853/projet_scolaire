import React from 'react';

interface ProgressBarProps {
  progress?: number; // Le point d'interrogation rend cette propriété optionnelle
}

export const ProgressBar = ({ progress = 0 }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
