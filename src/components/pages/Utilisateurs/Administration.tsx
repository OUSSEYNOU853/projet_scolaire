import React, { useState } from 'react';
import { UserPlus, Edit, Trash2, Search, ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

export default function AjouterUtilisateur() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users] = useState([
    {
      id: 1,
      nom: 'Diallo',
      prenom: 'Amadou',
      role: 'Étudiant',
      email: 'a.diallo@sa.sn',
      classe: 'L3 Info',
    },
    {
      id: 2,
      nom: 'Ndiaye',
      prenom: 'Mamadou',
      role: 'Professeur',
      email: 'm.ndiaye@sa.sn',
      specialite: 'Base de données',
    },
  ]);

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-100 mb-4 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </button>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Gestion des Utilisateurs</h1>
            <p className="mt-2 text-blue-100">
              Gérez les étudiants, professeurs et administrateurs
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentUser(null);
              setModalOpen(true);
            }}
            className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md"
          >
            <UserPlus size={20} />
            Nouvel Utilisateur
          </button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </CardContent>
      </Card>

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
                  Nom
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Classe/Spécialité
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                        {user.prenom[0]}
                        {user.nom[0]}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {user.nom}
                        </div>
                        <div className="text-gray-500">{user.prenom}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        user.role === 'Étudiant'
                          ? 'bg-green-100 text-green-800'
                          : user.role === 'Professeur'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {user.classe || user.specialite}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => {
                        setCurrentUser(user);
                        setModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-3 p-1 hover:bg-blue-50 rounded"
                    >
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

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-6 border w-full max-w-md shadow-xl rounded-xl bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {currentUser
                ? 'Modifier un utilisateur'
                : 'Ajouter un utilisateur'}
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rôle
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option>Étudiant</option>
                  <option>Professeur</option>
                  <option>Administrateur</option>
                </select>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {currentUser ? 'Modifier' : 'Ajouter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
