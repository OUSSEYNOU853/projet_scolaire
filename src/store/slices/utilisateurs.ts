import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: 'etudiant' | 'professeur' | 'administrateur' | 'attache';
  status: 'ACTIF' | 'INACTIF';
}

interface UtilisateursState {
  liste: Utilisateur[];
  selectedUser: Utilisateur | null;
  isLoading: boolean;
  error: string | null;
  filtres: {
    role?: string;
    status?: string;
    searchTerm?: string;
  };
}

const initialState: UtilisateursState = {
  liste: [],
  selectedUser: null,
  isLoading: false,
  error: null,
  filtres: {},
};

const utilisateursSlice = createSlice({
  name: 'utilisateurs',
  initialState,
  reducers: {
    fetchUtilisateursRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUtilisateursSuccess: (state, action: PayloadAction<Utilisateur[]>) => {
      state.isLoading = false;
      state.liste = action.payload;
      state.error = null;
    },
    fetchUtilisateursFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectUtilisateur: (state, action: PayloadAction<Utilisateur>) => {
      state.selectedUser = action.payload;
    },
    updateFiltres: (
      state,
      action: PayloadAction<Partial<UtilisateursState['filtres']>>,
    ) => {
      state.filtres = { ...state.filtres, ...action.payload };
    },
    addUtilisateur: (state, action: PayloadAction<Utilisateur>) => {
      state.liste.push(action.payload);
    },
    updateUtilisateur: (state, action: PayloadAction<Utilisateur>) => {
      const index = state.liste.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.liste[index] = action.payload;
      }
    },
    deleteUtilisateur: (state, action: PayloadAction<string>) => {
      state.liste = state.liste.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  fetchUtilisateursRequest,
  fetchUtilisateursSuccess,
  fetchUtilisateursFailure,
  selectUtilisateur,
  updateFiltres,
  addUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
} = utilisateursSlice.actions;

export default utilisateursSlice.reducer;
