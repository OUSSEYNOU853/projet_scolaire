import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

type Props = {
  cours: Array<{
    id: string;
    module: string;
    professeur: string;
    salle: string;
    debut: string;
    fin: string;
    classe: string;
  }>;
  semaine: Date;
};

export default function VueListe({ cours, semaine }: Props) {
  // Trier les cours par date/heure
  const coursTries = [...cours].sort(
    (a, b) => new Date(a.debut).getTime() - new Date(b.debut).getTime(),
  );

  const formatHeure = (date: string) => {
    return new Date(date).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-4">
      {coursTries.map((cours) => (
        <div
          key={cours.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                {cours.module}
              </h3>
              <p className="text-gray-600">{cours.professeur}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {cours.classe}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2" />
              <span>
                {formatHeure(cours.debut)} - {formatHeure(cours.fin)}
              </span>
            </div>

            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>{cours.salle}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Users size={16} className="mr-2" />
              <span>{cours.classe}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
