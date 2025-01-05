import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react'; // Import des icônes nécessaires
import { useNavigate } from 'react-router-dom';

const ProchainsCoursPage = () => {
  const navigate = useNavigate();

  const prochainsCours = [
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

  const itemsPerPage = 5; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(prochainsCours.length / itemsPerPage);

  const handleBack = () => {
    navigate(-1); // Retourne à la page précédente
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calcul des cours pour la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCours = prochainsCours.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="p-6">
      <button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour
      </button>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Tous les prochains cours
      </h1>
      <div className="space-y-4">
        {currentCours.map((cours) => (
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
      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Précédent
        </button>
        <span className="text-gray-600">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ProchainsCoursPage;
