import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ChevronUp, Users } from 'lucide-react';

interface AbsenceStats {
  total: number;
  nonJustifiees: number;
  tauxAbsenteisme: number;
  evolution: number;
}

const AbsencesWidget = () => {
  // Exemple de données (à remplacer par des données réelles de l'API)
  const stats: AbsenceStats = {
    total: 45,
    nonJustifiees: 15,
    tauxAbsenteisme: 8.5,
    evolution: -2.3,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Absences</h2>
        <span className="text-sm text-gray-500">Ce mois</span>
        <Link
          to="/stat-absences"
          className="text-blue-600 text-sm hover:underline"
        >
          Détails
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <AlertCircle className="text-red-500 mr-2" size={20} />
            <span className="text-2xl font-bold text-gray-800">
              {stats.nonJustifiees}
            </span>
          </div>
          <p className="text-sm text-gray-600">Absences non justifiées</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Users className="text-blue-500 mr-2" size={20} />
            <span className="text-2xl font-bold text-gray-800">
              {stats.total}
            </span>
          </div>
          <p className="text-sm text-gray-600">Total absences</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Taux d'absentéisme</p>
            <p className="text-2xl font-bold text-gray-800">
              {stats.tauxAbsenteisme}%
            </p>
          </div>
          <div className="flex items-center text-green-500">
            <ChevronUp size={20} />
            <span className="text-sm font-medium">
              {Math.abs(stats.evolution)}%
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${stats.tauxAbsenteisme}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AbsencesWidget;
