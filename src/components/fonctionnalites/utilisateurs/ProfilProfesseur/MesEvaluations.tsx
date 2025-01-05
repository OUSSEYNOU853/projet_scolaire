import React, { useState } from 'react';
import {
  Book,
  Filter,
  Download,
  Upload,
  Users,
  PlusCircle,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function GradeManagement() {
  const { sidebarOpen } = useLayout();

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedType, setSelectedType] = useState('devoir');
  const [showAddModal, setShowAddModal] = useState(false);

  const classes = [
    { id: 1, name: 'L2 RI', course: 'Algorithmes' },
    { id: 2, name: 'L3 GL', course: 'Base de données' },
  ];

  const grades = [
    {
      id: 1,
      student: 'Sidy Diop Baldé',
      type: 'Devoir',
      title: 'TP1 - Algorithmes',
      grade: 15,
      maxGrade: 20,
      date: '2024-01-15',
      comments: 'Bon travail',
    },
    {
      id: 2,
      student: 'Hadiyatou Ba',
      type: 'Examen',
      title: 'Examen Final',
      grade: 17,
      maxGrade: 20,
      date: '2024-01-20',
      comments: 'Excellent',
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Gestion des Notes</h1>
                <p className="text-blue-100">
                  Gérez les notes et évaluations de vos étudiants
                </p>
              </div>
              <div className="flex gap-4">
                <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50">
                  <Upload className="h-5 w-5" />
                  Importer CSV
                </button>
                <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50">
                  <Download className="h-5 w-5" />
                  Exporter
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">Sélectionner une classe</option>
                  {classes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} - {c.course}
                    </option>
                  ))}
                </select>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="devoir">Devoirs</option>
                  <option value="examen">Examens</option>
                  <option value="tp">Travaux Pratiques</option>
                </select>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
                >
                  <PlusCircle className="h-5 w-5" />
                  Nouvelle Évaluation
                </button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Étudiant
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Titre
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Note
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Commentaires
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {grades.map((grade) => (
                    <tr key={grade.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{grade.student}</td>
                      <td className="px-6 py-4">{grade.type}</td>
                      <td className="px-6 py-4">{grade.title}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold">{grade.grade}</span>
                        <span className="text-gray-500">/{grade.maxGrade}</span>
                      </td>
                      <td className="px-6 py-4">{grade.date}</td>
                      <td className="px-6 py-4">{grade.comments}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          Modifier
                        </button>
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
