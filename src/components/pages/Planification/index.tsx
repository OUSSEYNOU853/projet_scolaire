import React, { useState } from 'react';
import {
  Calendar,
  Plus,
  Filter,
  Search,
  BookOpen,
  Users,
  Clock,
  MoreVertical,
  Edit,
  Trash2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../ui/card';

export default function Planification() {
  const navigate = useNavigate();
  const [filtreModule, setFiltreModule] = useState('');
  const [filtreProfesseur, setFiltreProfesseur] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const modules = [
    { id: 1, nom: 'Développement Web' },
    { id: 2, nom: 'Base de données' },
    { id: 3, nom: 'Algorithmes' },
  ];

  const professeurs = [
    { id: 1, nom: 'Dr. Diallo' },
    { id: 2, nom: 'Pr. Ndiaye' },
    { id: 3, nom: 'M. Sow' },
  ];

  const coursPlanifies = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      classe: 'L2 Informatique',
      heures: 30,
      progression: 65,
      statut: 'En cours',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Pr. Ndiaye',
      classe: 'L3 Informatique',
      heures: 24,
      progression: 100,
      statut: 'Terminé',
    },
    {
      id: 3,
      module: 'Algorithmes',
      professeur: 'M. Sow',
      classe: 'L1 Informatique',
      heures: 45,
      progression: 0,
      statut: 'Planifié',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* En-tête avec gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Planification des Cours</h1>
            <p className="text-indigo-100">
              Gérez et planifiez les cours du semestre
            </p>
          </div>
          <button
            onClick={() => navigate('/planification/gestion-cours')}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 transition duration-200 shadow-md"
          >
            <Plus className="w-5 h-5" />
            Nouveau Cours
          </button>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Cours</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <span className="text-green-500">↑ 4</span> ce semestre
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Professeurs Actifs
                </p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">8</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <span className="text-indigo-500">+2</span> nouveaux ce mois
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Heures Planifiées
                </p>
                <p className="text-3xl font-bold text-blue-600 mt-2">450h</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <span className="text-blue-500">89%</span> du quota
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtres améliorés */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un cours..."
                className="pl-10 w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none appearance-none cursor-pointer hover:border-indigo-500 transition w-full"
              value={filtreModule}
              onChange={(e) => setFiltreModule(e.target.value)}
            >
              <option value="">Tous les modules</option>
              {modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.nom}
                </option>
              ))}
            </select>
            <select
              className="p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none appearance-none cursor-pointer hover:border-indigo-500 transition w-full"
              value={filtreProfesseur}
              onChange={(e) => setFiltreProfesseur(e.target.value)}
            >
              <option value="">Tous les professeurs</option>
              {professeurs.map((prof) => (
                <option key={prof.id} value={prof.id}>
                  {prof.nom}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Tableau des cours amélioré */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Professeur
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Classe
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Progression
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
              {coursPlanifies.map((cours) => (
                <tr
                  key={cours.id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {cours.module}
                    </div>
                    <div className="text-sm text-gray-500">{cours.heures}h</div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {cours.professeur}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{cours.classe}</td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${cours.progression}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 mt-1">
                      {cours.progression}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        cours.statut === 'En cours'
                          ? 'bg-green-100 text-green-800'
                          : cours.statut === 'Terminé'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {cours.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-3">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 font-medium transition duration-150">
                        <Trash2 size={18} />
                      </button>
                    </div>
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
