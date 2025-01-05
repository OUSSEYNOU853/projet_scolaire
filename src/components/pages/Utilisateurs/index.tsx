import React, { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Users,
  Download,
  FileSpreadsheet,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const Administration = () => {
  const navigate = useNavigate();
  const [utilisateurs] = useState([
    {
      id: 1,
      nom: 'Diallo',
      prenom: 'Amadou',
      role: 'Professeur',
      specialite: 'Développement Web',
      statut: 'Actif',
    },
    {
      id: 2,
      nom: 'Ndiaye',
      prenom: 'Fatou',
      role: 'Étudiant',
      classe: 'L3 Info',
      statut: 'Actif',
    },
    {
      id: 3,
      nom: 'Sow',
      prenom: 'Mohamed',
      role: 'Attaché',
      departement: 'Pédagogie',
      statut: 'Actif',
    },
  ]);

  return (
    <div className="p-6 bg-gray-50">
      {/* En-tête avec fond dégradé */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Gestion des Utilisateurs</h1>
            <p className="mt-2 text-blue-100">
              Gérez les accès et les rôles des utilisateurs
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/utilisateurs/gestion-users')}
              className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md"
            >
              <Plus size={20} />
              Nouvel Utilisateur
            </button>
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md">
              <Download size={20} />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {/* Filtres et recherche */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option value="">Tous les rôles</option>
              <option value="professeur">Professeur</option>
              <option value="etudiant">Étudiant</option>
              <option value="attache">Attaché</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option value="">Tous les statuts</option>
              <option value="actif">Actif</option>
              <option value="inactif">Inactif</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Table des utilisateurs */}
      <Card className="mb-6">
        <CardHeader className="border-b">
          <CardTitle className="text-xl flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-600" />
            Liste des Utilisateurs
          </CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nom & Prénom
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Spécialité/Classe
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {utilisateurs.map((utilisateur) => (
                <tr
                  key={utilisateur.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                        {utilisateur.prenom[0]}
                        {utilisateur.nom[0]}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {utilisateur.nom}
                        </div>
                        <div className="text-sm text-gray-500">
                          {utilisateur.prenom}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-100 text-blue-800">
                      {utilisateur.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {utilisateur.specialite ||
                      utilisateur.classe ||
                      utilisateur.departement}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800">
                      {utilisateur.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-blue-600 hover:text-blue-900 mr-3 p-1 hover:bg-blue-50 rounded">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <div className="text-sm text-gray-700">
          Affichage de 1 à 3 sur 3 utilisateurs
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 border rounded bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled
          >
            Précédent
          </button>
          <button
            className="px-4 py-2 border rounded bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Administration;
