import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Types des données et des props
interface DonneesMensuelles {
  mois: string;
  absences: number;
  justifiees: number;
  nonJustifiees: number;
}

interface DonneesParModule {
  module: string;
  taux: number;
}

interface GraphiquesAbsencesProps {
  donneesMensuelles: DonneesMensuelles[];
  donneesParModule: DonneesParModule[];
}

const GraphiquesAbsences = ({
  donneesMensuelles,
  donneesParModule,
}: GraphiquesAbsencesProps) => {
  return (
    <div className="space-y-8">
      {/* Graphique Évolution mensuelle */}
      <div className="h-80 mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Évolution mensuelle des absences
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={donneesMensuelles}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="justifiees" name="Justifiées" fill="#4CAF50" />
            <Bar dataKey="nonJustifiees" name="Non Justifiées" fill="#f44336" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique par module */}
      <div className="h-80">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Taux d'absence par module
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={donneesParModule}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="module" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="taux"
              name="Taux d'absence (%)"
              stroke="#2196F3"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphiquesAbsences;
