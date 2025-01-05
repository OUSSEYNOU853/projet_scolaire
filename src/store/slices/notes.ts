// store/slices/notes.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: string;
  etudiantId: string;
  moduleId: string;
  valeur: number;
  type: 'DEVOIR' | 'EXAMEN';
  date: string;
}

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
  selectedModuleId: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
  selectedModuleId: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id,
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setSelectedModule: (state, action: PayloadAction<string | null>) => {
      state.selectedModuleId = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setNotes,
  addNote,
  updateNote,
  deleteNote,
  setSelectedModule,
} = notesSlice.actions;

export default notesSlice.reducer;
