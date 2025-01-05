import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function LeaveRequest() {
  const { sidebarOpen } = useLayout();
  const [formData, setFormData] = useState({
    type: '',
    dateDebut: '',
    dateFin: '',
    motif: '',
    description: '',
  });

  const leaveRequests = [
    {
      id: 1,
      type: 'Congé maladie',
      dateDebut: '2024-01-15',
      dateFin: '2024-01-17',
      status: 'en_attente',
      affectedClasses: ['L2 RI', 'L3 GL'],
    },
    {
      id: 2,
      type: 'Annulation cours',
      dateDebut: '2024-01-20',
      dateFin: '2024-01-20',
      status: 'approuvé',
      affectedClasses: ['L2 RI'],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-2">Demandes d'Absence</h1>
            <p className="text-blue-100">
              Gérez vos demandes de congés et d'annulation de cours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Nouvelle Demande</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de demande
                    </label>
                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      required
                    >
                      <option value="">Sélectionner un type</option>
                      <option value="congé">Congé</option>
                      <option value="maladie">Congé maladie</option>
                      <option value="annulation">Annulation de cours</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date de début
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date de fin
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          value={formData.dateFin}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dateFin: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motif
                    </label>
                    <textarea
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      value={formData.motif}
                      onChange={(e) =>
                        setFormData({ ...formData, motif: e.target.value })
                      }
                      required
                      placeholder="Décrivez le motif de votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                  >
                    Soumettre la demande
                  </button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Historique des demandes
                </h2>
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-medium">{request.type}</span>
                          <div className="text-sm text-gray-500 mt-1">
                            Du {request.dateDebut} au {request.dateFin}
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            request.status === 'approuvé'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {request.status === 'approuvé'
                            ? 'Approuvé'
                            : 'En attente'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Classes affectées : {request.affectedClasses.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
