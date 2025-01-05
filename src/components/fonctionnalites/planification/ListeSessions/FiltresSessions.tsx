import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin } from 'lucide-react';

// Types pour nos données
type Session = {
  id: string;
  module: string;
  professeur: string;
  date: string;
  heureDebut: string;
  heureFin: string;
  salle: string;
  etat: 'en_cours' | 'termine' | 'planifie';
  classe: string;
};

type FiltresSessionsProps = {
  filtres: {
    etat: string;
    date: string;
    module: string;
    classe: string;
  };
  onFiltresChange: (filtres: {
    etat: string;
    date: string;
    module: string;
    classe: string;
  }) => void;
};

const FiltresSessions = ({
  filtres,
  onFiltresChange,
}: FiltresSessionsProps) => {
  // Liste des états possibles
  const etats = [
    { value: '', label: 'Tous les états' },
    { value: 'en_cours', label: 'En cours' },
    { value: 'termine', label: 'Terminé' },
    { value: 'planifie', label: 'Planifié' },
  ];

  // Liste des modules (à remplacer par les données réelles)
  const modules = [
    { value: '', label: 'Tous les modules' },
    { value: 'dev_web', label: 'Développement Web' },
    { value: 'bdd', label: 'Base de données' },
  ];

  // Liste des classes (à remplacer par les données réelles)
  const classes = [
    { value: '', label: 'Toutes les classes' },
    { value: 'L2_INFO', label: 'L2 Info' },
    { value: 'L3_INFO', label: 'L3 Info' },
  ];

  // Gestion du changement de filtres
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    onFiltresChange({
      ...filtres,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <h3 className="font-medium text-gray-700">Filtres</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label
            htmlFor="etat"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            État
          </label>
          <select
            id="etat"
            name="etat"
            value={filtres.etat}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            {etats.map((etat) => (
              <option key={etat.value} value={etat.value}>
                {etat.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={filtres.date}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="module"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Module
          </label>
          <select
            id="module"
            name="module"
            value={filtres.module}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            {modules.map((module) => (
              <option key={module.value} value={module.value}>
                {module.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="classe"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Classe
          </label>
          <select
            id="classe"
            name="classe"
            value={filtres.classe}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            {classes.map((classe) => (
              <option key={classe.value} value={classe.value}>
                {classe.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltresSessions;
