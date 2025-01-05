import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Award } from 'lucide-react';

interface Performance {
  moyenne: number;
  evolution: number;
  meilleureMatiere: string;
  donneesMoyennes: {
    mois: string;
    moyenne: number;
  }[];
}

const PerformanceWidget = () => {
  // Exemple de données (à remplacer par des données réelles de l'API)
  const performance: Performance = {
    moyenne: 14.5,
    evolution: 1.2,
    meilleureMatiere: 'Développement Web',
    donneesMoyennes: [
      { mois: 'Sep', moyenne: 13.2 },
      { mois: 'Oct', moyenne: 13.8 },
      { mois: 'Nov', moyenne: 14.1 },
      { mois: 'Déc', moyenne: 14.5 },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Performance académique
        </h2>
        <button className="text-blue-600 text-sm hover:underline">
          Détails
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <div className="flex items-center">
            <TrendingUp className="text-green-500 mr-2" size={20} />
            <span className="text-2xl font-bold text-gray-800">
              {performance.moyenne}/20
            </span>
          </div>
          <p className="text-sm text-gray-600">Moyenne générale</p>
          <span className="text-xs text-green-500">
            +{performance.evolution} pts
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Award className="text-yellow-500 mr-2" size={20} />
            <span className="text-lg font-medium text-gray-800">
              {performance.meilleureMatiere}
            </span>
          </div>
          <p className="text-sm text-gray-600">Meilleure matière</p>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performance.donneesMoyennes}>
            <XAxis dataKey="mois" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} domain={[0, 20]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="moyenne"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceWidget;
