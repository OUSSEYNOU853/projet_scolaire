import React, { useState } from 'react';
import {
  Calendar,
  Filter,
  Download,
  Search,
  ChevronDown,
  Eye,
} from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export default function GestionPresences() {
  const [filtreClasse, setFiltreClasse] = useState('toutes');
  const [filtrePeriode, setFiltrePeriode] = useState('semaine');
  const [searchTerm, setSearchTerm] = useState('');

  const absences = [
    {
      id: 1,
      etudiant: 'Amadou Diop',
      classe: '3ème année',
      date: '2024-12-30',
      cours: 'Développement Web',
      professeur: 'Dr. Ndiaye',
      statut: 'non justifiée',
      heures: 2,
    },
    {
      id: 2,
      etudiant: 'Fatou Sow',
      classe: '4ème année',
      date: '2024-12-29',
      cours: 'Base de données',
      professeur: 'Dr. Sy',
      statut: 'justifiée',
      heures: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* En-tête avec gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Gestion des Absences</h1>
            <p className="text-blue-100">
              Suivez et gérez les absences des étudiants
            </p>
          </div>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md">
            <Download size={20} />
            Exporter les données
          </button>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un étudiant..."
              className="pl-10 w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none appearance-none cursor-pointer hover:border-blue-500 transition w-full"
            value={filtreClasse}
            onChange={(e) => setFiltreClasse(e.target.value)}
          >
            <option value="toutes">Toutes les classes</option>
            <option value="3eme">3ème année</option>
            <option value="4eme">4ème année</option>
            <option value="5eme">5ème année</option>
          </select>

          <select
            className="p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none appearance-none cursor-pointer hover:border-blue-500 transition w-full"
            value={filtrePeriode}
            onChange={(e) => setFiltrePeriode(e.target.value)}
          >
            <option value="semaine">Cette semaine</option>
            <option value="mois">Ce mois</option>
            <option value="semestre">Ce semestre</option>
          </select>

          <div className="relative">
            <Calendar
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="date"
              className="pl-10 w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none hover:border-blue-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total absences
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24h</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <span className="text-green-500">↑ 12%</span> depuis le mois
              dernier
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Non justifiées
                </p>
                <p className="text-3xl font-bold text-red-600 mt-2">8h</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <Filter className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <span className="text-red-500">↓ 5%</span> depuis le mois dernier
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Étudiants {'>'} 20h
                </p>
                <p className="text-3xl font-bold text-orange-600 mt-2">3</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <span className="text-orange-500">↑ 2</span> étudiants de plus
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tableau des absences */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Étudiant
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Classe
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Cours
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Heures
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {absences.map((absence) => (
                <tr
                  key={absence.id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {absence.etudiant}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{absence.classe}</td>
                  <td className="px-6 py-4 text-gray-500">{absence.date}</td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{absence.cours}</div>
                    <div className="text-gray-500 text-sm">
                      {absence.professeur}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{absence.heures}h</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        absence.statut === 'justifiée'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {absence.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-150">
                      Justifier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
