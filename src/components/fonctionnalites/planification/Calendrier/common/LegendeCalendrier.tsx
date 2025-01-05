import React from 'react';

const LegendeCalendrier = () => {
  // Définir les éléments de la légende directement dans le composant
  const legendeItems = [
    { label: 'Cours', couleur: 'bg-blue-100', bordure: 'border-blue-300' },
    { label: 'Examens', couleur: 'bg-red-100', bordure: 'border-red-300' },
    { label: 'Autres', couleur: 'bg-gray-100', bordure: 'border-gray-300' },
  ];

  return (
    <div className="flex items-center space-x-4 p-4 bg-white border-t rounded-b-lg">
      {legendeItems.map(({ label, couleur, bordure }) => (
        <div key={label} className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full border ${couleur} ${bordure} mr-2`}
          />
          <span className="text-sm font-medium text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default LegendeCalendrier;
