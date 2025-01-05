import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';

type FiltresProps = {
  filtres: {
    classe: string;
    module: string;
    salle: string;
  };
  setFiltres: React.Dispatch<
    React.SetStateAction<{
      classe: string;
      module: string;
      salle: string;
    }>
  >;
};

const FiltresCalendrierProf = ({ filtres, setFiltres }: FiltresProps) => {
  // Données exemple
  const classes = ['L1 Info', 'L2 Info', 'L3 Info', 'M1 Info', 'M2 Info'];
  const modules = [
    'Développement Web',
    'Base de données',
    'Algorithmique',
    'Intelligence Artificielle',
  ];
  const salles = [
    'Salle 101',
    'Salle 102',
    'Salle 103',
    'Amphithéâtre A',
    'Amphithéâtre B',
  ];

  return (
    <Card className="mb-6">
      <CardHeader className="border-b">
        <CardTitle className="text-xl">Filtres</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Classe
            </label>
            <select
              value={filtres.classe}
              onChange={(e) =>
                setFiltres({ ...filtres, classe: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Toutes les classes</option>
              {classes.map((classe) => (
                <option key={classe} value={classe}>
                  {classe}
                </option>
              ))}
            </select>
          </div>
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
              Salle
            </label>
            <select
              value={filtres.salle}
              onChange={(e) =>
                setFiltres({ ...filtres, salle: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Toutes les salles</option>
              {salles.map((salle) => (
                <option key={salle} value={salle}>
                  {salle}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FiltresCalendrierProf;
