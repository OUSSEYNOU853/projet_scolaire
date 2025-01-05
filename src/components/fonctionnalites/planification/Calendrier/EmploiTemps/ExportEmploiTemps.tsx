import React from 'react';
import { Download } from 'lucide-react';

type Props = {
  cours: Array<{
    id: string;
    module: string;
    professeur: string;
    salle: string;
    debut: string;
    fin: string;
    classe: string;
  }>;
  semaine: Date;
};

export default function ExportEmploiTemps({ cours, semaine }: Props) {
  const exportPDF = () => {
    // Logique d'export PDF à implémenter
    console.log('Export PDF');
  };

  const exportExcel = () => {
    // Logique d'export Excel à implémenter
    console.log('Export Excel');
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => {}}
      >
        <Download size={20} className="mr-2" />
        Exporter
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
        <div className="py-1">
          <button
            onClick={exportPDF}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Exporter en PDF
          </button>
          <button
            onClick={exportExcel}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Exporter en Excel
          </button>
        </div>
      </div>
    </div>
  );
}
