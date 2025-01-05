import React, { useState } from 'react';
import {
  Calendar,
  Upload,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import TelechargementJustificatif from './TelechargementJustificatif';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function FormulaireJustification() {
  const { sidebarOpen } = useLayout();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dateDebut: '',
    dateFin: '',
    motif: '',
    description: '',
  });
  const [fichier, setFichier] = useState(null);
  const [statut, setStatut] = useState('en_attente'); // en_attente, accepte, refuse

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', { ...formData, fichier });
  };

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full">
        <div className="p-8">
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
                <h1 className="text-3xl font-bold">Justification d'absence</h1>
                <p className="text-blue-100 mt-1">
                  Soumettez votre justificatif d'absence
                </p>
              </div>
            </div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de début
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.dateDebut}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dateDebut: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de fin
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.dateFin}
                        onChange={(e) =>
                          setFormData({ ...formData, dateFin: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Motif de l'absence
                  </label>
                  <select
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.motif}
                    onChange={(e) =>
                      setFormData({ ...formData, motif: e.target.value })
                    }
                    required
                  >
                    <option value="">Sélectionnez un motif</option>
                    <option value="medical">Raison médicale</option>
                    <option value="familial">Raison familiale</option>
                    <option value="professionnel">
                      Raison professionnelle
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Décrivez la raison de votre absence..."
                    required
                  />
                </div>

                <TelechargementJustificatif
                  onFileSelect={setFichier}
                  fichierActuel={fichier}
                />

                {statut !== 'en_attente' && (
                  <div
                    className={`p-4 rounded-lg ${
                      statut === 'accepte' ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    {statut === 'accepte' ? (
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Justification acceptée
                      </div>
                    ) : (
                      <div className="flex items-center text-red-700">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        Justification refusée
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Soumettre la justification
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
