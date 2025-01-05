// FeuillePresence.jsx
import React, { useState } from 'react';
import ListeEtudiants from './ListeEtudiants';
import ValidationPresence from './ValidationPresence';
import { Clock, Calendar, Users } from 'lucide-react';

interface Etudiant {
  id: string;
  nom: string;
  prenom: string;
  present: boolean | null;
}

export default function FeuillePresence() {
  const [session] = useState({
    cours: 'Développement Web',
    date: '2024-12-27',
    heureDebut: '08:30',
    heureFin: '10:30',
    professeur: 'Dr. Diallo',
    salle: 'Salle 101',
  });

  const [etudiants, setEtudiants] = useState<Etudiant[]>([
    { id: '1', nom: 'Diallo', prenom: 'Amadou', present: null },
    { id: '2', nom: 'Ndiaye', prenom: 'Fatou', present: null },
  ]);

  const [isValidated, setIsValidated] = useState(false);

  const handlePresenceChange = (etudiantId: string, isPresent: boolean) => {
    setEtudiants((prev) =>
      prev.map((etudiant) =>
        etudiant.id === etudiantId
          ? { ...etudiant, present: isPresent }
          : etudiant,
      ),
    );
  };

  const handleValidation = () => {
    setIsValidated(true);
    console.log('Présences validées:', etudiants);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Feuille de Présence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{session.date}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Horaires</p>
              <p className="font-medium">{`${session.heureDebut} - ${session.heureFin}`}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Users className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Cours</p>
              <p className="font-medium">{session.cours}</p>
            </div>
          </div>
        </div>
      </div>

      <ListeEtudiants
        etudiants={etudiants}
        onPresenceChange={handlePresenceChange}
        isValidated={isValidated}
      />

      <ValidationPresence
        onValidate={handleValidation}
        isValidated={isValidated}
        totalEtudiants={etudiants.length}
        presentCount={etudiants.filter((e) => e.present).length}
      />
    </div>
  );
}
