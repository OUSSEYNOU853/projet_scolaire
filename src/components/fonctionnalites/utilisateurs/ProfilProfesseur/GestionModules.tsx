import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card'; // Assurez-vous que le fichier card.tsx existe
import { Button } from '../../../ui/button'; // Assurez-vous que le fichier button.tsx existe

export default function GestionModules() {
  // Exemple de données de modules
  const modules = [
    {
      id: 1,
      code: 'DEV301',
      nom: 'Développement Web Avancé',
      niveau: 'L3',
      heuresTotal: 48,
      heuresEffectuees: 32,
    },
    {
      id: 2,
      code: 'BDD202',
      nom: 'Bases de Données',
      niveau: 'L2',
      heuresTotal: 36,
      heuresEffectuees: 24,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Modules Enseignés</h3>
        <Button>Ajouter un module</Button>
      </div>

      <div className="grid gap-4">
        {modules.map((module) => (
          <Card key={module.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{module.nom}</CardTitle>
                  <p className="text-sm text-gray-500">Code: {module.code}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {module.niveau}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Heures totales</p>
                  <p className="font-medium">{module.heuresTotal}h</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Heures effectuées</p>
                  <p className="font-medium">{module.heuresEffectuees}h</p>
                </div>
              </div>

              {/* Barre de progression */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${(module.heuresEffectuees / module.heuresTotal) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Progression:{' '}
                  {Math.round(
                    (module.heuresEffectuees / module.heuresTotal) * 100,
                  )}
                  %
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  Voir détails
                </Button>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
