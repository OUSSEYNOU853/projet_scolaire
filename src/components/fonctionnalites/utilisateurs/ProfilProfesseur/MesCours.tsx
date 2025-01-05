import React from 'react';
import {
  Clock,
  Users,
  Calendar,
  BookOpen,
  MapPin,
  ChevronRight,
  Plus,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function ProfessorCourses() {
  const { sidebarOpen } = useLayout();

  // Récupération des données depuis un API ou une base de données
  const courses = [
    {
      id: 1,
      name: 'Mathématiques Avancées',
      classe: 'L2 Réseaux',
      schedule: 'Lundi 8h-10h',
      room: 'Salle A101',
      nbStudents: 35,
      nextSession: '2024-01-08',
      progress: 65,
      topics: ['Algèbre linéaire', 'Calcul différentiel', 'Probabilités'],
    },
    {
      id: 2,
      name: 'Intelligence Artificielle',
      classe: 'L3 GL',
      schedule: 'Mardi 14h-16h',
      room: 'Salle B203',
      nbStudents: 28,
      nextSession: '2024-01-09',
      progress: 45,
      topics: ['Machine Learning', 'Deep Learning', 'NLP'],
    },
  ];

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
          {/* En-tête avec gradient - même style que Planification */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Mes Cours</h1>
                <p className="text-indigo-100">Gestion et suivi des cours</p>
              </div>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 transition duration-200 shadow-md">
                <Plus className="w-5 h-5" />
                Nouveau Cours
              </button>
            </div>
          </div>

          {/* Statistiques rapides - même structure que Planification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Cours
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="text-green-500">↑ 2</span> ce semestre
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Étudiants
                    </p>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">
                      63
                    </p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="text-indigo-500">+15</span> nouveaux ce mois
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Heures Enseignées
                    </p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">
                      120h
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="text-blue-500">55%</span> du total
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Liste des cours */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Cours
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Classe
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Horaire
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Progression
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {courses.map((course) => (
                    <tr
                      key={course.id}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {course.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {course.room}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {course.classe}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {course.schedule}
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 mt-1">
                          {course.progress}%
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <button className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150">
                            Détails
                          </button>
                          <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-150">
                            Notes
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
