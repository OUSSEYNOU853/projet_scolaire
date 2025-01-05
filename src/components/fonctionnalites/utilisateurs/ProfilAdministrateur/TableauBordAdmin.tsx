import React from 'react';
import { Card } from '../../../ui/card';
import { Users, BookOpen, Clock, AlertCircle } from 'lucide-react';

export default function TableauBordAdmin() {
  const statistiques = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'Total Étudiants',
      value: '450',
      evolution: '+5%',
      positif: true,
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      title: 'Cours Actifs',
      value: '32',
      evolution: '+2%',
      positif: true,
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
      title: 'Heures de Cours',
      value: '128',
      evolution: '-3%',
      positif: false,
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: 'Absences',
      value: '15',
      evolution: '-8%',
      positif: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statistiques.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
              <div
                className={`text-sm font-medium ${
                  stat.positif ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.evolution}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Activités Récentes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Activités Récentes</h3>
        <div className="space-y-4">
          <ActiviteItem
            action="Nouveau cours créé"
            detail="Développement Web - L3 Informatique"
            temps="Il y a 2 heures"
          />
          <ActiviteItem
            action="Notes ajoutées"
            detail="Base de données - L2 Informatique"
            temps="Il y a 3 heures"
          />
          <ActiviteItem
            action="Absence signalée"
            detail="5 étudiants - Cours de Réseaux"
            temps="Il y a 4 heures"
          />
        </div>
      </Card>
    </div>
  );
}

const ActiviteItem = ({ action, detail, temps }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <p className="font-medium">{action}</p>
      <p className="text-sm text-gray-500">{detail}</p>
    </div>
    <span className="text-sm text-gray-400">{temps}</span>
  </div>
);
