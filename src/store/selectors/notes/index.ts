// src/store/selectors/notes/index.ts
import { RootState } from '@/store/slices';

export const selectAllNotes = (state: RootState) => state.notes.notes;
export const selectNotesByEtudiant = (state: RootState, etudiantId: string) =>
  state.notes.notes.filter((note) => note.etudiantId === etudiantId);
export const selectNotesLoading = (state: RootState) => state.notes.loading;
export const selectNotesError = (state: RootState) => state.notes.error;
export const selectNotesByModule = (state: RootState, moduleId: string) =>
  state.notes.notes.filter((note) => note.moduleId === moduleId);

//export const selectAllNotes = (state: RootState) => state.notes.liste;

// export const selectNotesByEtudiant = (state: RootState, etudiantId: string) =>
//   state.notes.liste.filter(note => note.etudiantId === etudiantId);

export const selectMoyenneEtudiant = (state: RootState, etudiantId: string) => {
  const notes = selectNotesByEtudiant(state, etudiantId);
  if (notes.length === 0) return 0;
  return notes.reduce((sum, note) => sum + note.valeur, 0) / notes.length;
};
// export const selectModules = (state: RootState) => state.modules.modules;
// export const selectModuleSelectionne = (state: RootState) =>
//   state.modules.moduleSelectionne;
