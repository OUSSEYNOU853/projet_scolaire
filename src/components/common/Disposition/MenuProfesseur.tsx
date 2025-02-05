import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  Home,
  Calendar,
  BookOpen,
  Users,
  ClipboardCheck,
  FileText,
  Bell,
  User,
  Settings,
  LogOut,
  Mail,
  XCircle,
} from 'lucide-react';
import { useLayout } from '../../../contexts/LayoutContext';
import DropdownMenu from '../../ui/DropdownMenu';
import logo from '../../../assets/images/logos/ISI_3.jpeg';

const MenuLateralProfesseur = () => {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = React.useState('/');

  const menuItems = [
    {
      icon: <Home className="w-6 h-6" />,
      label: 'Accueil',
      path: '/professeur-login',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: 'Emploi du temps',
      path: '/professeur/emploi-du-temps',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: 'Mes cours',
      path: '/professeur/cours',
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Mes classes',
      path: '/professeur/classes',
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      label: 'Gestion des notes',
      path: '/professeur/notes',
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      label: 'Demandes',
      path: '/professeur/annulations',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: 'Documents',
      path: '/professeur/documents',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Messages',
      path: '/professeur/messages',
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      label: 'Corrections',
      path: '/professeur/corrections',
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    navigate('/login');
  };

  const userMenuItems = [
    {
      icon: <User className="w-4 h-4" />,
      label: 'Mon profil',
      onClick: () => navigate('/professeur/profil'),
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: 'Paramètres',
      onClick: () => navigate('/professeur/parametres'),
    },
    {
      icon: <LogOut className="w-4 h-4" />,
      label: 'Déconnexion',
      onClick: handleLogout,
      className: 'text-red-600 border-t',
    },
  ];

  const handleNavigation = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <>
      <div
        className={`${sidebarOpen ? 'w-64' : 'w-20'} fixed left-0 top-0 h-screen z-50 bg-gradient-to-b from-blue-50 to-white border-r border-gray-200 transition-all duration-300 ease-in-out`}
      >
        <div className="px-6 py-5 flex justify-between items-center border-b border-gray-200 bg-white">
          <div
            className={`flex items-center space-x-2 ${!sidebarOpen ? 'scale-0 w-0' : 'scale-100'} transition-transform duration-300`}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">IS</span>
              {/* <img
                src={logo}
                alt="Logo Sonatel Academy"
                className="w-1 h-16 mx-auto"
              /> */}
            </div>
            <h1 className="text-lg font-bold text-gray-900">
              Espace Professeur
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center px-4 py-3 my-1 rounded-lg cursor-pointer transition-all duration-200
                ${activeItem === item.path ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}
                ${!sidebarOpen && 'justify-center'}`}
            >
              {React.cloneElement(item.icon, {
                className: `${activeItem === item.path ? 'text-white' : 'text-gray-600'} flex-shrink-0`,
              })}
              {sidebarOpen && (
                <span className="ml-3 font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Bouton de déconnexion */}
        <div className="absolute bottom-4 w-full px-4">
          <div
            className={`
                      flex items-center px-4 py-3 mx-4
                      rounded-lg cursor-pointer
                      text-red-600 hover:bg-red-50
                      transition-all duration-200
                      ${!sidebarOpen && 'justify-center'}
                    `}
            onClick={handleLogout}
          >
            <LogOut className="w-6 h-6 flex-shrink-0" />
            {sidebarOpen && (
              <span className="ml-3 font-medium whitespace-nowrap">
                Déconnexion
              </span>
            )}
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-40">
        <div
          className={`px-6 py-4 flex justify-end items-center ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}
        >
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center border-2 border-white">
                  5
                </span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  Birane Baila Wane
                </p>
                <p className="text-md text-gray-500">Professeur</p>
              </div>
              <DropdownMenu
                trigger={
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                  </button>
                }
                items={userMenuItems}
                title="Mon Compte"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuLateralProfesseur;
