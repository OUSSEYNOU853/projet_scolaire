import React from 'react';
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

const StatistiquesNotes = () => {
  // Données exemple (à remplacer par des données réelles)
  const donneesNotes = [
    { classe: '3A Info', moyenne: 14.5, tauxReussite: 85, effectif: 30 },
    { classe: '3A Réseaux', moyenne: 13.8, tauxReussite: 78, effectif: 25 },
    { classe: '4A Info', moyenne: 15.2, tauxReussite: 92, effectif: 28 },
    { classe: '4A Réseaux', moyenne: 14.2, tauxReussite: 82, effectif: 22 },
  ];

  const donneesRepartition = [
    { intervalle: '0-5', nombre: 2 },
    { intervalle: '5-10', nombre: 8 },
    { intervalle: '10-15', nombre: 25 },
    { intervalle: '15-20', nombre: 15 },
  ];

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Statistiques des Notes
      </h2>

      {/* Filtres */}
      <div className="grid grid-cols-3 gap-4">
        <select className="p-2 border rounded">
          <option value="">Tous les modules</option>
          <option value="dev-web">Développement Web</option>
          <option value="bdd">Base de données</option>
        </select>
        <select className="p-2 border rounded">
          <option value="">Toutes les classes</option>
          <option value="3A">3ème année</option>
          <option value="4A">4ème année</option>
        </select>
        <select className="p-2 border rounded">
          <option value="">Tous les semestres</option>
          <option value="S1">Semestre 1</option>
          <option value="S2">Semestre 2</option>
        </select>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard titre="Moyenne générale" valeur="14.2/20" evolution="+0.5" />
        <StatCard titre="Taux de réussite" valeur="84%" evolution="+2%" />
        <StatCard titre="Effectif total" valeur="105" evolution="-3" />
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Moyennes par classe */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Moyennes par classe</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={donneesNotes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="classe" />
                <YAxis domain={[0, 20]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="moyenne" fill="#3B82F6" name="Moyenne" />
                <Bar
                  dataKey="tauxReussite"
                  fill="#10B981"
                  name="Taux de réussite %"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Répartition des notes */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Répartition des notes</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={donneesRepartition}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="intervalle" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="nombre"
                  fill="#6366F1"
                  name="Nombre d'étudiants"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant pour les cartes de statistiques
const StatCard = ({
  titre,
  valeur,
  evolution,
}: {
  titre: string;
  valeur: string;
  evolution: string;
}) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h4 className="text-sm font-medium text-gray-500">{titre}</h4>
    <div className="mt-2 flex justify-between items-end">
      <p className="text-2xl font-semibold text-gray-900">{valeur}</p>
      <span
        className={`text-sm ${evolution.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
      >
        {evolution}
      </span>
    </div>
  </div>
);

export default StatistiquesNotes;
