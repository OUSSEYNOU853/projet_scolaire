import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import GraphiquesAbsences from './GraphiquesAbsences';
import ExportRapport from './ExportRapport';

// Composant pour les cartes de statistiques
const StatCard = ({ titre, valeur, evolution, positif }: any) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow">
    <h3 className="text-sm text-gray-600 mb-1">{titre}</h3>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-semibold">{valeur}</span>
      <span
        className={`text-sm font-medium ${
          positif ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {evolution}
      </span>
    </div>
  </div>
);

export default function StatistiquesAbsences() {
  const [periode, setPeriode] = useState('mois');
  const [filiere, setFiliere] = useState('tous');

  // Données factices pour démonstration
  const donnees = [
    { mois: 'Jan', absences: 24, justifiees: 18, nonJustifiees: 6 },
    { mois: 'Fév', absences: 31, justifiees: 22, nonJustifiees: 9 },
    { mois: 'Mar', absences: 28, justifiees: 20, nonJustifiees: 8 },
    { mois: 'Avr', absences: 35, justifiees: 25, nonJustifiees: 10 },
  ];

  return (
    <div className="space-y-6">
      {/* En-tête avec filtres */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Statistiques des absences
          </h2>
          <div className="flex gap-4">
            <select
              value={periode}
              onChange={(e) => setPeriode(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="semaine">Cette semaine</option>
              <option value="mois">Ce mois</option>
              <option value="semestre">Ce semestre</option>
            </select>
            <select
              value={filiere}
              onChange={(e) => setFiliere(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="tous">Toutes les filières</option>
              <option value="informatique">Informatique</option>
              <option value="gestion">Gestion</option>
            </select>
          </div>
        </div>

        {/* Statistiques générales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            titre="Total des absences"
            valeur="118"
            evolution="+12%"
            positif={false}
          />
          <StatCard
            titre="Absences justifiées"
            valeur="85"
            evolution="+8%"
            positif={true}
          />
          <StatCard
            titre="Taux de justification"
            valeur="72%"
            evolution="+5%"
            positif={true}
          />
        </div>

        {/* Graphique principal */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={donnees}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="justifiees"
                name="Absences justifiées"
                fill="#4ade80"
              />
              <Bar
                dataKey="nonJustifiees"
                name="Absences non justifiées"
                fill="#f87171"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Composants pour les graphiques détaillés et l'export */}
      <GraphiquesAbsences
        donneesMensuelles={donnees}
        donneesParModule={[
          { module: 'Mathématiques', taux: 20 },
          { module: 'Informatique', taux: 15 },
          { module: 'Physique', taux: 10 },
        ]}
      />

      <ExportRapport />
    </div>
  );
}
