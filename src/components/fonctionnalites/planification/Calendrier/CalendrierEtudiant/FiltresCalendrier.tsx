import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';

type FiltresProps = {
  filtres: {
    module: string;
    professeur: string;
  };
  setFiltres: React.Dispatch<
    React.SetStateAction<{
      module: string;
      professeur: string;
    }>
  >;
};

const FiltresCalendrier = ({ filtres, setFiltres }: FiltresProps) => {
  const modules = ['Développement Web', 'Base de données', 'Algorithmique'];
  const professeurs = ['Dr. Diallo', 'Pr. Ndiaye', 'M. Sow'];

  return (
    <Card className="mb-6">
      <CardHeader className="border-b">
        <CardTitle className="text-xl">Filtres</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Module
            </label>
            <select
              value={filtres.module}
              onChange={(e) =>
                setFiltres({ ...filtres, module: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous les modules</option>
              {modules.map((module) => (
                <option key={module} value={module}>
                  {module}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professeur
            </label>
            <select
              value={filtres.professeur}
              onChange={(e) =>
                setFiltres({ ...filtres, professeur: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous les professeurs</option>
              {professeurs.map((prof) => (
                <option key={prof} value={prof}>
                  {prof}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FiltresCalendrier;
