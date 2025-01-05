import React, { useState } from 'react';
import { AlertCircle, Plus, Trash2, School } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../ui/select';
import { Alert, AlertDescription } from '../../../ui/alert';

interface Classe {
  id: number;
  niveau: string;
  filiere: string;
  capacite: string;
}

const ClassesForm = () => {
  const [classes, setClasses] = useState<Classe[]>([]);
  const [newClasse, setNewClasse] = useState({
    niveau: '',
    filiere: '',
    capacite: '',
  });
  const [error, setError] = useState('');

  const niveaux = ['1ère année', '2ème année', '3ème année'];

  const validateForm = () => {
    if (!newClasse.niveau) {
      setError('Veuillez sélectionner un niveau');
      return false;
    }
    if (!newClasse.filiere) {
      setError('Veuillez saisir une filière');
      return false;
    }
    if (!newClasse.capacite || parseInt(newClasse.capacite) <= 0) {
      setError('Veuillez saisir une capacité valide');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setClasses((prev) => [...prev, { ...newClasse, id: Date.now() }]);
    setNewClasse({ niveau: '', filiere: '', capacite: '' });
  };

  const handleCapaciteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setNewClasse({ ...newClasse, capacite: value });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 gap-4">
          <School className="w-6 h-6 text-blue-500" />
          <CardTitle>Ajouter une nouvelle classe</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="niveau" className="font-medium">
                  Niveau
                </Label>
                <Select
                  value={newClasse.niveau}
                  onValueChange={(value) =>
                    setNewClasse({ ...newClasse, niveau: value })
                  }
                >
                  <SelectTrigger id="niveau" className="w-full">
                    <SelectValue placeholder="Sélectionner le niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    {niveaux.map((niveau) => (
                      <SelectItem
                        key={niveau}
                        value={niveau}
                        className="cursor-pointer hover:bg-blue-50"
                      >
                        {niveau}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filiere" className="font-medium">
                  Filière
                </Label>
                <Input
                  id="filiere"
                  value={newClasse.filiere}
                  onChange={(e) =>
                    setNewClasse({ ...newClasse, filiere: e.target.value })
                  }
                  placeholder="Ex: Informatique"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacite" className="font-medium">
                  Capacité
                </Label>
                <Input
                  id="capacite"
                  type="number"
                  min="1"
                  value={newClasse.capacite}
                  onChange={handleCapaciteChange}
                  placeholder="Nombre d'étudiants"
                  className="w-full"
                />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter la classe
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Liste des classes</CardTitle>
            <span className="text-sm text-gray-500">
              {classes.length} classe(s)
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Niveau</TableHead>
                  <TableHead>Filière</TableHead>
                  <TableHead>Capacité</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-gray-500 py-4"
                    >
                      Aucune classe enregistrée
                    </TableCell>
                  </TableRow>
                ) : (
                  classes.map((classe) => (
                    <TableRow key={classe.id} className="group">
                      <TableCell>{classe.niveau}</TableCell>
                      <TableCell>{classe.filiere}</TableCell>
                      <TableCell>{classe.capacite} étudiants</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setClasses((prev) =>
                              prev.filter((c) => c.id !== classe.id),
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

export default ClassesForm;
