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
  const etats = [
    { value: '', label: 'Tous les états' },
    { value: 'en_cours', label: 'En cours' },
    { value: 'termine', label: 'Terminé' },
    { value: 'planifie', label: 'Planifié' },
  ];

  const modules = [
    { value: '', label: 'Tous les modules' },
    { value: 'dev_web', label: 'Développement Web' },
    { value: 'bdd', label: 'Base de données' },
  ];

  const classes = [
    { value: '', label: 'Toutes les classes' },
    { value: 'L2_INFO', label: 'L2 Info' },
    { value: 'L3_INFO', label: 'L3 Info' },
  ];

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

export default function ListeSessions() {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      date: '2024-12-28',
      heureDebut: '08:30',
      heureFin: '10:30',
      salle: 'Salle 101',
      etat: 'planifie',
      classe: 'L3 Info',
    },
    {
      id: '2',
      module: 'Base de données',
      professeur: 'Pr. Ndiaye',
      date: '2024-12-28',
      heureDebut: '11:00',
      heureFin: '13:00',
      salle: 'Salle 203',
      etat: 'en_cours',
      classe: 'L2 Info',
    },
  ]);

  const [filtres, setFiltres] = useState({
    etat: '',
    date: '',
    module: '',
    classe: '',
  });

  const handleFiltresChange = (nouveauxFiltres: typeof filtres) => {
    setFiltres(nouveauxFiltres);
  };

  const getEtatBadgeClass = (etat: Session['etat']) => {
    switch (etat) {
      case 'en_cours':
        return 'bg-green-100 text-green-800';
      case 'termine':
        return 'bg-gray-100 text-gray-800';
      case 'planifie':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Sessions de cours</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Nouvelle session
        </button>
      </div>

      <FiltresSessions
        filtres={filtres}
        onFiltresChange={handleFiltresChange}
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="p-4 hover:bg-gray-50 border-b last:border-b-0"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {session.module}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getEtatBadgeClass(session.etat)}`}
                    >
                      {session.etat === 'en_cours'
                        ? 'En cours'
                        : session.etat === 'termine'
                          ? 'Terminé'
                          : 'Planifié'}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{session.professeur}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{session.salle}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>
                        {session.heureDebut} - {session.heureFin}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Classe: {session.classe}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded">
                    Modifier
                  </button>
                  <button className="text-gray-600 hover:text-red-600 px-2 py-1 rounded">
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
