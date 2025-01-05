import React, { useState } from 'react';
import {
  Book,
  FileText,
  Download,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

// Interface de correction
const GradingInterface = ({ submission }) => (
  <Card className="mt-4">
    <CardContent className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{submission.student}</h3>
            <p className="text-sm text-gray-500">
              Soumis le {submission.submittedDate}
            </p>
          </div>
          {submission.status === 'graded' && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {submission.grade}
            </span>
          )}
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Fichiers soumis
          </h4>
          <div className="space-y-2">
            {submission.files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>{file}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Note</h4>
          <div className="flex items-center gap-4">
            <input
              type="number"
              className="w-20 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="/ 20"
              defaultValue={submission.grade?.split('/')[0]}
            />
            <span className="text-gray-500">/ 20</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Commentaires
          </h4>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Ajouter vos commentaires..."
            defaultValue={submission.feedback}
          />
        </div>

        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Enregistrer comme brouillon
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Envoyer l'évaluation
          </button>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Composant principal
export default function AssignmentManagement() {
  const { sidebarOpen } = useLayout();
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [activeTab, setActiveTab] = useState('pending');

  // Données de test
  const assignments = {
    pending: [
      {
        id: 1,
        title: 'Projet Web Frontend',
        class: 'L3 GL',
        dueDate: '2024-01-15',
        submissions: [
          {
            id: 1,
            student: 'Oumar Sy',
            submittedDate: '2024-01-10',
            status: 'pending',
            files: ['project.zip', 'readme.md'],
          },
          {
            id: 2,
            student: 'Astou Fall Kane',
            submittedDate: '2024-01-11',
            status: 'pending',
            files: ['frontend-project.zip'],
          },
        ],
      },
      {
        id: 2,
        title: 'TP Machine Learning',
        class: 'Master 1',
        dueDate: '2024-01-20',
        submissions: [
          {
            id: 3,
            student: 'Aminata Diallo',
            submittedDate: '2024-01-18',
            status: 'pending',
            files: ['ml-project.ipynb', 'dataset.csv'],
          },
        ],
      },
    ],
    graded: [
      {
        id: 3,
        title: 'TP Base de données',
        class: 'L2 GL',
        dueDate: '2024-01-05',
        submissions: [
          {
            id: 4,
            student: 'Fatoumata Dia',
            submittedDate: '2024-01-04',
            status: 'graded',
            grade: '16/20',
            feedback: 'Excellent travail sur la normalisation',
            files: ['database-tp.pdf'],
          },
        ],
      },
    ],
  };

  // Fonction pour afficher le nombre de soumissions
  const getSubmissionCount = (submissions) => {
    if (submissions.length === 0) return 'Aucune soumission';
    return submissions.length === 1
      ? '1 soumission'
      : `${submissions.length} soumissions`;
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
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-2">Devoirs et Projets</h1>
            <p className="text-blue-100">
              Gérez les soumissions et les évaluations
            </p>
          </div>

          {/* Onglets */}
          <div className="flex space-x-4 border-b mb-6">
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'pending'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('pending')}
            >
              À évaluer
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'graded'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('graded')}
            >
              Évalués
            </button>
          </div>

          {/* Contenu principal */}
          <div className="grid md:grid-cols-3 gap-8 pb-8">
            {/* Liste des devoirs */}
            <div className="md:col-span-1 space-y-4">
              {assignments[activeTab].map((assignment) => (
                <Card
                  key={assignment.id}
                  className={`cursor-pointer hover:shadow-lg transition-all duration-200 ${
                    selectedAssignment?.id === assignment.id
                      ? 'ring-2 ring-blue-500'
                      : ''
                  }`}
                  onClick={() => setSelectedAssignment(assignment)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Book className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-500">
                        {assignment.class}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {assignment.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>À rendre pour le {assignment.dueDate}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {getSubmissionCount(assignment.submissions)}
                      </span>
                      {activeTab === 'pending' && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          À évaluer
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Zone de détail */}
            <div className="md:col-span-2">
              {selectedAssignment ? (
                <div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-semibold">
                            {selectedAssignment.title}
                          </h2>
                          <p className="text-gray-500">
                            {selectedAssignment.class}
                          </p>
                        </div>
                        <span className="text-gray-500">
                          Date limite : {selectedAssignment.dueDate}
                        </span>
                      </div>

                      {selectedAssignment.submissions.map((submission) => (
                        <GradingInterface
                          key={submission.id}
                          submission={submission}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-500 bg-white rounded-lg border-2 border-dashed">
                  <p>Sélectionnez un devoir pour voir les détails</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
