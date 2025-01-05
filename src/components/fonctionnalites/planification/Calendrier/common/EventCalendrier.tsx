import React from 'react';

interface EventCalendrierProps {
  titre: string;
  debut: Date;
  fin: Date;
  type: 'cours' | 'examen' | 'autre';
  professeur?: string;
  salle?: string;
  onClick?: () => void;
}

// Déclaration explicite du type de la fonction
const EventCalendrier = ({
  titre,
  debut,
  fin,
  type,
  professeur,
  salle,
  onClick,
}: EventCalendrierProps) => {
  const formatHeure = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getBgColor = () => {
    switch (type) {
      case 'cours':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'examen':
        return 'bg-red-100 border-red-300 text-red-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`p-2 rounded-md border cursor-pointer transition-all hover:shadow-md ${getBgColor()}`}
    >
      <div className="text-sm font-semibold mb-1">{titre}</div>
      <div className="text-xs space-y-1">
        <div>
          {formatHeure(debut)} - {formatHeure(fin)}
        </div>
        {professeur && <div>{professeur}</div>}
        {salle && <div>Salle: {salle}</div>}
      </div>
    </div>
  );
};

export default EventCalendrier;
