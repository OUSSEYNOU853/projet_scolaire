import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Book,
  Calendar,
  Edit2,
  Camera,
  Briefcase,
  GraduationCap,
  Clock,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function TeacherProfile() {
  const { sidebarOpen } = useLayout();
  const [teacherData] = useState({
    name: 'Dr. Birane Baila Wane',
    id: 'PROF2024001',
    email: 'birane.baila.wane@prof.edu.sa.sn',
    phone: '+221 77 123 45 67',
    department: 'Informatique',
    position: 'Professeur Principal',
    specialization: 'Génie Logiciel',
    office: 'Bureau 304',
    experience: '17 ans',
    education: 'Doctorat en Informatique',
    stats: {
      coursesCount: 8,
      totalStudents: 145,
      teachingHours: 18,
      satisfactionRate: 92,
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
                  Gérez vos informations professionnelles
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
                  {teacherData.name}
                </h2>
                <p className="text-blue-600 font-medium">{teacherData.id}</p>
                <p className="text-gray-500 mt-2">{teacherData.position}</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span>{teacherData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} />
                    <span>{teacherData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase size={16} />
                    <span>{teacherData.office}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Informations professionnelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Département</p>
                      <p className="font-medium">{teacherData.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Spécialisation</p>
                      <p className="font-medium">
                        {teacherData.specialization}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Formation</p>
                      <p className="font-medium">{teacherData.education}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expérience</p>
                      <p className="font-medium">{teacherData.experience}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-blue-800">
                            Cours enseignés
                          </p>
                          <p className="text-2xl font-bold text-blue-600">
                            {teacherData.stats.coursesCount}
                          </p>
                        </div>
                        <Book className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-green-800">
                            Étudiants
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            {teacherData.stats.totalStudents}
                          </p>
                        </div>
                        <GraduationCap className="text-green-600" size={24} />
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-purple-800">
                            Heures/semaine
                          </p>
                          <p className="text-2xl font-bold text-purple-600">
                            {teacherData.stats.teachingHours}h
                          </p>
                        </div>
                        <Clock className="text-purple-600" size={24} />
                      </div>
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
