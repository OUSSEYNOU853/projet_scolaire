// src/store/slices/etudiantSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Etudiant {
  id: string;
  nom: string;
  prenom: string;
  classe: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  matriculeEtudiant: string;
}

interface EtudiantState {
  etudiants: Etudiant[];
  etudiantSelectionne: Etudiant | null;
  loading: boolean;
  error: string | null;
}

const initialState: EtudiantState = {
  etudiants: [],
  etudiantSelectionne: null,
  loading: false,
  error: null,
};

const etudiantSlice = createSlice({
  name: 'etudiant',
  initialState,
  reducers: {
    setEtudiants: (state, action: PayloadAction<Etudiant[]>) => {
      state.etudiants = action.payload;
    },
    ajouterEtudiant: (state, action: PayloadAction<Etudiant>) => {
      state.etudiants.push(action.payload);
    },
    modifierEtudiant: (state, action: PayloadAction<Etudiant>) => {
      const index = state.etudiants.findIndex(
        (etd) => etd.id === action.payload.id,
      );
      if (index !== -1) {
        state.etudiants[index] = action.payload;
      }
    },
    selectionnerEtudiant: (state, action: PayloadAction<string>) => {
      state.etudiantSelectionne =
        state.etudiants.find((etd) => etd.id === action.payload) || null;
    },
    supprimerEtudiant: (state, action: PayloadAction<string>) => {
      state.etudiants = state.etudiants.filter(
        (etd) => etd.id !== action.payload,
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setEtudiants,
  ajouterEtudiant,
  modifierEtudiant,
  selectionnerEtudiant,
  supprimerEtudiant,
  setLoading,
  setError,
} = etudiantSlice.actions;
export default etudiantSlice.reducer;
