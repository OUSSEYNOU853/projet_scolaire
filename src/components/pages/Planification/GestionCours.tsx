import React, { useState } from 'react';
import {
  Save,
  ArrowLeft,
  Calendar,
  Users,
  BookOpen,
  Clock,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../ui/card';

export default function GestionCours() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    module: '',
    professeur: '',
    classe: '',
    heuresTotal: '',
    dateDebut: '',
    dateFin: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* En-tête avec gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 hover:bg-white/30 transition p-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Nouveau Cours</h1>
            <p className="text-blue-100 mt-1">
              Créez et configurez un nouveau cours
            </p>
          </div>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section Informations principales */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-500" />
                Informations du cours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Module
                  </label>
                  <select
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    value={formData.module}
                    onChange={(e) =>
                      setFormData({ ...formData, module: e.target.value })
                    }
                  >
                    <option value="">Sélectionner un module</option>
                    <option value="1">Développement Web</option>
                    <option value="2">Base de données</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    rows={1}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Section Attribution */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-indigo-500" />
                Attribution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professeur
                  </label>
                  <select
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    value={formData.professeur}
                    onChange={(e) =>
                      setFormData({ ...formData, professeur: e.target.value })
                    }
                  >
                    <option value="">Sélectionner un professeur</option>
                    <option value="1">Dr. Diallo</option>
                    <option value="2">Pr. Ndiaye</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Classe
                  </label>
                  <select
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    value={formData.classe}
                    onChange={(e) =>
                      setFormData({ ...formData, classe: e.target.value })
                    }
                  >
                    <option value="">Sélectionner une classe</option>
                    <option value="1">L2 Informatique</option>
                    <option value="2">L3 Réseaux</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section Planification */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
                Planification
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de début
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    value={formData.dateDebut}
                    onChange={(e) =>
                      setFormData({ ...formData, dateDebut: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de fin
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    value={formData.dateFin}
                    onChange={(e) =>
                      setFormData({ ...formData, dateFin: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    Heures totales
                  </label>
                  <input
                    type="number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    value={formData.heuresTotal}
                    onChange={(e) =>
                      setFormData({ ...formData, heuresTotal: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition duration-200"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                <Save className="w-5 h-5 mr-2" />
                Enregistrer
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
