import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Button } from '../../../ui/button';
import { Phone, Mail, MapPin, Book, Award } from 'lucide-react';

export default function InfosPersonnelles() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informations de Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <p className="font-medium">+221 77 123 45 67</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">a.diallo@sa.sn</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Adresse</p>
                <p className="font-medium">Dakar, Sénégal</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informations Professionnelles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Book className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Spécialité</p>
                <p className="font-medium">Informatique - Développement Web</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Grade</p>
                <p className="font-medium">Professeur Titulaire</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-6">
            Modifier les informations
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
