import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuLateral from './MenuLateral';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuLateral />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
