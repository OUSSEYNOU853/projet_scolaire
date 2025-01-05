import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';

interface ProgressionAcademiqueProps {
  etudiantId: string;
}

// const ProgressionAcademique = ({ etudiantId }: ProgressionAcademiqueProps) => {
//   // Données simulées
//   const modules = [
//     {
//       nom: 'Développement Web',
//       moyenne: 16.5,
//       credits: 6,
//       status: 'validé',
//     },
//     {
//       nom: 'Base de données',
//       moyenne: 15.0,
//       credits: 4,
//       status: 'validé',
//     },
//     {
//       nom: 'Algorithmique',
//       moyenne: 14.5,
//       credits: 5,
//       status: 'validé',
//     },
//   ];

//   const moyenneGenerale = 15.33;
//   const creditsValides = 15;
//   const creditsTotaux = 30;

//   return (
//     <div className="space-y-6">
//       {/* Résumé */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <StatCard
//           title="Moyenne Générale"
//           value={`${moyenneGenerale.toFixed(2)}/20`}
//         />
//         <StatCard
//           title="Crédits Validés"
//           value={`${creditsValides}/${creditsTotaux}`}
//         />
//         <StatCard
//           title="Progression"
//           value={`${((creditsValides / creditsTotaux) * 100).toFixed(0)}%`}
//         />
//       </div>

//       {/* Liste des modules */}
//       <div className="mt-8">
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Modules</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Module
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Moyenne
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Crédits
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {modules.map((module, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {module.nom}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {module.moyenne.toFixed(2)}/20
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {module.credits}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
//                       {module.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
const ProgressionAcademique = ({ etudiantId }) => {
  const modules = [
    {
      nom: 'Développement Web',
      moyenne: 16.5,
      credits: 6,
      status: 'validé',
    },
    {
      nom: 'Base de données',
      moyenne: 15.0,
      credits: 4,
      status: 'validé',
    },
    {
      nom: 'Algorithmique',
      moyenne: 14.5,
      credits: 5,
      status: 'validé',
    },
  ];

  const moyenneGenerale = 15.33;
  const creditsValides = 15;
  const creditsTotaux = 30;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Moyenne Générale"
          value={`${moyenneGenerale.toFixed(2)}`}
          suffix="/20"
          color="blue"
        />
        <StatCard
          title="Crédits Validés"
          value={creditsValides}
          suffix={`/${creditsTotaux}`}
          color="green"
        />
        <StatCard
          title="Progression"
          value={((creditsValides / creditsTotaux) * 100).toFixed(0)}
          suffix="%"
          color="purple"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Modules</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Moyenne
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Crédits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {modules.map((module, index) => (
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
                        {module.nom}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      {module.moyenne.toFixed(2)}/20
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {module.credits}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {module.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, suffix = '', color }) => {
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
// const StatCard = ({ title, value }: { title: string; value: string }) => (
//   <div className="bg-white p-6 rounded-lg border">
//     <dt className="text-sm font-medium text-gray-500">{title}</dt>
//     <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
//   </div>
// );

export default ProgressionAcademique;
