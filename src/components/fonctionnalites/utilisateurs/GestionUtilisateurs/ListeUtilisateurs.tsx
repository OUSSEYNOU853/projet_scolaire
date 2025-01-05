import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../ui/table';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

// Types temporaires pour l'exemple
type Utilisateur = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  statut: 'actif' | 'inactif';
};
type TableProps = {
  children: React.ReactNode;
  className?: string; // Permet la prop className
};

export default function ListeUtilisateurs() {
  const [recherche, setRecherche] = useState('');

  // Données temporaires
  const utilisateurs: Utilisateur[] = [
    {
      id: 1,
      nom: 'Diallo',
      prenom: 'Amadou',
      email: 'amadou.diallo@sa.sn',
      role: 'Professeur',
      statut: 'actif',
    },
    {
      id: 2,
      nom: 'Sow',
      prenom: 'Fatima',
      email: 'fatima.sow@sa.sn',
      role: 'Étudiant',
      statut: 'actif',
    },
    // Ajoutez plus d'utilisateurs ici
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Rechercher..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Nouvel Utilisateur
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {utilisateurs.map((utilisateur) => (
              <TableRow key={utilisateur.id}>
                <TableCell>{`${utilisateur.prenom} ${utilisateur.nom}`}</TableCell>
                <TableCell>{utilisateur.email}</TableCell>
                <TableCell>{utilisateur.role}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                    ${utilisateur.statut === 'actif' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {utilisateur.statut}
                  </span>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit size={16} className="mr-2" />
                    Modifier
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 size={16} className="mr-2" />
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
