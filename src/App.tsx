import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { LayoutProvider, useLayout } from './contexts/LayoutContext';

// Layouts & Common Components
import MenuLateral from './components/common/Disposition/MenuLateral';
import MenuEtudiant from './components/common/Disposition/MenuEtudiant';
import MenuProfesseur from './components/common/Disposition/MenuProfesseur';
import PiedDePage from './components/common/Disposition/PiedDePage';

// Pages
import LoginPage from './components/pages/Auth/LoginPage';
import TableauBord from './components/pages/TableauBord';
import AbsencesWidget from './components/pages/TableauBord/Widgets/AbsencesWidget';
import CoursWidget from './components/pages/TableauBord/Widgets/CoursWidget';
import PerformanceWidget from './components/pages/TableauBord/Widgets/PerformanceWidget';
import Planification from './components/pages/Planification';
import GestionPresences from './components/pages/Presences';
import GestionNotes from './components/pages/Notes';
import Administration from './components/pages/Utilisateurs/Administration';
import Parametres from './components/pages/settings/Parametres';
import ProfilePage from './components/pages/Profile';
import ProchainsCoursPage from './components/pages/Planification/ProchainsCoursPage';
import StatistiquesAbsences from './components/fonctionnalites/absences/StatistiquesAbsences';
import AdminMessaging from './components/pages/messages/MessagesAdmins';
import GestionCours from './components/pages/Planification/GestionCours';
import AjouterUtilisateur from './components/pages/Utilisateurs/Administration';
import GestionUtilisateurs from './components/fonctionnalites/utilisateurs/GestionUtilisateurs';
import ProfilAdministrateur from './components/fonctionnalites/utilisateurs/ProfilAdministrateur';

// Composants étudiants
import StudentProfile from './components/fonctionnalites/utilisateurs/ProfilEtudiant';
import StudentAbsenceView from './components/fonctionnalites/absences/FeuillePresence/absencesEtudiants';
import StudentGradesView from './components/fonctionnalites/notes/VueNotesEtudiants';
import MessageView from './components/pages/messages/MessagesEtudiants';
import AssignmentSubmission from './components/fonctionnalites/utilisateurs/ProfilEtudiant/SoumissionTraveaux';
import DocumentsAdministratifsEtudiants from './components/fonctionnalites/utilisateurs/ProfilEtudiant/MesDocuments';
import FormulaireJustification from './components/fonctionnalites/absences/FormulaireJustification';
import CalendrierEtudiant from './components/fonctionnalites/planification/Calendrier/CalendrierEtudiant';
import DocumentsAdministratifs from './components/fonctionnalites/utilisateurs/ProfilEtudiant/DocumentsAdministratifs';

// Composants professeurs
import ProfilProfesseur from './components/fonctionnalites/utilisateurs/ProfilProfesseur';
import LeaveRequest from './components/fonctionnalites/utilisateurs/ProfilProfesseur/MesDemandes';
import GradeManagement from './components/fonctionnalites/utilisateurs/ProfilProfesseur/MesEvaluations';
import ProfessorClasses from './components/fonctionnalites/utilisateurs/ProfilProfesseur/MesClasses';
import ProfessorCourses from './components/fonctionnalites/utilisateurs/ProfilProfesseur/MesCours';
import AssignmentManagement from './components/fonctionnalites/utilisateurs/ProfilProfesseur/Corrections';
import DocumentsAdministratifsProfs from './components/fonctionnalites/utilisateurs/ProfilProfesseur/MesDocuments';
import ProfessorMessaging from './components/pages/messages/MessagesProfesseurs';
import CalendrierProfesseur from './components/fonctionnalites/planification/Calendrier/CalendrierProfesseur';

// Layout components
const MainLayout = () => {
  const { sidebarOpen } = useLayout();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenuLateral />
      <div className="flex-1 pt-16">
        <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all`}>
          <Outlet />
        </div>
      </div>
      <PiedDePage />
    </div>
  );
};

const StudentLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenuEtudiant />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4">
          <Outlet />
        </div>
      </div>
      <PiedDePage />
    </div>
  );
};

const TeacherLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenuProfesseur />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4">
          <Outlet />
        </div>
      </div>
      <PiedDePage />
    </div>
  );
};

function App() {
  return (
    <Router>
      <LayoutProvider>
        <Routes>
          {/* Routes publiques */}
          {/* Routes publiques */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/documents/carte-etudiant"
            element={<DocumentsAdministratifs />}
          />
          <Route
            path="/documents/certificat-scolarite"
            element={<DocumentsAdministratifs />}
          />
          <Route
            path="/documents/releve-notes"
            element={<DocumentsAdministratifs />}
          />

          {/* Routes administrateur */}
          {/* Routes administrateur */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<TableauBord />} />
            <Route path="/absences" element={<AbsencesWidget />} />
            <Route path="/cours" element={<CoursWidget />} />
            <Route path="/performance" element={<PerformanceWidget />} />
            <Route path="/planning" element={<Planification />} />
            <Route path="/presences" element={<GestionPresences />} />
            <Route path="/notes" element={<GestionNotes />} />
            <Route path="/utilisateurs" element={<Administration />} />
            <Route path="/parametres" element={<Parametres />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/prochains-cours" element={<ProchainsCoursPage />} />
            <Route path="/stat-absences" element={<StatistiquesAbsences />} />
            <Route path="/admins/messages" element={<AdminMessaging />} />
            <Route
              path="/planification/gestion-cours"
              element={<GestionCours />}
            />
            <Route
              path="/utilisateurs/gestion-users"
              element={<AjouterUtilisateur />}
            />
            <Route
              path="/ajouter-utilisateur"
              element={<AjouterUtilisateur />}
            />
            <Route
              path="/admin/utilisateurs"
              element={<GestionUtilisateurs />}
            />
            <Route path="/admin/profil" element={<ProfilAdministrateur />} />
          </Route>

          {/* Routes étudiant */}
          {/* Routes étudiant */}
          <Route element={<StudentLayout />}>
            <Route path="/etudiant-login" element={<StudentProfile />} />
            <Route path="/etudiant/absences" element={<StudentAbsenceView />} />
            <Route path="/etudiant/notes" element={<StudentGradesView />} />
            <Route path="/etudiant/messages" element={<MessageView />} />
            <Route
              path="/etudiant/traveaux"
              element={<AssignmentSubmission />}
            />
            <Route
              path="/etudiant/documents"
              element={<DocumentsAdministratifsEtudiants />}
            />
            <Route
              path="/etudiant/justifications"
              element={<FormulaireJustification />}
            />
            <Route
              path="/etudiant/emploi-du-temps"
              element={<CalendrierEtudiant />}
            />
          </Route>

          {/* Routes professeur */}
          {/* Routes professeur */}
          <Route element={<TeacherLayout />}>
            <Route path="/professeur-login" element={<ProfilProfesseur />} />
            <Route path="/professeur/annulations" element={<LeaveRequest />} />
            <Route path="/professeur/notes" element={<GradeManagement />} />
            <Route path="/professeur/classes" element={<ProfessorClasses />} />
            <Route path="/professeur/cours" element={<ProfessorCourses />} />
            <Route
              path="/professeur/corrections"
              element={<AssignmentManagement />}
            />
            <Route
              path="/professeur/documents"
              element={<DocumentsAdministratifsProfs />}
            />
            <Route
              path="/professeur/messages"
              element={<ProfessorMessaging />}
            />
            <Route
              path="/professeur/emploi-du-temps"
              element={<CalendrierProfesseur />}
            />
          </Route>

          {/* Redirection par défaut */}
          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </LayoutProvider>
    </Router>
  );
}

export default App;
