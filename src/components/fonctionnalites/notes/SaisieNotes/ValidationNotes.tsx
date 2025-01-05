import React, { useState } from 'react';
import { Check, AlertTriangle } from 'lucide-react';

type Note = {
  id: string;
  etudiantId: string;
  note: number;
  validated: boolean;
};

type ValidationNotesProps = {
  notes: Note[];
  onValidate: (notes: Note[]) => void;
};

const ValidationNotes = ({ notes, onValidate }: ValidationNotesProps) => {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSelectNote = (noteId: string) => {
    setSelectedNotes((prev) =>
      prev.includes(noteId)
        ? prev.filter((id) => id !== noteId)
        : [...prev, noteId],
    );
  };

  const validateNotes = () => {
    if (selectedNotes.length === 0) {
      setErrorMessage('Veuillez sélectionner au moins une note à valider');
      return;
    }

    const updatedNotes = notes.map((note) => ({
      ...note,
      validated: selectedNotes.includes(note.id),
    }));

    onValidate(updatedNotes);
    setSelectedNotes([]);
    setErrorMessage('');
  };

  return (
    <div className="space-y-4">
      {errorMessage && (
        <div className="flex items-center p-4 bg-red-50 text-red-700 rounded">
          <AlertTriangle className="w-5 h-5 mr-2" />
          {errorMessage}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Validation des notes</h3>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            {notes.map((note) => (
              <div
                key={note.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedNotes.includes(note.id)}
                    onChange={() => handleSelectNote(note.id)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="ml-3">Note: {note.note}/20</span>
                </div>
                {note.validated && <Check className="w-5 h-5 text-green-500" />}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t">
          <button
            onClick={validateNotes}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Valider les notes sélectionnées
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValidationNotes;
