// src/types/types.ts
export interface Student {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  classe: string;
  photo: string;
}

export interface Module {
  nom: string;
  moyenne: number;
  credits: number;
  status: string;
}

export interface Professeur {
  id: string;
  nom: string;
  prenom: string;
  titre: string;
  specialite: string;
  photo: string;
}
