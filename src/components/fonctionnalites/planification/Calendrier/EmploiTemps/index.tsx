import React, { useState } from 'react';
import { Calendar, List } from 'lucide-react';
import VueGrille from './VueGrille';
import VueListe from './VueListe';
import ExportEmploiTemps from './ExportEmploiTemps';

// Types pour les événements de l'emploi du temps
type Cours = {
  id: string;
  module: string;
  professeur: string;
  salle: string;
  debut: string;
  fin: string;
  classe: string;
};

export default function EmploiTemps() {
  const [vueActuelle, setVueActuelle] = useState<'grille' | 'liste'>('grille');
  const [semaine, setSemaine] = useState<Date>(new Date());

  // Exemple de données (à remplacer par des vraies données de l'API)
  const cours: Cours[] = [
    {
      id: '1',
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      salle: 'Salle 101',
      debut: '2024-12-28T08:00:00',
      fin: '2024-12-28T10:00:00',
      classe: 'L3 Info',
    },
    // Ajoutez d'autres cours ici
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Emploi du Temps</h2>

        <div className="flex gap-4">
          {/* Boutons de changement de vue */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setVueActuelle('grille')}
              className={`px-4 py-2 rounded-md ${
                vueActuelle === 'grille' ? 'bg-white shadow' : ''
              }`}
            >
              <Calendar size={20} />
            </button>
            <button
              onClick={() => setVueActuelle('liste')}
              className={`px-4 py-2 rounded-md ${
                vueActuelle === 'liste' ? 'bg-white shadow' : ''
              }`}
            >
              <List size={20} />
            </button>
          </div>

          {/* Composant d'export */}
          <ExportEmploiTemps cours={cours} semaine={semaine} />
        </div>
      </div>

      {/* Navigation des semaines */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => {
            const nouvelleSemaine = new Date(semaine);
            nouvelleSemaine.setDate(semaine.getDate() - 7);
            setSemaine(nouvelleSemaine);
          }}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          Semaine précédente
        </button>

        <span className="font-medium">
          Semaine du {semaine.toLocaleDateString()}
        </span>

        <button
          onClick={() => {
            const nouvelleSemaine = new Date(semaine);
            nouvelleSemaine.setDate(semaine.getDate() + 7);
            setSemaine(nouvelleSemaine);
          }}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          Semaine suivante
        </button>
      </div>

      {/* Affichage de la vue sélectionnée */}
      <div className="mt-4">
        {vueActuelle === 'grille' ? (
          <VueGrille cours={cours} semaine={semaine} />
        ) : (
          <VueListe cours={cours} semaine={semaine} />
        )}
      </div>
    </div>
  );
}
