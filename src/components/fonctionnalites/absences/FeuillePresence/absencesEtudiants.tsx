import React, { useState } from 'react';
import { Calendar, Filter, Download, Eye } from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function StudentAbsenceView() {
  const { sidebarOpen } = useLayout();

  const navigate = useNavigate();

  const [periodFilter, setPeriodFilter] = useState('week');

  const studentInfo = {
    name: 'Ibrahima Diallo',
    class: 'L2 GL',
    studentId: 'ETU2024001',
    totalAbsences: 16,
    unjustifiedAbsences: 6,
  };

  const absences = [
    {
      id: 1,
      date: '2024-12-30',
      course: 'TypeScript',
      professor: 'Coach ALy',
      status: 'non justifiée',
      hours: 2,
    },
    {
      id: 2,
      date: '2024-12-29',
      course: 'Laravel',
      professor: 'Coach Wane',
      status: 'justifiée',
      hours: 4,
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
                <h1 className="text-3xl font-bold mb-2">{studentInfo.name}</h1>
                <p className="text-indigo-100">
                  {studentInfo.class} - {studentInfo.studentId}
                </p>
              </div>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 transition duration-200 shadow-md">
                <Download size={20} />
                Exporter mes absences
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total absences
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {studentInfo.totalAbsences}h
                    </p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Non justifiées
                    </p>
                    <p className="text-3xl font-bold text-red-600 mt-2">
                      {studentInfo.unjustifiedAbsences}h
                    </p>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <select
              className="p-3 bg-gray-50 rounded-lg border focus:border-purple-500"
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
            >
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
              <option value="semester">Ce semestre</option>
            </select>
          </div>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Cours
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Heures
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Statut
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {absences.map((absence) => (
                    <tr key={absence.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-500">
                        {absence.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-900">{absence.course}</div>
                        <div className="text-gray-500 text-sm">
                          {absence.professor}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {absence.hours}h
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            absence.status === 'justifiée'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {absence.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => navigate('/etudiant/justifications')}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Soumettre justificatif
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
