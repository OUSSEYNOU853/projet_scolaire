// import { ComponentType, JSX, lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import React from 'react';
// import { ProtectedRoute } from '../components/Auth/ProtectedRoute';

// const LoadingSpinner = () => (
//   <div className="flex items-center justify-center h-screen">
//     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//   </div>
// );

// // Type personnalisé pour les composants lazy loadés
// type LazyComponentType = React.LazyExoticComponent<() => JSX.Element>;

// // Helper modifié pour le lazy loading
// const lazyLoad = (
//   importFunc: () => Promise<{ default: () => JSX.Element }>,
// ): LazyComponentType => {
//   return lazy(importFunc);
// };

// // Lazy loading des composants avec le nouveau helper
// const TableauBord = lazyLoad(() => import('../components/pages/TableauBord'));
// const AbsencesWidget = lazyLoad(
//   () => import('../components/pages/TableauBord/Widgets/AbsencesWidget'),
// );
// const CoursWidget = lazyLoad(
//   () => import('../components/pages/TableauBord/Widgets/CoursWidget'),
// );
// const PerformanceWidget = lazyLoad(
//   () => import('../components/pages/TableauBord/Widgets/PerformanceWidget'),
// );
// const StatWidget = lazyLoad(
//   () => import('../components/pages/TableauBord/Widgets/StatWidget'),
// );
// const GestionUtilisateurs = lazyLoad(
//   () =>
//     import('../components/fonctionnalites/utilisateurs/GestionUtilisateurs'),
// );
// const ProfilAdministrateur = lazyLoad(
//   () =>
//     import('../components/fonctionnalites/utilisateurs/ProfilAdministrateur'),
// );
// const Planification = lazyLoad(
//   () => import('../components/pages/Planification'),
// );
// const GestionPresences = lazyLoad(
//   () => import('../components/pages/Presences'),
// );
// const GestionNotes = lazyLoad(() => import('../components/pages/Notes'));
// const Parametres = lazyLoad(() => import('../components/pages/settings'));
// const Administration = lazyLoad(
//   () => import('../components/pages/Utilisateurs'),
// );
// const GestionCours = lazyLoad(
//   () => import('../components/pages/Planification/GestionCours'),
// );
// const LoginPage = lazyLoad(() => import('../components/pages/Auth/LoginPage'));

// export default function AppRoutes() {
//   return (
//     <Suspense fallback={<LoadingSpinner />}>
//       <Routes>
//         {/* Route de connexion */}
//         <Route path="/login" element={<LoginPage />} />

//         {/* Routes protégées */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <TableauBord />
//             </ProtectedRoute>
//           }
//         />

//         {/* Routes du tableau de bord */}
//         <Route path="/tableau-de-bord">
//           <Route
//             path="absences"
//             element={
//               <ProtectedRoute>
//                 <AbsencesWidget />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="cours"
//             element={
//               <ProtectedRoute>
//                 <CoursWidget />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="performance"
//             element={
//               <ProtectedRoute>
//                 <PerformanceWidget />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="stats"
//             element={
//               <ProtectedRoute>
//                 <StatWidget />
//               </ProtectedRoute>
//             }
//           />
//         </Route>

//         {/* Routes de gestion */}
//         <Route path="/gestion">
//           <Route
//             path="planning"
//             element={
//               <ProtectedRoute>
//                 <Planification />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="presences"
//             element={
//               <ProtectedRoute>
//                 <GestionPresences />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="notes"
//             element={
//               <ProtectedRoute>
//                 <GestionNotes />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="cours"
//             element={
//               <ProtectedRoute>
//                 <GestionCours />
//               </ProtectedRoute>
//             }
//           />
//         </Route>

//         {/* Routes d'administration */}
//         <Route path="/admin">
//           <Route
//             path="utilisateurs"
//             element={
//               <ProtectedRoute>
//                 <GestionUtilisateurs />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="profil"
//             element={
//               <ProtectedRoute>
//                 <ProfilAdministrateur />
//               </ProtectedRoute>
//             }
//           />
//         </Route>

//         {/* Autres routes */}
//         <Route
//           path="/parametres"
//           element={
//             <ProtectedRoute>
//               <Parametres />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/utilisateurs"
//           element={
//             <ProtectedRoute>
//               <Administration />
//             </ProtectedRoute>
//           }
//         />

//         {/* Route 404 */}
//         <Route path="*" element={<div>Page non trouvée</div>} />
//       </Routes>
//     </Suspense>
//   );
// }

// // src/routes/index.tsx
// import { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { MainLayout } from '../components/layout/MainLayout';
// import { ProtectedRoute } from '../components/auth/ProtectedRoute';
// import React from 'react';

// // Lazy loading des composants
// const TableauBord = lazy(() => import('../components/pages/TableauBord'));
// const AbsencesWidget = lazy(
//   () => import('../components/pages/TableauBord/Widgets/AbsencesWidget'),
// );
// const CoursWidget = lazy(
//   () => import('../components/pages/TableauBord/Widgets/CoursWidget'),
// );
// const PerformanceWidget = lazy(
//   () => import('../components/pages/TableauBord/Widgets/PerformanceWidget'),
// );
// const StatWidget = lazy(
//   () => import('../components/pages/TableauBord/Widgets/StatWidget'),
// );
// const Planification = lazy(() => import('./components/pages/Planification'));
// const GestionPresences = lazy(() => import('../components/pages/Presences'));
// const GestionNotes = lazy(() => import('../components/pages/Notes'));
// const Parametres = lazy(() => import('../components/pages/settings'));
// const Administration = lazy(() => import('../components/pages/Utilisateurs'));
// const GestionCours = lazy(
//   () => import('../components/pages/Planification/GestionCours'),
// );
// const LoginPage = lazy(() => import('../components/pages/Auth/LoginPage'));
// const NotFound = lazy(() => import('../components/pages/NotFound'));

// const AppRoutes = () => (
//   <Suspense fallback={<div>Chargement...</div>}>
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />

//       <Route
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         }
//       >
//         {/* Dashboard */}
//         <Route path="/" element={<TableauBord />} />
//         <Route path="/tableau-de-bord">
//           <Route path="absences" element={<AbsencesWidget />} />
//           <Route path="cours" element={<CoursWidget />} />
//           <Route path="performance" element={<PerformanceWidget />} />
//           <Route
//             path="stats"
//             element={
//               <StatWidget
//                 icon="chart"
//                 title="Statistiques"
//                 value="100"
//                 evolution="+10%"
//               />
//             }
//           />
//         </Route>

//         {/* Gestion */}
//         <Route path="/gestion">
//           <Route path="planning" element={<Planification />} />
//           <Route path="presences" element={<GestionPresences />} />
//           <Route path="notes" element={<GestionNotes />} />
//           <Route path="cours" element={<GestionCours />} />
//         </Route>

//         {/* Administration */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute requiredRole="ADMIN">
//               <Outlet />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="utilisateurs" element={<Administration />} />
//         </Route>

//         {/* Paramètres */}
//         <Route path="/parametres" element={<Parametres />} />
//       </Route>

//       {/* 404 */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </Suspense>
// );

// export default AppRoutes;
