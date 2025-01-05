import React, { useState } from 'react';
import { AlertCircle, Plus, Trash2, GraduationCap, Mail } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../../../ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../../ui/table';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Alert, AlertDescription } from '../../../ui/alert';

interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  specialite: string;
}

const ProfesseursForm = () => {
  const [professeurs, setProfesseurs] = useState<Professeur[]>([]);
  const [newProfesseur, setNewProfesseur] = useState({
    nom: '',
    prenom: '',
    email: '',
    specialite: '',
  });
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!newProfesseur.nom.trim()) {
      setError('Le nom est requis');
      return false;
    }
    if (!newProfesseur.prenom.trim()) {
      setError('Le prénom est requis');
      return false;
    }
    if (!newProfesseur.email.trim()) {
      setError("L'adresse email est requise");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newProfesseur.email)) {
      setError("L'adresse email n'est pas valide");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setProfesseurs((prev) => [...prev, { ...newProfesseur, id: Date.now() }]);
    setNewProfesseur({ nom: '', prenom: '', email: '', specialite: '' });
  };

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-blue-500 shadow-md">
        <CardHeader className="flex flex-row items-center space-y-0 gap-4">
          <GraduationCap className="w-6 h-6 text-blue-500" />
          <div>
            <CardTitle className="text-xl text-blue-700">
              Ajouter un nouveau professeur
            </CardTitle>
            <CardDescription>
              Enregistrez les informations du professeur
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom" className="font-medium">
                  Nom
                </Label>
                <Input
                  id="nom"
                  value={newProfesseur.nom}
                  onChange={(e) =>
                    setNewProfesseur({ ...newProfesseur, nom: e.target.value })
                  }
                  placeholder="Entrez le nom"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prenom" className="font-medium">
                  Prénom
                </Label>
                <Input
                  id="prenom"
                  value={newProfesseur.prenom}
                  onChange={(e) =>
                    setNewProfesseur({
                      ...newProfesseur,
                      prenom: e.target.value,
                    })
                  }
                  placeholder="Entrez le prénom"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={newProfesseur.email}
                    onChange={(e) =>
                      setNewProfesseur({
                        ...newProfesseur,
                        email: e.target.value,
                      })
                    }
                    placeholder="email@exemple.com"
                    className="w-full pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialite" className="font-medium">
                  Spécialité
                </Label>
                <Input
                  id="specialite"
                  value={newProfesseur.specialite}
                  onChange={(e) =>
                    setNewProfesseur({
                      ...newProfesseur,
                      specialite: e.target.value,
                    })
                  }
                  placeholder="Ex: Mathématiques"
                  className="w-full"
                />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter le professeur
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Liste des professeurs</CardTitle>
              <CardDescription>
                {professeurs.length} professeur(s) enregistré(s)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Nom</TableHead>
                  <TableHead className="font-semibold">Prénom</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Spécialité</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {professeurs.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-gray-500 py-4"
                    >
                      Aucun professeur enregistré
                    </TableCell>
                  </TableRow>
                ) : (
                  professeurs.map((professeur) => (
                    <TableRow
                      key={professeur.id}
                      className="group hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {professeur.nom}
                      </TableCell>
                      <TableCell>{professeur.prenom}</TableCell>
                      <TableCell className="text-gray-600">
                        <a
                          href={`mailto:${professeur.email}`}
                          className="hover:text-blue-600"
                        >
                          {professeur.email}
                        </a>
                      </TableCell>
                      <TableCell>{professeur.specialite}</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setProfesseurs((prev) =>
                              prev.filter((p) => p.id !== professeur.id),
                            )
                          }
                          className="opacity-70 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Supprimer
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfesseursForm;
