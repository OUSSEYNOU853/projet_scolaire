// src/components/parametres/Parametres.tsx
import React, { useState } from 'react';
import {
  School,
  Users,
  BookOpen,
  Calendar,
  Building2,
  Settings,
  ArrowLeft,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TabButton } from './navigation/TabButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../ui/card';
import AnneScolaireForm from './forms/AnneScolaireForm';
import ClassesForm from './forms/ClassesForm';
import ProfesseursForm from './forms/ProfesseursForm';
import ModulesForm from './forms/ModulesForm';
import SallesForm from './forms/SallesForm';

const tabs = [
  { id: 'annee', label: 'Année Scolaire', icon: Calendar },
  { id: 'classes', label: 'Classes', icon: School },
  { id: 'professeurs', label: 'Professeurs', icon: Users },
  { id: 'modules', label: 'Modules', icon: BookOpen },
  { id: 'salles', label: 'Salles', icon: Building2 },
] as const;

type TabId = (typeof tabs)[number]['id'];

const Parametres = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('annee');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        {/* En-tête avec fond dégradé */}
        <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-white/20 mr-4 hover:bg-white/30 transition p-2 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              {/* <Settings className="w-6 h-6 text-white" /> */}
              <h1 className="text-3xl font-bold">Paramètres</h1>
              <p className="mt-2 text-blue-100">
                Gestion des ressources pédagogiques
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Card className="overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
                label={tab.label}
              />
            ))}
          </div>
        </Card>

        {/* Contenu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'annee' && <AnneScolaireForm />}
            {activeTab === 'classes' && <ClassesForm />}
            {activeTab === 'professeurs' && <ProfesseursForm />}
            {activeTab === 'modules' && <ModulesForm />}
            {activeTab === 'salles' && <SallesForm />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Parametres;
