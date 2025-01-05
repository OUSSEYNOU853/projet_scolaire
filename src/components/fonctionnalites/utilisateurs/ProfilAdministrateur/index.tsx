import React from 'react';
import TableauBordAdmin from './TableauBordAdmin';

export default function ProfilAdministrateur() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Profil Administrateur
        </h1>
        <p className="text-gray-600">
          Gérez votre profil et consultez vos statistiques
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Section Informations Personnelles */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-4xl text-gray-500">RP</span>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold">Moussa Diallo</h2>
                <p className="text-gray-500">Responsable Pédagogique</p>
              </div>
              <div className="w-full pt-4 border-t">
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Email:</span>{' '}
                    moussa.diallo@sa.sn
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Téléphone:</span> +221 77 123
                    45 67
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Département:</span>{' '}
                    Informatique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Tableau de Bord */}
        <div className="lg:col-span-2">
          <TableauBordAdmin />
        </div>
      </div>
    </div>
  );
}
