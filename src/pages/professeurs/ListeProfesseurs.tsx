import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, UserCircle } from 'lucide-react';

export default function ListeProfesseurs() {
  // État pour le filtrage et la pagination
  const [recherche, setRecherche] = useState('');
  const [page, setPage] = useState(1);

  // Données mockées des professeurs (à remplacer par des données réelles de l'API)
  const professeurs = [
    {
      id: 1,
      matricule: 'PR001',
      nom: 'Sall',
      prenom: 'Amadou',
      specialite: 'Développement Web',
      grade: 'Docteur',
      email: 'amadou.sall@sa.edu',
      telephone: '77 891 23 45',
    },
    {
      id: 2,
      matricule: 'PR002',
      nom: 'Ba',
      prenom: 'Moussa',
      specialite: 'Réseaux',
      grade: 'Professeur',
      email: 'moussa.ba@sa.edu',
      telephone: '76 912 34 56',
    },
    {
      id: 3,
      matricule: 'PR003',
      nom: 'Diop',
      prenom: 'Omar',
      specialite: 'Base de données',
      grade: 'Docteur',
      email: 'omar.diop@sa.edu',
      telephone: '70 123 45 67',
    },
  ];

  return (
    <div className="p-6">
      {/* En-tête avec titre et bouton d'ajout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Liste des Professeurs
        </h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5 mr-2" />
          Ajouter un professeur
        </button>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Rechercher un professeur..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <select className="border rounded-lg px-4 py-2">
          <option value="">Toutes les spécialités</option>
          <option value="Développement Web">Développement Web</option>
          <option value="Réseaux">Réseaux</option>
          <option value="Base de données">Base de données</option>
        </select>
      </div>

      {/* Tableau des professeurs */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Matricule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Prénom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Spécialité
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Téléphone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {professeurs.map((professeur) => (
              <tr key={professeur.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.matricule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.nom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.prenom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.specialite}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {professeur.telephone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <UserCircle className="w-5 h-5" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Affichage de <span className="font-medium">1</span> à{' '}
          <span className="font-medium">3</span> sur{' '}
          <span className="font-medium">3</span> professeurs
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Précédent
          </button>
          <button
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
            disabled={true} // À ajuster selon le nombre total de pages
            onClick={() => setPage((p) => p + 1)}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// export default function ListeProfesseurs() {
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);

//   const mockProfesseurs = [
//     { id: 1, nom: "Sow", prenom: "Abdoulaye", specialite: "Développement Web", grade: "Docteur", email: "a.sow@sa.com" },
//     { id: 2, nom: "Ba", prenom: "Aminata", specialite: "Base de données", grade: "Professeur", email: "a.ba@sa.com" }
//   ];

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Liste des Professeurs</h1>
//         <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
//           <DialogTrigger asChild>
//             <Button className="flex items-center gap-2">
//               <Plus size={16} /> Ajouter un professeur
//             </Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Ajouter un nouveau professeur</DialogTitle>
//             </DialogHeader>
//             <form className="space-y-4">
//               <div>
//                 <Label htmlFor="nom">Nom</Label>
//                 <Input id="nom" placeholder="Nom du professeur" />
//               </div>
//               <div>
//                 <Label htmlFor="prenom">Prénom</Label>
//                 <Input id="prenom" placeholder="Prénom du professeur" />
//               </div>
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="email@sa.com" />
//               </div>
//               <div>
//                 <Label htmlFor="specialite">Spécialité</Label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Sélectionner une spécialité" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="dev-web">Développement Web</SelectItem>
//                     <SelectItem value="bdd">Base de données</SelectItem>
//                     <SelectItem value="ia">Intelligence Artificielle</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <Label htmlFor="grade">Grade</Label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Sélectionner un grade" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="docteur">Docteur</SelectItem>
//                     <SelectItem value="professeur">Professeur</SelectItem>
//                     <SelectItem value="maitre">Maître de conférences</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex justify-end gap-2 mt-4">
//                 <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
//                   Annuler
//                 </Button>
//                 <Button type="submit">Enregistrer</Button>
//               </div>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="bg-white rounded-lg shadow">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="px-6 py-3 text-left">Nom</th>
//               <th className="px-6 py-3 text-left">Prénom</th>
//               <th className="px-6 py-3 text-left">Spécialité</th>
//               <th className="px-6 py-3 text-left">Grade</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mockProfesseurs.map((professeur) => (
//               <tr key={professeur.id} className="border-b">
//                 <td className="px-6 py-4">{professeur.nom}</td>
//                 <td className="px-6 py-4">{professeur.prenom}</td>
//                 <td className="px-6 py-4">{professeur.specialite}</td>
//                 <td className="px-6 py-4">{professeur.grade}</td>
//                 <td className="px-6 py-4">{professeur.email}</td>
//                 <td className="px-6 py-4">
//                   <div className="flex justify-end gap-2">
//                     <Button size="icon" variant="outline">
//                       <Eye size={16} />
//                     </Button>
//                     <Button
//                       size="icon"
//                       variant="outline"
//                       onClick={() => {
//                         setSelectedTeacher(professeur);
//                         setIsEditModalOpen(true);
//                       }}
//                     >
//                       <Pencil size={16} />
//                     </Button>
//                     <Button size="icon" variant="outline" className="text-red-600">
//                       <Trash2 size={16} />
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal de modification */}
//       <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Modifier le professeur</DialogTitle>
//           </DialogHeader>
//           <form className="space-y-4">
//             <div>
//               <Label htmlFor="edit-nom">Nom</Label>
//               <Input
//                 id="edit-nom"
//                 defaultValue={selectedTeacher?.nom}
//               />
//             </div>
//             <div>
//               <Label htmlFor="edit-prenom">Prénom</Label>
//               <Input
//                 id="edit-prenom"
//                 defaultValue={selectedTeacher?.prenom}
//               />
//             </div>
//             <div>
//               <Label htmlFor="edit-email">Email</Label>
//               <Input
//                 id="edit-email"
//                 type="email"
//                 defaultValue={selectedTeacher?.email}
//               />
//             </div>
//             <div>
//               <Label htmlFor="edit-specialite">Spécialité</Label>
//               <Select defaultValue={selectedTeacher?.specialite?.toLowerCase().replace(' ', '-')}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Sélectionner une spécialité" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="dev-web">Développement Web</SelectItem>
//                   <SelectItem value="bdd">Base de données</SelectItem>
//                   <SelectItem value="ia">Intelligence Artificielle</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label htmlFor="edit-grade">Grade</Label>
//               <Select defaultValue={selectedTeacher?.grade?.toLowerCase()}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Sélectionner un grade" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="docteur">Docteur</SelectItem>
//                   <SelectItem value="professeur">Professeur</SelectItem>
//                   <SelectItem value="maitre">Maître de conférences</SelectItem>
//                 </SelectContent>
//                 </Select>
//                 </div>
//                 <div className="flex justify-end gap-2 mt-4">
//                     <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
//                       Annuler
//                     </Button>
//                     <Button type="submit">Enregistrer</Button>
//                 </div>
//                 </form>
//                 </DialogContent>
//                 </Dialog>
//                 </div>
