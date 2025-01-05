import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

interface Etudiant {
  id: string;
  nom: string;
  prenom: string;
  present: boolean | null;
}

interface ListeEtudiantsProps {
  etudiants: Etudiant[];
  onPresenceChange: (etudiantId: string, isPresent: boolean) => void;
  isValidated: boolean;
}

export default function ListeEtudiants({
  etudiants,
  onPresenceChange,
  isValidated,
}: ListeEtudiantsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Liste des Étudiants</h2>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Nom</th>
            <th className="p-4 text-left">Prénom</th>
            <th className="p-4 text-left">Statut</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => (
            <tr key={etudiant.id} className="border-t">
              <td className="p-4">{etudiant.nom}</td>
              <td className="p-4">{etudiant.prenom}</td>
              <td className="p-4">
                {etudiant.present === null ? (
                  <span className="text-yellow-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    En attente
                  </span>
                ) : etudiant.present ? (
                  <span className="text-green-600 flex items-center">
                    <Check size={16} className="mr-1" />
                    Présent
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <X size={16} className="mr-1" />
                    Absent
                  </span>
                )}
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  {!isValidated && (
                    <>
                      <button
                        onClick={() => onPresenceChange(etudiant.id, true)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded"
                        aria-label={`Marquer ${etudiant.nom} ${etudiant.prenom} comme présent`}
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => onPresenceChange(etudiant.id, false)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                        aria-label={`Marquer ${etudiant.nom} ${etudiant.prenom} comme absent`}
                      >
                        <X size={16} />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
