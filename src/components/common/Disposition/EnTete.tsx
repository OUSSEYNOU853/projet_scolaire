import React from 'react';
import { Bell, User } from 'lucide-react';

const EnTete = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="px-6 py-4 flex justify-between items-center ml-64">
        {' '}
        {/* Aligné avec le contenu principal */}
        <h2 className="text-xl font-semibold text-gray-800">Tableau de bord</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">Administrateur</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnTete;
