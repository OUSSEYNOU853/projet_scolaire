import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Cours {
  id: number;
  module: string;
  professeur: string;
  horaire: string;
  salle: string;
  date: string;
}

const CoursWidget = () => {
  const prochainsCours: Cours[] = [
    {
      id: 1,
      module: 'Développement Web React',
      professeur: 'Dr. Diallo',
      horaire: '08:30 - 10:30',
      salle: 'Salle 101',
      date: '2024-12-27',
    },
    {
      id: 2,
      module: 'Base de données avancées',
      professeur: 'Pr. Ndiaye',
      horaire: '11:00 - 13:00',
      salle: 'Salle 203',
      date: '2024-12-27',
    },
    {
      id: 3,
      module: 'Intelligence Artificielle',
      professeur: 'Dr. Faye',
      horaire: '14:00 - 16:00',
      salle: 'Salle 305',
      date: '2024-12-28',
    },
    {
      id: 4,
      module: 'Architecture des Systèmes',
      professeur: 'Pr. Sow',
      horaire: '09:00 - 11:00',
      salle: 'Salle 202',
      date: '2024-12-29',
    },
    {
      id: 5,
      module: 'Réseaux et Télécommunications',
      professeur: 'Dr. Ba',
      horaire: '13:30 - 15:30',
      salle: 'Salle 104',
      date: '2024-12-29',
    },
    {
      id: 6,
      module: 'Conception UML',
      professeur: 'Pr. Kane',
      horaire: '10:00 - 12:00',
      salle: 'Salle 301',
      date: '2024-12-30',
    },
    {
      id: 7,
      module: 'Sécurité Informatique',
      professeur: 'Dr. Ndiaye',
      horaire: '15:00 - 17:00',
      salle: 'Salle 402',
      date: '2024-12-30',
    },
    {
      id: 8,
      module: 'Programmation Mobile',
      professeur: 'Dr. Sy',
      horaire: '08:00 - 10:00',
      salle: 'Salle 103',
      date: '2024-12-31',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(prochainsCours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursAffiches = prochainsCours.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Prochains cours</h2>
        <Link
          to="/prochains-cours"
          className="text-blue-600 text-sm hover:underline"
        >
          Voir tout
        </Link>
      </div>

      <div className="space-y-4">
        {coursAffiches.map((cours) => (
          <div
            key={cours.id}
            className="border-l-4 border-blue-500 bg-gray-50 p-4 rounded-r"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">{cours.module}</h3>
                <p className="text-sm text-gray-600 mt-1">{cours.professeur}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{cours.horaire}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{cours.salle}</span>
                  </div>
                </div>
              </div>
              <Calendar size={20} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded ${
            currentPage === 1
              ? 'text-gray-400'
              : 'text-blue-600 hover:bg-blue-100'
          }`}
        >
          Précédent
        </button>
        <span className="text-sm text-gray-600">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded ${
            currentPage === totalPages
              ? 'text-gray-400'
              : 'text-blue-600 hover:bg-blue-100'
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default CoursWidget;
