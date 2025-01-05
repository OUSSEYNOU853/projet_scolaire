import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';

import {
  ChevronLeft,
  ChevronRight,
  Users,
  GraduationCap,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  date: Date;
  filtres: {
    classe: string;
    module: string;
  };
  onNavigate: (direction: 'precedent' | 'suivant') => void;
};

const VueHebdomadaireProf = ({ date, filtres, onNavigate }: Props) => {
  const joursOuvres = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const heures = Array.from(
    { length: 12 },
    (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`,
  );

  // Données exemple pour un professeur
  const coursHebdo = [
    {
      id: 1,
      module: 'Développement Web',
      classe: 'L3 Info A',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      jour: 'Lundi',
      type: 'CM',
      effectif: 45,
      progression: '3/12',
    },
    {
      id: 2,
      module: 'Architecture Web',
      classe: 'M1 Info B',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      jour: 'Mardi',
      type: 'TD',
      effectif: 30,
      progression: '5/10',
    },
    {
      id: 3,
      module: 'Frameworks JS',
      classe: 'L3 Info B',
      salle: 'Labo 2',
      debut: '14:00',
      fin: '16:00',
      jour: 'Mercredi',
      type: 'TP',
      effectif: 25,
      progression: '7/15',
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800 border-blue-200',
      TD: 'bg-green-100 text-green-800 border-green-200',
      TP: 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return (
      colors[type as keyof typeof colors] ||
      'bg-gray-100 text-gray-800 border-gray-200'
    );
  };

  const getBorderColor = (type: string) => {
    const colors = {
      CM: 'border-blue-200',
      TD: 'border-green-200',
      TP: 'border-purple-200',
    };
    return colors[type as keyof typeof colors] || 'border-gray-200';
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">
            Emploi du temps hebdomadaire
          </CardTitle>
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
                      (!filtres.classe || c.classe === filtres.classe) &&
                      (!filtres.module || c.module === filtres.module),
                  );

                  return (
                    <div
                      key={`${jour}-${heure}`}
                      className="min-h-[4rem] rounded-lg border"
                    >
                      {cours && (
                        <div
                          className={`h-full p-3 rounded-lg border-2 ${getBorderColor(cours.type)}`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-sm">
                              {cours.module}
                            </div>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
                                cours.type,
                              )}`}
                            >
                              {cours.type}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center text-xs text-gray-600">
                              <Users className="h-3 w-3 mr-1" />
                              <span>
                                {cours.classe} ({cours.effectif} étudiants)
                              </span>
                            </div>
                            <div className="flex items-center text-xs text-gray-600">
                              <GraduationCap className="h-3 w-3 mr-1" />
                              <span>Séance {cours.progression}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>
                                {cours.debut} - {cours.fin}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            {cours.salle}
                          </div>
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

export default VueHebdomadaireProf;
