// store/slices/absences.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Absence {
  id: string;
  etudiantId: string;
  courseId: string;
  date: string;
  justifie: boolean;
  justificatif?: string;
  statut: 'en_attente' | 'accepte' | 'refuse';
  motif?: string;
}

interface AbsencesState {
  absences: Absence[];
  loading: boolean;
  error: string | null;
  selectedEtudiantId: string | null;
}

const initialState: AbsencesState = {
  absences: [],
  loading: false,
  error: null,
  selectedEtudiantId: null,
};

const absencesSlice = createSlice({
  name: 'absences',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setAbsences: (state, action: PayloadAction<Absence[]>) => {
      state.absences = action.payload;
    },
    addAbsence: (state, action: PayloadAction<Absence>) => {
      state.absences.push(action.payload);
    },
    updateAbsence: (state, action: PayloadAction<Absence>) => {
      const index = state.absences.findIndex(
        (abs) => abs.id === action.payload.id,
      );
      if (index !== -1) {
        state.absences[index] = action.payload;
      }
    },
    deleteAbsence: (state, action: PayloadAction<string>) => {
      state.absences = state.absences.filter(
        (abs) => abs.id !== action.payload,
      );
    },
    justifierAbsence: (
      state,
      action: PayloadAction<{ id: string; motif: string }>,
    ) => {
      const absence = state.absences.find(
        (abs) => abs.id === action.payload.id,
      );
      if (absence) {
        absence.justifie = true;
        absence.motif = action.payload.motif;
      }
    },
    setSelectedEtudiant: (state, action: PayloadAction<string | null>) => {
      state.selectedEtudiantId = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setAbsences,
  addAbsence,
  updateAbsence,
  deleteAbsence,
  justifierAbsence,
  setSelectedEtudiant,
} = absencesSlice.actions;

export default absencesSlice.reducer;
