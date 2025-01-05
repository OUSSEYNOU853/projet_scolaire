// src/composants/fonctionnalites/notes/SaisieNotes/GrilleNotes.tsx
import React, { useState } from 'react';
import { Table } from 'lucide-react';

interface Note {
  etudiantId: string;
  nom: string;
  prenom: string;
  note: number;
}

export default function GrilleNotes() {
  const [notes, setNotes] = useState<Note[]>([
    { etudiantId: '1', nom: 'Diallo', prenom: 'Amadou', note: 0 },
    { etudiantId: '2', nom: 'Ndiaye', prenom: 'Fatou', note: 0 },
  ]);

  const handleNoteChange = (etudiantId: string, nouvelleNote: number) => {
    setNotes(
      notes.map((note) =>
        note.etudiantId === etudiantId ? { ...note, note: nouvelleNote } : note,
      ),
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Saisie des Notes</h2>
        <div className="flex gap-2">
          <select className="rounded-md border p-2">
            <option>Développement Web</option>
            <option>Base de données</option>
          </select>
          <select className="rounded-md border p-2">
            <option>Devoir 1</option>
            <option>Examen Final</option>
          </select>
        </div>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Nom</th>
            <th className="p-4 text-left">Prénom</th>
            <th className="p-4 text-left">Note /20</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((etudiant) => (
            <tr key={etudiant.etudiantId} className="border-t">
              <td className="p-4">{etudiant.nom}</td>
              <td className="p-4">{etudiant.prenom}</td>
              <td className="p-4">
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={etudiant.note}
                  onChange={(e) =>
                    handleNoteChange(
                      etudiant.etudiantId,
                      Number(e.target.value),
                    )
                  }
                  className="w-20 p-2 border rounded"
                />
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">
                  Valider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-end gap-4">
        <button className="px-4 py-2 border rounded hover:bg-gray-50">
          Annuler
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
