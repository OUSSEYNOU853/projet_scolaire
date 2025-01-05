import { motion } from 'framer-motion';
import { UserCircle, BookOpen, Download } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface InfosPersonnellesProps {
  etudiant: {
    nom: string;
    prenom: string;
    dateNaissance: string;
    email: string;
    telephone: string;
    classe: string;
  };
}

const InfosPersonnelles = ({ etudiant }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard
          icon={<UserCircle className="w-6 h-6 text-blue-500" />}
          title="Informations Personnelles"
          fields={[
            { label: 'Nom', value: etudiant.nom },
            { label: 'Prénom', value: etudiant.prenom },
            {
              label: 'Date de Naissance',
              value: new Date(etudiant.dateNaissance).toLocaleDateString(
                'fr-FR',
              ),
            },
          ]}
        />
        <InfoCard
          icon={<BookOpen className="w-6 h-6 text-blue-500" />}
          title="Contact"
          fields={[
            { label: 'Email', value: etudiant.email },
            { label: 'Téléphone', value: etudiant.telephone },
            { label: 'Classe', value: etudiant.classe },
          ]}
        />
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, fields }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-blue-200 transition-colors"
  >
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={index}>
          <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
          <dd className="mt-1 text-sm text-gray-900 font-medium">
            {field.value}
          </dd>
        </div>
      ))}
    </div>
  </motion.div>
);

export default InfosPersonnelles;
