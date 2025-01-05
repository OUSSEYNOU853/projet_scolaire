import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '../../../../ui/card';
import { Calendar, Clock, Users, MapPin, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLayout } from '../../../../../contexts/LayoutContext';
import StatCard from './StatCoursProf';
import FiltresCalendrierProf from './FiltresCalendrier';
import VueJournaliereProf from './VueJournaliere';
import VueHebdomadaireProf from './VueHebdomadaire';

const CalendrierProfesseur = () => {
  const { sidebarOpen } = useLayout();
  const [dateSelectionnee, setDateSelectionnee] = useState(new Date());
  const [vueActuelle, setVueActuelle] = useState<
    'journaliere' | 'hebdomadaire'
  >('journaliere');
  const [filtres, setFiltres] = useState({
    classe: '',
    module: '',
    salle: '',
  });

  // Données exemple pour les stats
  const statsJour = {
    coursAujourdhui: 4,
    prochainCours: '10:30',
    prochaineClasse: 'L3 Info',
    totalEtudiants: 120,
  };

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
            <h1 className="text-3xl font-bold">Emploi du temps - Professeur</h1>
            <p className="mt-2 text-blue-100">
              Gestion de vos cours et planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Cours aujourd'hui"
              value={statsJour.coursAujourdhui}
              icon={<Calendar className="h-5 w-5" />}
              color="blue"
            />
            <StatCard
              title="Prochain cours"
              value={statsJour.prochainCours}
              icon={<Clock className="h-5 w-5" />}
              color="green"
            />
            <StatCard
              title="Prochaine classe"
              value={statsJour.prochaineClasse}
              icon={<Book className="h-5 w-5" />}
              color="purple"
            />
            <StatCard
              title="Total étudiants"
              value={statsJour.totalEtudiants}
              icon={<Users className="h-5 w-5" />}
              color="blue"
            />
          </div>

          <div className="mb-6">
            <Card>
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Mode d'affichage</CardTitle>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setVueActuelle('journaliere')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        vueActuelle === 'journaliere'
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Journalier
                    </button>
                    <button
                      onClick={() => setVueActuelle('hebdomadaire')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        vueActuelle === 'hebdomadaire'
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Hebdomadaire
                    </button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <FiltresCalendrierProf filtres={filtres} setFiltres={setFiltres} />

          {vueActuelle === 'journaliere' ? (
            <VueJournaliereProf
              date={dateSelectionnee}
              filtres={filtres}
              onNavigate={naviguerDate}
            />
          ) : (
            <VueHebdomadaireProf
              date={dateSelectionnee}
              filtres={filtres}
              onNavigate={naviguerDate}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default CalendrierProfesseur;
