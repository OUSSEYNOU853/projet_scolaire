import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import {
  FileText,
  Download,
  ChevronRight,
  Eye,
  BarChart2,
  PieChart,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLayout } from '../../../../contexts/LayoutContext';

const StudentGradesView = () => {
  const { sidebarOpen } = useLayout();
  const [selectedSemester, setSelectedSemester] = useState('S1');
  const [grades] = useState({
    S1: [
      {
        module: 'Développement Web',
        note: 15,
        coefficient: 3,
        credits: 6,
        status: 'validé',
      },
      {
        module: 'Base de données',
        note: 17,
        coefficient: 4,
        credits: 6,
        status: 'validé',
      },
      {
        module: 'Algorithmes',
        note: 14,
        coefficient: 3,
        credits: 6,
        status: 'validé',
      },
    ],
    S2: [
      {
        module: 'Intelligence Artificielle',
        note: 16,
        coefficient: 4,
        credits: 6,
        status: 'en_cours',
      },
      {
        module: 'Réseaux',
        note: 13,
        coefficient: 3,
        credits: 6,
        status: 'en_cours',
      },
    ],
  });

  const transcripts = [
    { id: 1, semester: 'S1', year: '2023-2024', status: 'disponible' },
    { id: 2, semester: 'S2', year: '2023-2024', status: 'en_cours' },
  ];

  const getAverageGrade = (grades) => {
    const total = grades.reduce(
      (acc, curr) => acc + curr.note * curr.coefficient,
      0,
    );
    const coeffSum = grades.reduce((acc, curr) => acc + curr.coefficient, 0);
    return (total / coeffSum).toFixed(2);
  };

  const totalCredits = 30;
  const validatedCredits = grades[selectedSemester].reduce(
    (acc, curr) => (curr.status === 'validé' ? acc + curr.credits : acc),
    0,
  );

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
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
            <h1 className="text-3xl font-bold">Mes Notes</h1>
            <p className="mt-2 text-blue-100">
              Suivi de vos performances académiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Moyenne Générale"
              value={getAverageGrade(grades[selectedSemester])}
              suffix="/20"
              color="blue"
              icon={<PieChart className="h-5 w-5" />}
            />
            <StatCard
              title="Crédits Validés"
              value={validatedCredits}
              suffix={`/${totalCredits}`}
              color="green"
              icon={<BarChart2 className="h-5 w-5" />}
            />
            <StatCard
              title="Progression"
              value={((validatedCredits / totalCredits) * 100).toFixed(0)}
              suffix="%"
              color="purple"
              icon={<FileText className="h-5 w-5" />}
            />
          </div>

          <Card className="mb-6">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Notes du Semestre</CardTitle>
                <select
                  className="px-4 py-2 mb-2 border rounded-lg"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  <option value="S1">Semestre 1</option>
                  <option value="S2">Semestre 2</option>
                </select>
              </div>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Module
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Note
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coefficient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Crédits
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {grades[selectedSemester].map((grade, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm font-medium text-gray-900">
                            {grade.module}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                            grade.note >= 15
                              ? 'bg-green-100 text-green-800'
                              : grade.note >= 10
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {grade.note}/20
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          ×{grade.coefficient}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {grade.credits} ECTS
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            grade.status === 'validé'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {grade.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-xl">Relevés de Notes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transcripts.map((transcript) => (
                  <motion.div
                    key={transcript.id}
                    whileHover={{ y: -2 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Relevé {transcript.semester}
                        </p>
                        <p className="text-sm text-gray-500">
                          {transcript.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

const StatCard = ({ title, value, suffix = '', color, icon }) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        <dt className="text-sm font-medium text-gray-500">{title}</dt>
        <dd className="mt-2 flex items-baseline justify-between">
          <div className="flex items-baseline text-2xl font-semibold">
            {value}
            <span className="text-lg font-medium text-gray-500">{suffix}</span>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${colors[color]} text-white`}
          >
            {title === 'Progression' ? 'En cours' : 'Actuel'}
          </div>
        </dd>
      </div>
      <div className={`h-1 bg-gradient-to-r ${colors[color]}`} />
    </motion.div>
  );
};

export default StudentGradesView;
