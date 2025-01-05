import React, { useState } from 'react';
import { AlertCircle, GraduationCap, Trash2 } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../../../ui/card';
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
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../../ui/table';
import { Alert, AlertDescription } from '../../../ui/alert';
import { motion, AnimatePresence } from 'framer-motion';

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

  const niveaux = ['1ère année', '2ème année', '3ème année'];

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-blue-500 shadow-md">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-xl text-blue-700">
              Ajouter une nouvelle classe
            </CardTitle>
          </div>
          <CardDescription>
            Définissez les caractéristiques de la classe : niveau, filière et
            capacité
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="mb-4">
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
                  <SelectTrigger
                    id="niveau"
                    className="w-full transition-shadow focus:ring-2 focus:ring-blue-500"
                  >
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
                  className="w-full transition-shadow focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacite" className="font-medium">
                  Capacité
                </Label>
                <Input
                  id="capacite"
                  type="number"
                  value={newClasse.capacite}
                  onChange={(e) =>
                    setNewClasse({ ...newClasse, capacite: e.target.value })
                  }
                  placeholder="Nombre d'étudiants"
                  className="w-full transition-shadow focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Ajouter la classe
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Liste des classes</CardTitle>
          <CardDescription>
            {classes.length} classe(s) enregistrée(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Niveau</TableHead>
                  <TableHead className="font-semibold">Filière</TableHead>
                  <TableHead className="font-semibold">Capacité</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence>
                  {classes.map((classe) => (
                    <motion.tr
                      key={classe.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="border-t hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {classe.niveau}
                      </TableCell>
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
                          className="group"
                        >
                          <Trash2 className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Supprimer
                        </Button>
                      </TableCell>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassesForm;
