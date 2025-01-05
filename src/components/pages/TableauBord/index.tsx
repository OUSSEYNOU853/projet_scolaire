import React from 'react';
import {
  Users,
  BookOpen,
  Clock,
  AlertCircle,
  ChevronUp,
  ChevronDown,
  Search,
  Download,
} from 'lucide-react';
import { useLayout } from '../../../contexts/LayoutContext';
import CoursWidget from './Widgets/CoursWidget';
import AbsencesWidget from './Widgets/AbsencesWidget';
import PerformanceWidget from './Widgets/PerformanceWidget';

export default function TableauBord() {
  const { sidebarOpen } = useLayout();

  return (
    <div className="space-y-6 p-6">
      {/* En-tête avec gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tableau de Bord</h1>
            <p className="text-indigo-100">Vue d'ensemble de l'établissement</p>
          </div>
          <div className="flex space-x-4">
            <select className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 transition duration-200 shadow-md">
              <option>Semestre 1 - 2024/2025</option>
              <option>Semestre 2 - 2024/2025</option>
            </select>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 transition duration-200 shadow-md">
              <Download size={20} />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {/* Widgets statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-lg bg-blue-100">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="flex items-center text-sm text-green-600">
              +12%
              <ChevronUp className="ml-1 w-4 h-4" />
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold">256</h3>
          <p className="text-gray-600 text-sm">Étudiants</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-lg bg-green-100">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <span className="flex items-center text-sm text-green-600">
              +5%
              <ChevronUp className="ml-1 w-4 h-4" />
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold">32</h3>
          <p className="text-gray-600 text-sm">Cours</p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-lg bg-yellow-100">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="flex items-center text-sm text-red-600">
              -3%
              <ChevronDown className="ml-1 w-4 h-4" />
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold">128</h3>
          <p className="text-gray-600 text-sm">Heures</p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-lg bg-red-100">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <span className="flex items-center text-sm text-green-600">
              +2%
              <ChevronUp className="ml-1 w-4 h-4" />
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold">15</h3>
          <p className="text-gray-600 text-sm">Absences</p>
        </div>
      </div>
      {/* Zone de recherche et filtres */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un étudiant, un cours, un professeur, un module..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border rounded-lg bg-white">
              <option>Tous les niveaux</option>
              <option>Licence 1</option>
              <option>Licence 2</option>
              <option>Licence 3</option>
            </select>
            <select className="px-4 py-2 border rounded-lg bg-white">
              <option>Toutes les filières</option>
              <option>Informatique</option>
              <option>Gestion</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>
      </div>

      {/* Widgets détaillés */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <CoursWidget />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <AbsencesWidget />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <PerformanceWidget />
        </div>
      </div>
    </div>
  );
}
