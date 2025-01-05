import React, { useState } from 'react';
import { Table } from 'lucide-react';

// Types pour la gestion des notes
type Etudiant = {
  id: number;
  nom: string;
  prenom: string;
  classe: string;
};

type Note = {
  etudiantId: number;
  note: number;
  commentaire: string;
};

export default function SaisieNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedClasse, setSelectedClasse] = useState('');

  // Exemple de données (à remplacer par des appels API)
  const etudiants: Etudiant[] = [
    { id: 1, nom: 'Diallo', prenom: 'Amadou', classe: '3ème année' },
    { id: 2, nom: 'Ndiaye', prenom: 'Fatou', classe: '3ème année' },
  ];

  const modules = [
    { id: 1, nom: 'Développement Web' },
    { id: 2, nom: 'Base de données' },
  ];

  const handleNoteChange = (etudiantId: number, value: string) => {
    const noteValue = parseFloat(value);
    if (isNaN(noteValue) || noteValue < 0 || noteValue > 20) return;

    setNotes((prevNotes) => {
      const existingNoteIndex = prevNotes.findIndex(
        (n) => n.etudiantId === etudiantId,
      );
      if (existingNoteIndex >= 0) {
        const newNotes = [...prevNotes];
        newNotes[existingNoteIndex] = {
          ...newNotes[existingNoteIndex],
          note: noteValue,
        };
        return newNotes;
      }
      return [...prevNotes, { etudiantId, note: noteValue, commentaire: '' }];
    });
  };

  const handleCommentaireChange = (etudiantId: number, commentaire: string) => {
    setNotes((prevNotes) => {
      const existingNoteIndex = prevNotes.findIndex(
        (n) => n.etudiantId === etudiantId,
      );
      if (existingNoteIndex >= 0) {
        const newNotes = [...prevNotes];
        newNotes[existingNoteIndex] = {
          ...newNotes[existingNoteIndex],
          commentaire,
        };
        return newNotes;
      }
      return [...prevNotes, { etudiantId, note: 0, commentaire }];
    });
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Saisie des Notes</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Enregistrer les notes
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          className="p-2 border rounded"
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
        >
          <option value="">Sélectionner un module</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.nom}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={selectedClasse}
          onChange={(e) => setSelectedClasse(e.target.value)}
        >
          <option value="">Sélectionner une classe</option>
          <option value="3A">3ème année</option>
          <option value="4A">4ème année</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Étudiant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Note (/20)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commentaire
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {etudiants.map((etudiant) => {
              const noteInfo = notes.find((n) => n.etudiantId === etudiant.id);
              return (
                <tr key={etudiant.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {etudiant.nom} {etudiant.prenom}
                    </div>
                    <div className="text-sm text-gray-500">
                      {etudiant.classe}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="0"
                      max="20"
                      step="0.25"
                      className="w-20 p-2 border rounded"
                      value={noteInfo?.note || ''}
                      onChange={(e) =>
                        handleNoteChange(etudiant.id, e.target.value)
                      }
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={noteInfo?.commentaire || ''}
                      onChange={(e) =>
                        handleCommentaireChange(etudiant.id, e.target.value)
                      }
                      placeholder="Ajouter un commentaire..."
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
