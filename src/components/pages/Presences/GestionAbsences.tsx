import React, { useState } from 'react';
import { Calendar, Filter, Download, AlertCircle } from 'lucide-react';

export default function GestionAbsences() {
  const [filtreClasse, setFiltreClasse] = useState('');
  const [filtrePeriode, setFiltrePeriode] = useState("aujourd'hui");

  const absencesData = [
    {
      id: 1,
      etudiant: 'Mamadou Diallo',
      classe: 'L3 INFO',
      cours: 'Développement Web',
      date: '2024-12-30',
      heures: 2,
      justifie: false,
      totalHeures: 12,
    },
    // ... autres données
  ];

  return (
    <div className="space-y-6 p-6">
      {/* En-tête avec titre et actions */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Gestion des Absences
        </h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download size={20} />
          Exporter
        </button>
      </div>

      {/* Filtres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Classe
          </label>
          <select
            className="w-full border rounded-md p-2"
            value={filtreClasse}
            onChange={(e) => setFiltreClasse(e.target.value)}
          >
            <option value="">Toutes les classes</option>
            <option value="L3 INFO">L3 INFO</option>
            <option value="M1 INFO">M1 INFO</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Période
          </label>
          <select
            className="w-full border rounded-md p-2"
            value={filtrePeriode}
            onChange={(e) => setFiltrePeriode(e.target.value)}
          >
            <option value="aujourd'hui">Aujourd'hui</option>
            <option value="semaine">Cette semaine</option>
            <option value="mois">Ce mois</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Filter size={20} />
            Appliquer les filtres
          </button>
        </div>
      </div>

      {/* Tableau des absences */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Étudiant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Classe
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Cours
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Heures
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {absencesData.map((absence) => (
              <tr key={absence.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {absence.etudiant}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {absence.classe}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{absence.cours}</td>
                <td className="px-6 py-4 whitespace-nowrap">{absence.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {absence.heures}h
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      absence.justifie
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {absence.justifie ? 'Justifié' : 'Non justifié'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800">
                    Voir détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alertes */}
      <div className="space-y-4">
        {absencesData
          .filter((a) => a.totalHeures >= 10)
          .map((absence) => (
            <div
              key={absence.id}
              className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
            >
              <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-red-800">
                  Alerte : {absence.etudiant} a cumulé {absence.totalHeures}{' '}
                  heures d'absence
                </h3>
                <p className="text-red-600">
                  Une action est requise. L'étudiant a dépassé le seuil
                  d'absences autorisé.
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
