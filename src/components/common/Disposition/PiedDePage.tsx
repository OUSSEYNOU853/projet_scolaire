/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Disposition/PiedDePage.tsx
import React from 'react';

const PiedDePage = () => {
  return (
    <footer className="bg-white border-t py-4 mt-auto">
      <div className="container mx-auto px-6 ml-64">
        {' '}
        {/* Aligné avec le contenu principal */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SOnatel Academy. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Aide
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiedDePage;
