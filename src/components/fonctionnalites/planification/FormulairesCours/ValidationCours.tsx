import React, { useState } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

interface CourseValidation {
  id: string;
  module: string;
  professeur: string;
  date: string;
  heures: string;
  status: 'pending' | 'validated' | 'rejected';
}

export default function ValidationCours() {
  const [courses, setCourses] = useState<CourseValidation[]>([
    {
      id: '1',
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      date: '2024-01-15',
      heures: '08:30 - 10:30',
      status: 'pending',
    },
    // Ajouter d'autres cours...
  ]);

  const handleValidation = (
    courseId: string,
    status: 'validated' | 'rejected',
  ) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, status } : course,
      ),
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Validation des Sessions de Cours
      </h2>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{course.module}</h3>
              <p className="text-sm text-gray-600">{course.professeur}</p>
              <p className="text-sm text-gray-500">
                {course.date} • {course.heures}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              {course.status === 'pending' ? (
                <>
                  <button
                    onClick={() => handleValidation(course.id, 'validated')}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                    title="Valider"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleValidation(course.id, 'rejected')}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    title="Rejeter"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <StatusBadge status={course.status} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const StatusBadge = ({ status }: { status: 'validated' | 'rejected' }) => {
  const styles = {
    validated: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const labels = {
    validated: 'Validé',
    rejected: 'Rejeté',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
};
