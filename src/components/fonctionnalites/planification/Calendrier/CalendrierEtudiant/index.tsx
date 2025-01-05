import React, { useState } from 'react';
import { Calendar, Clock, Layout } from 'lucide-react';
import { useLayout } from '../../../../../contexts/LayoutContext';
import VueJournaliere from './VueJournaliere';
import VueHebdomadaire from './VueHebdomadaire';
import FiltresCalendrier from './FiltresCalendrier';
import StatCard from './StatsPlanningEtudiant';

const CalendrierEtudiant = () => {
  const { sidebarOpen } = useLayout();
  const [dateSelectionnee, setDateSelectionnee] = useState(new Date());
  const [vueActuelle, setVueActuelle] = useState<
    'journaliere' | 'hebdomadaire'
  >('journaliere');
  const [filtres, setFiltres] = useState({
    module: '',
    professeur: '',
  });

  // Données exemple pour les stats
  const coursJour = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      description: 'Cours sur React et TypeScript',
      type: 'CM',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Pr. Ndiaye',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      description: 'Introduction à PostgreSQL',
      type: 'TD',
    },
  ];

  const naviguerDate = (direction: 'precedent' | 'suivant') => {
    const nouvelleDate = new Date(dateSelectionnee);
    if (vueActuelle === 'journaliere') {
      nouvelleDate.setDate(
        dateSelectionnee.getDate() + (direction === 'precedent' ? -1 : 1),
      );
    } else {
      nouvelleDate.setDate(
        dateSelectionnee.getDate() + (direction === 'precedent' ? -7 : 7),
      );
    }
    setDateSelectionnee(nouvelleDate);
  };

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full">
        <div className="p-8">
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
            <h1 className="text-3xl font-bold">Emploi du temps</h1>
            <p className="mt-2 text-blue-100">
              Gestion de votre planning académique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Cours aujourd'hui"
              value={coursJour.length}
              icon={<Calendar className="h-5 w-5" />}
              color="blue"
            />
            <StatCard
              title="Prochaine séance"
              value={coursJour[0]?.debut || '--:--'}
              icon={<Clock className="h-5 w-5" />}
              color="green"
            />
            <StatCard
              title="Salle actuelle"
              value={coursJour[0]?.salle || 'Aucune'}
              icon={<Layout className="h-5 w-5" />}
              color="purple"
            />
          </div>

          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setVueActuelle('journaliere')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  vueActuelle === 'journaliere'
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                Vue journalière
              </button>
              <button
                onClick={() => setVueActuelle('hebdomadaire')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  vueActuelle === 'hebdomadaire'
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                Vue hebdomadaire
              </button>
            </div>

            <FiltresCalendrier filtres={filtres} setFiltres={setFiltres} />

            {vueActuelle === 'journaliere' ? (
              <VueJournaliere
                date={dateSelectionnee}
                filtres={filtres}
                onNavigate={naviguerDate}
              />
            ) : (
              <VueHebdomadaire
                date={dateSelectionnee}
                filtres={filtres}
                onNavigate={naviguerDate}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CalendrierEtudiant;
