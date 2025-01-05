import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ValidationPresence({
  onValidate,
  isValidated,
  totalEtudiants,
  presentCount,
}) {
  const absentCount = totalEtudiants - presentCount;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Résumé des présences</h3>
          <div className="flex space-x-4">
            <div className="text-sm">
              <span className="text-gray-500">Total: </span>
              <span className="font-medium">{totalEtudiants}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Présents: </span>
              <span className="font-medium text-green-600">{presentCount}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Absents: </span>
              <span className="font-medium text-red-600">{absentCount}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isValidated ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="mr-2" />
              <span>Validé</span>
            </div>
          ) : (
            <button
              onClick={onValidate}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Valider la feuille
            </button>
          )}
        </div>
      </div>

      {absentCount > 0 && !isValidated && (
        <div className="mt-4 p-3 bg-yellow-50 text-yellow-700 rounded-md flex items-center">
          <AlertCircle className="mr-2" />
          <span>
            Attention: {absentCount} étudiant{absentCount > 1 ? 's' : ''} marqué
            {absentCount > 1 ? 's' : ''} comme absent
            {absentCount > 1 ? 's' : ''}.
          </span>
        </div>
      )}
    </div>
  );
}
