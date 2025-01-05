import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type PerformanceData = {
  module: string;
  moyenne: number;
  tauxReussite: number;
  nombreEtudiants: number;
};

type GraphiquesPerformanceProps = {
  data: PerformanceData[];
};

const GraphiquesPerformance = ({ data }: GraphiquesPerformanceProps) => {
  return (
    <div className="space-y-8">
      {/* Graphique des moyennes par module */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Moyennes par module</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="module" />
            <YAxis domain={[0, 20]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="moyenne"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique du taux de réussite */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">
          Taux de réussite par module
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="module" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="tauxReussite"
              fill="#10b981"
              name="Taux de réussite (%)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Statistiques sommaires */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Moyenne générale"
          value={`${(data.reduce((acc, curr) => acc + curr.moyenne, 0) / data.length).toFixed(2)}/20`}
        />
        <StatCard
          title="Taux de réussite moyen"
          value={`${(data.reduce((acc, curr) => acc + curr.tauxReussite, 0) / data.length).toFixed(2)}%`}
        />
        <StatCard
          title="Total étudiants"
          value={data.reduce((acc, curr) => acc + curr.nombreEtudiants, 0)}
        />
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h4 className="text-sm font-medium text-gray-500">{title}</h4>
    <p className="text-2xl font-semibold mt-2">{value}</p>
  </div>
);

export default GraphiquesPerformance;
