import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Filter,
  Search,
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
  BarChart2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const GestionNotes = () => {
  const [classes] = useState([
    { id: 1, nom: 'L3 Informatique' },
    { id: 2, nom: 'M1 Data Science' },
  ]);

  const [modules] = useState([
    { id: 1, nom: 'Développement Web', coefficient: 3 },
    { id: 2, nom: 'Base de données', coefficient: 4 },
  ]);

  const [notes] = useState([
    {
      id: 1,
      etudiant: 'Fatou Ndiaye',
      note: 15,
      module: 'Développement Web',
      type: 'Examen',
    },
    {
      id: 2,
      etudiant: 'Amadou Diallo',
      note: 17,
      module: 'Base de données',
      type: 'Contrôle',
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* En-tête avec fond dégradé */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Gestion des Notes</h1>
            <p className="mt-2 text-blue-100">
              Gérez et analysez les performances des étudiants
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md">
              <FileSpreadsheet size={20} className="mr-2" />
              Importer
            </button>
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md">
              <Download size={20} className="mr-2" />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {/* Zone de recherche et filtres */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un étudiant..."
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option value="">Sélectionner une classe</option>
              {classes.map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.nom}
                </option>
              ))}
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option value="">Sélectionner un module</option>
              {modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.nom}
                </option>
              ))}
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option value="">Type d'évaluation</option>
              <option value="examen">Examen</option>
              <option value="controle">Contrôle</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Tableau des notes avec design amélioré */}
      <Card className="mb-6">
        <CardHeader className="border-b">
          <CardTitle className="text-xl flex items-center">
            <BarChart2 className="mr-2 h-5 w-5 text-blue-600" />
            Notes et Évaluations
          </CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {['Étudiant', 'Module', 'Type', 'Note', 'Coefficient'].map(
                  (header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort(header.toLowerCase())}
                    >
                      <div className="flex items-center space-x-1">
                        <span>{header}</span>
                        <ArrowUpDown size={14} className="text-gray-400" />
                      </div>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {notes.map((note) => (
                <tr
                  key={note.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                        {note.etudiant.charAt(0)}
                      </div>
                      <span className="ml-3 text-gray-900">
                        {note.etudiant}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {note.module}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        note.type === 'Examen'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {note.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        note.note >= 15
                          ? 'bg-green-100 text-green-800'
                          : note.note >= 10
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {note.note}/20
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      ×{modules.find((m) => m.nom === note.module)?.coefficient}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Statistiques avec design amélioré */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-blue-600">
                Moyenne de classe
              </p>
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart2 className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900">16.0</p>
            <p className="mt-1 text-sm text-gray-500">
              Sur l'ensemble des évaluations
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-green-600">
                Note la plus haute
              </p>
              <div className="p-2 bg-green-100 rounded-lg">
                <ChevronUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900">17.0</p>
            <p className="mt-1 text-sm text-gray-500">Meilleure performance</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-red-600">
                Note la plus basse
              </p>
              <div className="p-2 bg-red-100 rounded-lg">
                <ChevronDown className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900">15.0</p>
            <p className="mt-1 text-sm text-gray-500">Performance minimale</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GestionNotes;
