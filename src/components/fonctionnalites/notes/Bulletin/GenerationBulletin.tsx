// src/composants/fonctionnalites/notes/Bulletin/GenerationBulletin.tsx
import React from 'react';
import { Search } from 'lucide-react';

export const GenerationBulletin = ({ onBulletinGenerated }) => {
  const [selectedClass, setSelectedClass] = React.useState('');
  const [selectedSemester, setSelectedSemester] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // Données simulées
  const classes = [
    { id: '1', nom: 'L3 GL' },
    { id: '2', nom: 'L3 RS' },
  ];

  const semestres = [
    { id: '1', nom: 'Semestre 1' },
    { id: '2', nom: 'Semestre 2' },
  ];

  const handleGeneration = async () => {
    if (!selectedClass || !selectedSemester) {
      alert('Veuillez sélectionner une classe et un semestre');
      return;
    }

    setLoading(true);
    try {
      // Simuler un appel API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData = {
        classe: selectedClass,
        semestre: selectedSemester,
        etudiants: [
          {
            id: 1,
            nom: 'Diallo',
            prenom: 'Mamadou',
            modules: [
              { nom: 'Mathématiques', note: 15, coefficient: 2 },
              { nom: 'Informatique', note: 17, coefficient: 3 },
            ],
          },
          // Ajoutez plus d'étudiants si nécessaire
        ],
      };

      onBulletinGenerated(mockData);
    } catch (error) {
      console.error('Erreur lors de la génération:', error);
      alert('Erreur lors de la génération du bulletin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Classe
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Sélectionner une classe</option>
            {classes.map((classe) => (
              <option key={classe.id} value={classe.id}>
                {classe.nom}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Semestre
          </label>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Sélectionner un semestre</option>
            {semestres.map((semestre) => (
              <option key={semestre.id} value={semestre.id}>
                {semestre.nom}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleGeneration}
        disabled={loading}
        className="flex items-center justify-center w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {loading ? (
          'Génération en cours...'
        ) : (
          <>
            <Search className="w-4 h-4 mr-2" />
            Générer le bulletin
          </>
        )}
      </button>
    </div>
  );
};
