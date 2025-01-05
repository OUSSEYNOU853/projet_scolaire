import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Checkbox } from '../../../ui/checkbox';

type Permission = {
  id: string;
  nom: string;
  description: string;
  modules: {
    id: string;
    nom: string;
    actions: string[];
  }[];
};

export default function Permissions() {
  const [permissions, setPermissions] = useState<Permission[]>([
    {
      id: '1',
      nom: 'Professeur',
      description: 'Accès aux fonctionnalités des professeurs',
      modules: [
        {
          id: 'cours',
          nom: 'Gestion des Cours',
          actions: ['voir', 'créer', 'modifier', 'supprimer'],
        },
        {
          id: 'notes',
          nom: 'Gestion des Notes',
          actions: ['voir', 'ajouter', 'modifier'],
        },
      ],
    },
    // Ajoutez d'autres rôles ici
  ]);

  return (
    <div className="space-y-6">
      {permissions.map((role) => (
        <Card key={role.id}>
          <CardHeader>
            <CardTitle>{role.nom}</CardTitle>
            <p className="text-sm text-gray-600">{role.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {role.modules.map((module) => (
                <div key={module.id} className="space-y-2">
                  <h3 className="font-medium">{module.nom}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {module.actions.map((action) => (
                      <label
                        key={action}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`${role.id}-${module.id}-${action}`} />
                        <span className="text-sm font-medium capitalize">
                          {action}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
