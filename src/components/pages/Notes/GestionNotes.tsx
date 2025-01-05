import React, { useState } from 'react';
import { Plus, FileText } from 'lucide-react';

export default function GestionNotesCRUD() {
  const [selectedClasse, setSelectedClasse] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [updatedNotes, setUpdatedNotes] = useState([
    {
      id: 1,
      etudiant: 'Amadou Diallo',
      classe: 'L3 Info',
      module: 'Base de données',
      devoir: 15,
      examen: 16,
      moyenne: 15.5,
    },
  ]);

  const handleInputChange = (id, field, value) => {
    setUpdatedNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, [field]: parseFloat(value) || 0 } : note,
      ),
    );
  };

  const handleSave = () => {
    console.log('Notes mises à jour :', updatedNotes);
  };

  const filteredNotes = updatedNotes.filter(
    (note) =>
      (selectedClasse ? note.classe === selectedClasse : true) &&
      (selectedModule ? note.module === selectedModule : true),
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Notes</h1>
        <p className="text-gray-600">
          Gérez les notes des étudiants par classe et par module
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          value={selectedClasse}
          onChange={(e) => setSelectedClasse(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">Sélectionner une classe</option>
          <option value="L3 Info">L3 Informatique</option>
          <option value="M1 Info">M1 Informatique</option>
        </select>

        <select
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">Sélectionner un module</option>
          <option value="Base de données">Base de données</option>
          <option value="Développement Web">Développement Web</option>
        </select>

        <div className="flex gap-4">
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition duration-200 shadow-md">
            <Plus size={20} />
            Nouvelle Évaluation
          </button>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <FileText size={20} />
            Exporter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Étudiant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Classe
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Module
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Devoir
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Examen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Moyenne
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredNotes.map((note) => (
              <tr key={note.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {note.etudiant}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {note.classe}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {note.module}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    value={note.devoir}
                    onChange={(e) =>
                      handleInputChange(note.id, 'devoir', e.target.value)
                    }
                    className="w-20 border rounded-lg px-2 py-1"
                    min="0"
                    max="20"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    value={note.examen}
                    onChange={(e) =>
                      handleInputChange(note.id, 'examen', e.target.value)
                    }
                    className="w-20 border rounded-lg px-2 py-1"
                    min="0"
                    max="20"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {note.moyenne}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 border-t">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
