import React, { useState } from 'react';
import { User, Mail, Phone, Book, Calendar, Edit2, Camera } from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function StudentProfile() {
  const { sidebarOpen } = useLayout();
  const [studentData] = useState({
    name: 'Ousseynou Diedhiou',
    id: 'ETU2024001',
    email: 'ousseynou.diedhiou@etudiant.edu.sa.sn',
    phone: '+221 78 561 91 15',
    class: 'L2 GL',
    birthdate: '15/03/2003',
    address: 'Keur Massar',
    specialization: 'Développement Web',
    stats: {
      attendance: 95,
      absences: 12,
      justified: 10,
      currentAverage: 15.5,
    },
  });

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Mon Profil</h1>
                <p className="text-blue-100">
                  Gérez vos informations personnelles
                </p>
              </div>
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition">
                <Edit2 size={20} />
                Modifier le profil
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={64} className="text-blue-600" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                    <Camera size={16} />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {studentData.name}
                </h2>
                <p className="text-blue-600 font-medium">{studentData.id}</p>
                <p className="text-gray-500 mt-2">{studentData.class}</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span>{studentData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} />
                    <span>{studentData.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Informations académiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Spécialisation</p>
                      <p className="font-medium">
                        {studentData.specialization}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date de naissance</p>
                      <p className="font-medium">{studentData.birthdate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Adresse</p>
                      <p className="font-medium">{studentData.address}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-green-800">
                        Taux de présence
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {studentData.stats.attendance}%
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">
                        Moyenne actuelle
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {studentData.stats.currentAverage}/20
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
