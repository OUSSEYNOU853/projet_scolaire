import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuLateral from '../common/Disposition/MenuLateral';
import PiedDePage from '../common/Disposition/PiedDePage';
import { useLayout } from '../../contexts/LayoutContext';

export const MainLayout = () => {
  const { sidebarOpen } = useLayout();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenuLateral />
      <div className="flex-1 pt-16">
        <div
          className={`
            ${sidebarOpen ? 'ml-64' : 'ml-20'} 
            transition-all duration-300 ease-in-out
            p-6
          `}
        >
          <Outlet />
        </div>
      </div>
      <PiedDePage />
    </div>
  );
};
