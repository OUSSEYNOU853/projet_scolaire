import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';
import { Clock, MapPin, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  date: Date;
  filtres: {
    module: string;
    professeur: string;
  };
  onNavigate: (direction: 'precedent' | 'suivant') => void;
};

const VueJournaliere = ({ date, filtres, onNavigate }: Props) => {
  // Données exemple
  const coursJour = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Coach Wane',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      description: 'Cours sur React et TypeScript',
      type: 'CM',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Coach Aly',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      description: 'Introduction à PostgreSQL',
      type: 'TD',
    },
    {
      id: 3,
      module: 'Langage C',
      professeur: 'Coach Wane',
      salle: 'Salle 2',
      debut: '13:00',
      fin: '15:00',
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
          <CardTitle className="text-xl">Planning du jour</CardTitle>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('precedent')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">
              {date.toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              })}
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
        <div className="space-y-4">
          {coursJour
            .filter(
              (cours) =>
                (!filtres.module || cours.module === filtres.module) &&
                (!filtres.professeur ||
                  cours.professeur === filtres.professeur),
            )
            .map((cours, index) => (
              <motion.div
                key={cours.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className={`h-2 ${
                    cours.type === 'CM'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                      : cours.type === 'TD'
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : 'bg-gradient-to-r from-purple-500 to-purple-600'
                  }`}
                />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {cours.module}
                      </h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-gray-600">
                          <User className="h-4 w-4 mr-2" />
                          <span>{cours.professeur}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{cours.salle}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>
                            {cours.debut} - {cours.fin}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(cours.type)}`}
                    >
                      {cours.type}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    {cours.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VueJournaliere;
