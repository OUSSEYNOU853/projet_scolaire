import React, { useState } from 'react';
import { AlertCircle, Building2, Trash2 } from 'lucide-react';
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
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../../ui/table';
import { Alert, AlertDescription } from '../../../ui/alert';
import { motion, AnimatePresence } from 'framer-motion';

interface Salle {
  id: number;
  numero: string;
  capacite: string;
  type: string;
}

const SallesForm = () => {
  const [salles, setSalles] = useState<Salle[]>([]);
  const [newSalle, setNewSalle] = useState({
    numero: '',
    capacite: '',
    type: '',
  });
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!newSalle.numero) {
      setError('Veuillez saisir un numéro de salle');
      return false;
    }
    if (!newSalle.capacite) {
      setError('Veuillez indiquer la capacité de la salle');
      return false;
    }
    if (!newSalle.type) {
      setError('Veuillez spécifier le type de salle');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setSalles((prev) => [...prev, { ...newSalle, id: Date.now() }]);
    setNewSalle({ numero: '', capacite: '', type: '' });
  };

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-blue-500 shadow-md">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-xl text-blue-700">
              Ajouter une nouvelle salle
            </CardTitle>
          </div>
          <CardDescription>
            Définissez les caractéristiques de la salle : numéro, type et
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
                <Label htmlFor="numero" className="font-medium">
                  Numéro de salle
                </Label>
                <Input
                  id="numero"
                  value={newSalle.numero}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, numero: e.target.value })
                  }
                  placeholder="Ex: A101"
                  className="w-full transition-shadow focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="font-medium">
                  Type de salle
                </Label>
                <Input
                  id="type"
                  value={newSalle.type}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, type: e.target.value })
                  }
                  placeholder="Ex: Cours, TP, Amphi"
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
                  value={newSalle.capacite}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, capacite: e.target.value })
                  }
                  placeholder="Nombre de places"
                  className="w-full transition-shadow focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
            >
              Ajouter la salle
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Liste des salles</CardTitle>
          <CardDescription>
            {salles.length} salle(s) enregistrée(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Numéro</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Capacité</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence>
                  {salles.map((salle) => (
                    <motion.tr
                      key={salle.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="border-t hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {salle.numero}
                      </TableCell>
                      <TableCell>{salle.type}</TableCell>
                      <TableCell>{salle.capacite} places</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setSalles((prev) =>
                              prev.filter((s) => s.id !== salle.id),
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

export default SallesForm;
