// import React from 'react';
// import { motion } from 'framer-motion';

// type StatCardProfProps = {
//   title: string;
//   value: string | number;
//   color: 'blue' | 'green' | 'purple' | 'orange';
//   icon: React.ReactNode;
//   subtitle?: string;
// };

// const StatCardProf = ({
//   title,
//   value,
//   subtitle,
//   color,
//   icon,
// }: StatCardProfProps) => {
//   const colors = {
//     blue: 'from-blue-500 to-blue-600',
//     green: 'from-green-500 to-green-600',
//     purple: 'from-purple-500 to-purple-600',
//     orange: 'from-orange-500 to-orange-600',
//   };

//   const getBgColor = (colorKey: keyof typeof colors) => {
//     const bgColors = {
//       blue: 'hover:bg-blue-50',
//       green: 'hover:bg-green-50',
//       purple: 'hover:bg-purple-50',
//       orange: 'hover:bg-orange-50',
//     };
//     return bgColors[colorKey];
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -2 }}
//       className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${getBgColor(color)} transition-colors`}
//     >
//       <div className="p-6">
//         <div className="flex items-center justify-between">
//           <dt className="text-sm font-medium text-gray-500 truncate">
//             {title}
//           </dt>
//           <div className={`bg-gradient-to-r ${colors[color]} p-2 rounded-lg`}>
//             {React.cloneElement(icon as React.ReactElement, {
//               className: 'h-5 w-5 text-white',
//             })}
//           </div>
//         </div>
//         <dd className="mt-3">
//           <div className="text-2xl font-semibold">{value}</div>
//           {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
//         </dd>
//       </div>
//       <div className={`h-1 bg-gradient-to-r ${colors[color]}`} />
//     </motion.div>
//   );
// };

// export default StatCardProf;

import React from 'react';
import { motion } from 'framer-motion';

type StatCardProps = {
  title: string;
  value: string | number;
  color: 'blue' | 'green' | 'purple';
  icon: React.ReactNode;
};

const StatCard = ({ title, value, color, icon }: StatCardProps) => {
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
        <dt className="text-sm font-medium text-gray-500 flex items-center gap-2">
          {icon}
          {title}
        </dt>
        <dd className="mt-2 flex items-baseline justify-between">
          <div className="flex items-baseline text-2xl font-semibold">
            {value}
          </div>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${colors[color]} text-white`}
          >
            En direct
          </div>
        </dd>
      </div>
      <div className={`h-1 bg-gradient-to-r ${colors[color]}`} />
    </motion.div>
  );
};

export default StatCard;
