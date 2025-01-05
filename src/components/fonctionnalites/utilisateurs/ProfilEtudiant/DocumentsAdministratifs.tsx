import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';

const DocumentsAdministratifs = () => {
  const documents = [
    {
      id: 1,
      titre: "Attestation d'inscription",
      dateEmission: '2024-01-15',
      statut: 'disponible',
      type: 'pdf',
      taille: '156 KB',
    },
    {
      id: 2,
      titre: 'Carte étudiante',
      dateEmission: '2024-01-10',
      statut: 'en_cours',
      type: 'pdf',
      taille: '89 KB',
    },
    {
      id: 3,
      titre: 'Relevé de notes S1',
      dateEmission: '2024-01-20',
      statut: 'disponible',
      type: 'pdf',
      taille: '245 KB',
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Documents Administratifs
        </h1>
        <p className="text-gray-500">
          Gérez vos documents officiels et certificats
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}

        <DemanderDocument />
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Historique des demandes
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <HistoriqueTable documents={documents} />
        </div>
      </div>
    </div>
  );
};

const DocumentCard = ({ document }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FileText className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{document.titre}</h3>
            <p className="text-sm text-gray-500">
              {document.type} • {document.taille}
            </p>
          </div>
        </div>
        <StatusBadge status={document.statut} />
      </div>

      <div className="mt-4 flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        {new Date(document.dateEmission).toLocaleDateString('fr-FR')}
      </div>

      <div className="mt-6 flex space-x-3">
        <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Eye className="w-4 h-4 mr-2" />
          Aperçu
        </button>
        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Télécharger
        </button>
      </div>
    </div>
  </motion.div>
);

const DemanderDocument = () => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm border border-blue-200 p-6 flex flex-col items-center justify-center text-center"
  >
    <div className="p-3 bg-blue-100 rounded-full mb-4">
      <FileText className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="font-medium text-gray-900 mb-2">Demander un document</h3>
    <p className="text-sm text-gray-600 mb-4">
      Besoin d'une attestation ou d'un certificat ?
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
      Nouvelle demande
    </button>
  </motion.div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    disponible: 'bg-green-100 text-green-800',
    en_cours: 'bg-yellow-100 text-yellow-800',
    refuse: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full ${styles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const HistoriqueTable = ({ documents }) => (
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Document
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Date Demande
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Statut
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {documents.map((doc) => (
        <motion.tr
          key={doc.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="font-medium text-gray-900">{doc.titre}</div>
                <div className="text-sm text-gray-500">{doc.type}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {new Date(doc.dateEmission).toLocaleDateString('fr-FR')}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <StatusBadge status={doc.statut} />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex space-x-3">
              <button className="text-blue-600 hover:text-blue-800">
                Télécharger
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                Détails
              </button>
            </div>
          </td>
        </motion.tr>
      ))}
    </tbody>
  </table>
);

export default DocumentsAdministratifs;
