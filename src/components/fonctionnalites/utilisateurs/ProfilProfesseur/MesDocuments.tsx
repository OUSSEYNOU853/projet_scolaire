import React, { useState } from 'react';
import {
  FileText,
  Upload,
  Download,
  Search,
  Filter,
  Calendar,
  Trash2,
  Eye,
  Plus,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function DocumentsAdministratifsProfs() {
  const { sidebarOpen } = useLayout();

  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    {
      id: 1,
      name: 'Contrat de travail 2024',
      type: 'contrat',
      date: '2024-01-02',
      status: 'à_signer',
      size: '1.2 MB',
    },
    {
      id: 2,
      name: 'Emploi du temps - Semestre 2',
      type: 'planning',
      date: '2024-01-01',
      status: 'validé',
      size: '856 KB',
    },
    {
      id: 3,
      name: 'Attestation de service',
      type: 'attestation',
      date: '2023-12-28',
      status: 'validé',
      size: '450 KB',
    },
  ];

  const documentTypes = [
    { id: 'all', label: 'Tous les documents' },
    { id: 'contrat', label: 'Contrats' },
    { id: 'planning', label: 'Plannings' },
    { id: 'attestation', label: 'Attestations' },
    { id: 'autres', label: 'Autres documents' },
  ];

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full">
        <div className="p-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Documents Administratifs
                </h1>
                <p className="text-blue-100">
                  Gérez vos documents administratifs
                </p>
              </div>
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition">
                <Plus className="h-5 w-5" />
                Nouveau document
              </button>
            </div>
          </div>
          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total documents
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      À signer
                    </p>
                    <p className="text-3xl font-bold text-orange-600 mt-2">3</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      En attente
                    </p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">2</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Filtres et recherche */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Rechercher un document..."
                  className="pl-10 w-full p-3 bg-gray-50 rounded-lg border focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="p-3 bg-gray-50 rounded-lg border focus:border-blue-500"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {documentTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>

              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="date"
                  className="pl-10 w-full p-3 bg-gray-50 rounded-lg border focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          {/* Liste des documents */}
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Document
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Taille
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Statut
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="font-medium text-gray-900">
                            {doc.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{doc.type}</td>
                      <td className="px-6 py-4 text-gray-500">{doc.date}</td>
                      <td className="px-6 py-4 text-gray-500">{doc.size}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            doc.status === 'validé'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="h-5 w-5" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-800">
                            <Download className="h-5 w-5" />
                          </button>
                          <button className="text-red-400 hover:text-red-600">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          {/* Modal pour télécharger un nouveau document */}
          {/* Ce composant pourrait être ajouté si nécessaire */}
        </div>
      </div>
    </main>
  );
}
