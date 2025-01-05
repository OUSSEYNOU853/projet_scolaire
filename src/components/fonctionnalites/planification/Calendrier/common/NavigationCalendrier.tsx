import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationCalendrierProps {
  date: Date;
  onDateChange: (date: Date) => void;
  vue: 'jour' | 'semaine' | 'mois';
  onVueChange: (vue: 'jour' | 'semaine' | 'mois') => void;
}

const NavigationCalendrier = ({
  date,
  onDateChange,
  vue,
  onVueChange,
}: NavigationCalendrierProps) => {
  const naviguerVers = (direction: 'precedent' | 'suivant') => {
    const nouvelleDate = new Date(date);
    switch (vue) {
      case 'jour':
        nouvelleDate.setDate(
          date.getDate() + (direction === 'precedent' ? -1 : 1),
        );
        break;
      case 'semaine':
        nouvelleDate.setDate(
          date.getDate() + (direction === 'precedent' ? -7 : 7),
        );
        break;
      case 'mois':
        nouvelleDate.setMonth(
          date.getMonth() + (direction === 'precedent' ? -1 : 1),
        );
        break;
    }
    onDateChange(nouvelleDate);
  };

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => naviguerVers('precedent')}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => onDateChange(new Date())}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
        >
          Aujourd'hui
        </button>

        <button
          onClick={() => naviguerVers('suivant')}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <span className="text-lg font-semibold">{formatDate()}</span>
      </div>

      <div className="flex items-center space-x-2">
        <select
          value={vue}
          onChange={(e) =>
            onVueChange(e.target.value as 'jour' | 'semaine' | 'mois')
          }
          className="px-3 py-2 border rounded-md text-sm"
        >
          <option value="jour">Jour</option>
          <option value="semaine">Semaine</option>
          <option value="mois">Mois</option>
        </select>
      </div>
    </div>
  );
};

export default NavigationCalendrier;
