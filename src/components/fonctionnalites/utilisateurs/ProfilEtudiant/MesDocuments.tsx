import React, { useState } from 'react';
import {
  Download,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Filter,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function DocumentsAdministratifsEtudiants() {
  const { sidebarOpen } = useLayout();
  const [filterCategory, setFilterCategory] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Certificat de scolarité',
      category: 'certificats',
      date: '2024-01-02',
      status: 'disponible',
      semester: '2023-2024',
      format: 'PDF',
      size: '156 KB',
    },
    {
      id: 2,
      name: 'Relevé de notes Semestre 1',
      category: 'notes',
      date: '2024-01-01',
      status: 'disponible',
      semester: '2023-2024',
      format: 'PDF',
      size: '245 KB',
    },
    {
      id: 3,
      name: 'Attestation de réussite',
      category: 'attestations',
      date: '2024-01-03',
      status: 'en_cours',
      semester: '2023-2024',
      format: 'PDF',
      size: '0 KB',
    },
    {
      id: 4,
      name: 'Convention de stage',
      category: 'stages',
      date: '2023-12-28',
      status: 'à_signer',
      semester: '2023-2024',
      format: 'PDF',
      size: '380 KB',
    },
  ];

  const categories = [
    { id: 'all', name: 'Tous les documents' },
    { id: 'certificats', name: 'Certificats' },
    { id: 'notes', name: 'Relevés de notes' },
    { id: 'attestations', name: 'Attestations' },
    { id: 'stages', name: 'Documents de stage' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'disponible':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'en_cours':
        return <Clock className="h-5 w-5 text-orange-500" />;
      case 'à_signer':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'disponible':
        return 'Disponible';
      case 'en_cours':
        return 'En cours de traitement';
      case 'à_signer':
        return 'À signer';
      default:
        return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'disponible':
        return 'bg-green-100 text-green-800';
      case 'en_cours':
        return 'bg-orange-100 text-orange-800';
      case 'à_signer':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments =
    filterCategory === 'all'
      ? documents
      : documents.filter((doc) => doc.category === filterCategory);

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
                  Accédez à tous vos documents officiels
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                <FileText className="h-5 w-5" />
                <span>{documents.length} documents</span>
              </div>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-4 overflow-x-auto p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  filterCategory === category.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {filteredDocuments.map((doc) => (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {doc.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-gray-500">
                            {doc.semester}
                          </span>
                          <span className="text-sm text-gray-500">
                            {doc.format}
                          </span>
                          <span className="text-sm text-gray-500">
                            {doc.size}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusClass(doc.status)}`}
                      >
                        {getStatusIcon(doc.status)}
                        {getStatusText(doc.status)}
                      </span>

                      {doc.status === 'disponible' && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Télécharger
                        </button>
                      )}

                      {doc.status === 'à_signer' && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Signer
                        </button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
