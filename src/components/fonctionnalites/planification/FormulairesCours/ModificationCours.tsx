import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, BookOpen, Home } from 'lucide-react';

interface FormCours {
  id: string;
  module: string;
  professeur: string;
  classe: string;
  quotaHoraire: number;
  semestre: string;
  salle: string;
}

export default function ModificationCours({ courseId }: { courseId: string }) {
  const [formData, setFormData] = useState<FormCours>({
    id: '',
    module: '',
    professeur: '',
    classe: '',
    quotaHoraire: 0,
    semestre: '',
    salle: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données du cours
    const fetchCourseData = async () => {
      // TODO: Appeler l'API pour récupérer les données du cours
      // Simulation de données
      const mockData = {
        id: courseId,
        module: 'Développement Web',
        professeur: 'prof1',
        classe: 'classe1',
        quotaHoraire: 30,
        semestre: 'S1',
        salle: 'salle1',
      };

      setFormData(mockData);
      setIsLoading(false);
    };

    fetchCourseData();
  }, [courseId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Appeler l'API pour mettre à jour le cours
    console.log('Données modifiées:', formData);
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

  if (isLoading) {
    return <div className="text-center p-8">Chargement...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Modification du Cours
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Les mêmes champs que CreationCours mais avec les valeurs pré-remplies */}
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
            required
          />
        </div>

        {/* Autres champs similaires... */}

        {/* Boutons avec actions différentes */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 text-red-600 bg-red-100 rounded-md hover:bg-red-200"
          >
            Supprimer
          </button>
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
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
