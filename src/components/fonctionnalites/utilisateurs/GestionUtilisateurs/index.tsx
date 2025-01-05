import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import ListeUtilisateurs from './ListeUtilisateurs';
import Permissions from './Permissions';

export default function GestionUtilisateurs() {
  const [activeTab, setActiveTab] = useState('liste');

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Gestion des Utilisateurs
        </h1>
        <p className="text-gray-600">
          Gérez les utilisateurs et leurs permissions
        </p>
      </div>

      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList>
          <TabsTrigger value="liste">Liste des Utilisateurs</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="liste">
          <ListeUtilisateurs />
        </TabsContent>

        <TabsContent value="permissions">
          <Permissions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
