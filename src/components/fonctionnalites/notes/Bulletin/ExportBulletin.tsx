// src/composants/fonctionnalites/notes/Bulletin/ExportBulletin.tsx
import React from 'react';
import { Download, FileText, Table } from 'lucide-react';

export const ExportBulletin = ({ bulletinData }) => {
  const handleExportPDF = () => {
    // Logique d'export PDF à implémenter
    console.log('Export PDF:', bulletinData);
  };

  const handleExportExcel = () => {
    // Logique d'export Excel à implémenter
    console.log('Export Excel:', bulletinData);
  };

  return (
    <div className="mt-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Aperçu du bulletin
        </h3>

        {bulletinData && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium">Informations générales</h4>
              <p className="text-sm text-gray-600">
                Classe: {bulletinData.classe}
              </p>
              <p className="text-sm text-gray-600">
                Semestre: {bulletinData.semestre}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-left text-sm font-medium text-gray-500">
                      Étudiant
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-500">
                      Module
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-500">
                      Note
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-500">
                      Coefficient
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bulletinData.etudiants.map((etudiant) =>
                    etudiant.modules.map((module, idx) => (
                      <tr key={`${etudiant.id}-${idx}`}>
                        <td className="p-4 text-sm text-gray-900">
                          {idx === 0
                            ? `${etudiant.prenom} ${etudiant.nom}`
                            : ''}
                        </td>
                        <td className="p-4 text-sm text-gray-900">
                          {module.nom}
                        </td>
                        <td className="p-4 text-sm text-gray-900">
                          {module.note}
                        </td>
                        <td className="p-4 text-sm text-gray-900">
                          {module.coefficient}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleExportPDF}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Exporter en PDF
              </button>

              <button
                onClick={handleExportExcel}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                <Table className="w-4 h-4 mr-2" />
                Exporter en Excel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
