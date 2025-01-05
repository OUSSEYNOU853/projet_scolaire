// src/composants/fonctionnalites/notes/Bulletin/index.tsx
import React from 'react';
import { GenerationBulletin } from './GenerationBulletin';
import { ExportBulletin } from './ExportBulletin';

const Bulletin = () => {
  const [bulletinData, setBulletinData] = React.useState(null);

  const handleBulletinGenerated = (data) => {
    setBulletinData(data);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Bulletin de Notes
          </h2>
          <p className="text-sm text-gray-500">
            Générer et exporter les bulletins de notes des étudiants
          </p>
        </div>

        <div className="p-4">
          <GenerationBulletin onBulletinGenerated={handleBulletinGenerated} />
          {bulletinData && <ExportBulletin bulletinData={bulletinData} />}
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
