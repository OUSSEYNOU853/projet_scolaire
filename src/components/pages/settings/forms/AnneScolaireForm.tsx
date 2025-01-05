// src/components/parametres/forms/AnneScolaireForm.tsx
import React, { useState, useEffect } from 'react';
import { AlertCircle, Plus, Trash2 } from 'lucide-react';
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

interface AnneeScolaire {
  id: number;
  annee: string;
  dateDebut: string;
}

const AnneScolaireForm = () => {
  const [anneesScolaires, setAnneesScolaires] = useState<AnneeScolaire[]>([]);
  const [newAnnee, setNewAnnee] = useState({
    annee: '',
    dateDebut: '',
  });
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!newAnnee.annee) {
      setError('Veuillez saisir une année scolaire');
      return false;
    }
    if (!newAnnee.dateDebut) {
      setError('Veuillez sélectionner une date de début');
      return false;
    }
    if (!newAnnee.annee.match(/^\d{4}-\d{4}$/)) {
      setError("Le format de l'année doit être YYYY-YYYY");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    const newEntry = { ...newAnnee, id: Date.now() };
    setAnneesScolaires((prev) => [...prev, newEntry]);
    setNewAnnee({ annee: '', dateDebut: '' });
  };

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-blue-500 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">
            Ajouter une nouvelle année scolaire
          </CardTitle>
          <CardDescription>
            Définissez la période scolaire et sa date de début
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="annee">Année</Label>
                <Input
                  id="annee"
                  value={newAnnee.annee}
                  onChange={(e) =>
                    setNewAnnee({ ...newAnnee, annee: e.target.value })
                  }
                  placeholder="2024-2025"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateDebut">Date de début</Label>
                <Input
                  id="dateDebut"
                  type="date"
                  value={newAnnee.dateDebut}
                  onChange={(e) =>
                    setNewAnnee({ ...newAnnee, dateDebut: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Ajouter l'année scolaire
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Liste des années scolaires</CardTitle>
          <CardDescription>
            {anneesScolaires.length} année(s) scolaire(s) enregistrée(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Année</TableHead>
                  <TableHead className="font-semibold">Date de début</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence>
                  {anneesScolaires.map((annee) => (
                    <motion.tr
                      key={annee.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="border-t hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {annee.annee}
                      </TableCell>
                      <TableCell>
                        {new Date(annee.dateDebut).toLocaleDateString('fr-FR')}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setAnneesScolaires((prev) =>
                              prev.filter((a) => a.id !== annee.id),
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

export default AnneScolaireForm;
