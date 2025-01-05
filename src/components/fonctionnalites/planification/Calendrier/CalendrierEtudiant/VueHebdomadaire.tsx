import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  date: Date;
  filtres: {
    module: string;
    professeur: string;
  };
  onNavigate: (direction: 'precedent' | 'suivant') => void;
};

const VueHebdomadaire = ({ date, filtres, onNavigate }: Props) => {
  const joursOuvres = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const heures = Array.from(
    { length: 14 },
    (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`,
  );

  // Données exemple
  const coursHebdo = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Coach Wane',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      jour: 'Lundi',
      type: 'CM',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Coach Aly',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      jour: 'Mardi',
      type: 'TD',
    },
    {
      id: 3,
      module: 'Langage C',
      professeur: 'Coach Wane',
      salle: 'Salle 2',
      debut: '08:00',
      fin: '10:00',
      jour: 'Mercredi',
      description: 'Introduction au Langage C',
      type: 'TP',
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800',
      TD: 'bg-green-100 text-green-800',
      TP: 'bg-purple-100 text-purple-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Planning de la semaine</CardTitle>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('precedent')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">
              Semaine du {date.toLocaleDateString()}
            </span>
            <button
              onClick={() => onNavigate('suivant')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-7 gap-4 mb-4">
              <div className="w-20" />
              {joursOuvres.map((jour) => (
                <div
                  key={jour}
                  className="px-4 py-2 text-center font-medium bg-gray-50 rounded-lg"
                >
                  {jour}
                </div>
              ))}
            </div>

            {heures.map((heure, indexHeure) => (
              <motion.div
                key={heure}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: indexHeure * 0.05 }}
                className="grid grid-cols-7 gap-4 mb-4"
              >
                <div className="w-20 text-sm text-gray-600 flex items-center">
                  {heure}
                </div>
                {joursOuvres.map((jour) => {
                  const cours = coursHebdo.find(
                    (c) =>
                      c.jour === jour &&
                      c.debut <= heure &&
                      c.fin > heure &&
                      (!filtres.module || c.module === filtres.module) &&
                      (!filtres.professeur ||
                        c.professeur === filtres.professeur),
                  );

                  return (
                    <div
                      key={`${jour}-${heure}`}
                      className="min-h-[4rem] rounded-lg border"
                    >
                      {cours && (
                        <div
                          className={`h-full p-2 rounded-lg ${
                            cours.type === 'CM'
                              ? 'bg-blue-50'
                              : cours.type === 'TD'
                                ? 'bg-green-50'
                                : 'bg-purple-50'
                          }`}
                        >
                          <div className="font-medium text-sm">
                            {cours.module}
                          </div>
                          <div className="text-xs text-gray-600">
                            {cours.professeur}
                          </div>
                          <div className="text-xs text-gray-500">
                            {cours.salle}
                          </div>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
                              cours.type,
                            )}`}
                          >
                            {cours.type}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VueHebdomadaire;
