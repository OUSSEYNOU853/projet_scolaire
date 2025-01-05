import React from 'react';
import { FileText, Download, Filter } from 'lucide-react';

export default function ExportRapport() {
  const handleExport = (format) => {
    // Logique d'export à implémenter
    console.log(`Export en ${format}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Export des Rapports d'Absences
        </h2>
      </div>

      {/* Filtres */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="flex items-center text-gray-700 font-medium mb-4">
          <Filter className="w-5 h-5 mr-2" />
          Filtres du rapport
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="w-full p-2 border rounded-md">
            <option value="">Sélectionner une classe</option>
            <option value="l1">Licence 1</option>
            <option value="l2">Licence 2</option>
            <option value="l3">Licence 3</option>
          </select>

          <select className="w-full p-2 border rounded-md">
            <option value="">Sélectionner une période</option>
            <option value="semestre1">Semestre 1</option>
            <option value="semestre2">Semestre 2</option>
          </select>

          <select className="w-full p-2 border rounded-md">
            <option value="">Type d'absences</option>
            <option value="all">Toutes les absences</option>
            <option value="justified">Justifiées</option>
            <option value="unjustified">Non justifiées</option>
          </select>
        </div>
      </div>

      {/* Options d'export */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => handleExport('pdf')}
          className="flex items-center justify-center p-4 border-2 border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <FileText className="w-6 h-6 text-blue-600 mr-3" />
          <div className="text-left">
            <h3 className="font-medium text-gray-800">Exporter en PDF</h3>
            <p className="text-sm text-gray-500">
              Rapport détaillé avec graphiques
            </p>
          </div>
        </button>

        <button
          onClick={() => handleExport('excel')}
          className="flex items-center justify-center p-4 border-2 border-green-100 rounded-lg hover:bg-green-50 transition-colors"
        >
          <Download className="w-6 h-6 text-green-600 mr-3" />
          <div className="text-left">
            <h3 className="font-medium text-gray-800">Exporter en Excel</h3>
            <p className="text-sm text-gray-500">Données brutes pour analyse</p>
          </div>
        </button>
      </div>
    </div>
  );
}
