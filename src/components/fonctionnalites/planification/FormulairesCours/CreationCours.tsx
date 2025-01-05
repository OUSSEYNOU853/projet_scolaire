import React, { useState } from 'react';
import { Calendar, Clock, Users, BookOpen, Home } from 'lucide-react';

// Types pour le formulaire
interface FormCours {
  module: string;
  professeur: string;
  classe: string;
  quotaHoraire: number;
  semestre: string;
  salle: string;
}

export default function CreationCours() {
  const [formData, setFormData] = useState<FormCours>({
    module: '',
    professeur: '',
    classe: '',
    quotaHoraire: 0,
    semestre: '',
    salle: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Appeler l'API pour sauvegarder le cours
    console.log('Données du cours:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Création d'un Nouveau Cours
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Module */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <BookOpen className="w-4 h-4 mr-2" />
            Module
          </label>
          <input
            type="text"
            name="module"
            value={formData.module}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Nom du module"
            required
          />
        </div>

        {/* Professeur */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2" />
            Professeur
          </label>
          <select
            name="professeur"
            value={formData.professeur}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionner un professeur</option>
            <option value="prof1">Dr. Diallo</option>
            <option value="prof2">Pr. Ndiaye</option>
          </select>
        </div>

        {/* Classe */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2" />
            Classe
          </label>
          <select
            name="classe"
            value={formData.classe}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionner une classe</option>
            <option value="classe1">L1 Informatique</option>
            <option value="classe2">L2 Informatique</option>
          </select>
        </div>

        {/* Quota Horaire */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Clock className="w-4 h-4 mr-2" />
            Quota Horaire
          </label>
          <input
            type="number"
            name="quotaHoraire"
            value={formData.quotaHoraire}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            min="0"
            required
          />
        </div>

        {/* Semestre */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Semestre
          </label>
          <select
            name="semestre"
            value={formData.semestre}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionner un semestre</option>
            <option value="S1">Semestre 1</option>
            <option value="S2">Semestre 2</option>
          </select>
        </div>

        {/* Salle */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Home className="w-4 h-4 mr-2" />
            Salle
          </label>
          <select
            name="salle"
            value={formData.salle}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionner une salle</option>
            <option value="salle1">Salle 101</option>
            <option value="salle2">Salle 102</option>
          </select>
        </div>

        {/* Boutons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Créer le cours
          </button>
        </div>
      </form>
    </div>
  );
}

//import CreationCours from './composants/fonctionnalites/planification/FormulairesCours/CreationCours';
//import ModificationCours from './composants/fonctionnalites/planification/FormulairesCours/ModificationCours';
//import ValidationCours from './composants/fonctionnalites/planification/FormulairesCours/ValidationCours';
