import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, UserCircle } from 'lucide-react';

export default function ListeEtudiants() {
  // État pour le filtrage et la pagination
  const [recherche, setRecherche] = useState('');
  const [page, setPage] = useState(1);

  // Données mockées des étudiants (à remplacer par des données réelles de l'API)
  const etudiants = [
    {
      id: 1,
      matricule: 'ET001',
      nom: 'Diallo',
      prenom: 'Fatou',
      classe: 'L3 GL',
      email: 'fatou.diallo@sa.edu',
      telephone: '77 123 45 67',
    },
    {
      id: 2,
      matricule: 'ET002',
      nom: 'Ndiaye',
      prenom: 'Moussa',
      classe: 'L2 RT',
      email: 'moussa.ndiaye@sa.edu',
      telephone: '76 234 56 78',
    },
    {
      id: 3,
      matricule: 'ET003',
      nom: 'Sow',
      prenom: 'Aminata',
      classe: 'L3 GL',
      email: 'aminata.sow@sa.edu',
      telephone: '70 345 67 89',
    },
  ];

  return (
    <div className="p-6">
      {/* En-tête avec titre et bouton d'ajout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Liste des Étudiants
        </h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5 mr-2" />
          Ajouter un étudiant
        </button>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Rechercher un étudiant..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <select className="border rounded-lg px-4 py-2">
          <option value="">Toutes les classes</option>
          <option value="L3 GL">L3 GL</option>
          <option value="L2 RT">L2 RT</option>
        </select>
      </div>

      {/* Tableau des étudiants */}
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
                Classe
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
            {etudiants.map((etudiant) => (
              <tr key={etudiant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {etudiant.matricule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {etudiant.nom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {etudiant.prenom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {etudiant.classe}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {etudiant.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {etudiant.telephone}
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
          <span className="font-medium">3</span> étudiants
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

// export default function ListeEtudiants() {
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const mockEtudiants = [
//     { id: 1, nom: "Diallo", prenom: "Mamadou", classe: "L3 GL", email: "m.diallo@sa.com" },
//     { id: 2, nom: "Ndiaye", prenom: "Fatou", classe: "M1 SIGL", email: "f.ndiaye@sa.com" }
//   ];

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Liste des Étudiants</h1>
//         <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
//           <DialogTrigger asChild>
//             <Button className="flex items-center gap-2">
//               <Plus size={16} /> Ajouter un étudiant
//             </Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Ajouter un nouvel étudiant</DialogTitle>
//             </DialogHeader>
//             <form className="space-y-4">
//               <div>
//                 <Label htmlFor="nom">Nom</Label>
//                 <Input id="nom" placeholder="Nom de l'étudiant" />
//               </div>
//               <div>
//                 <Label htmlFor="prenom">Prénom</Label>
//                 <Input id="prenom" placeholder="Prénom de l'étudiant" />
//               </div>
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="email@sa.com" />
//               </div>
//               <div>
//                 <Label htmlFor="classe">Classe</Label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Sélectionner une classe" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="l3gl">L3 GL</SelectItem>
//                     <SelectItem value="m1sigl">M1 SIGL</SelectItem>
//                     <SelectItem value="m2sigl">M2 SIGL</SelectItem>
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
//               <th className="px-6 py-3 text-left">Classe</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mockEtudiants.map((etudiant) => (
//               <tr key={etudiant.id} className="border-b">
//                 <td className="px-6 py-4">{etudiant.nom}</td>
//                 <td className="px-6 py-4">{etudiant.prenom}</td>
//                 <td className="px-6 py-4">{etudiant.classe}</td>
//                 <td className="px-6 py-4">{etudiant.email}</td>
//                 <td className="px-6 py-4">
//                   <div className="flex justify-end gap-2">
//                     <Button size="icon" variant="outline">
//                       <Eye size={16} />
//                     </Button>
//                     <Button
//                       size="icon"
//                       variant="outline"
//                       onClick={() => {
//                         setSelectedStudent(etudiant);
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
//             <DialogTitle>Modifier l'étudiant</DialogTitle>
//           </DialogHeader>
//           <form className="space-y-4">
//             <div>
//               <Label htmlFor="edit-nom">Nom</Label>
//               <Input
//                 id="edit-nom"
//                 defaultValue={selectedStudent?.nom}
//               />
//             </div>
//             <div>
//               <Label htmlFor="edit-prenom">Prénom</Label>
//               <Input
//                 id="edit-prenom"
//                 defaultValue={selectedStudent?.prenom}
//               />
//             </div>
//             <div>
//               <Label htmlFor="edit-email">Email</Label>
//               <Input
//                 id="edit-email"
//                 type="email"
//                 defaultValue={selectedStudent?.email}
//               />
//             </div>
//             <div>
//               <Label htmlFor="edit-classe">Classe</Label>
//               <Select defaultValue={selectedStudent?.classe?.toLowerCase().replace(' ', '')}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Sélectionner une classe" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="l3gl">L3 GL</SelectItem>
//                   <SelectItem value="m1sigl">M1 SIGL</SelectItem>
//                   <SelectItem value="m2sigl">M2 SIGL</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex justify-end gap-2 mt-4">
//               <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
//                 Annuler
//               </Button>
//               <Button type="submit">Enregistrer</Button>
//             </div>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
