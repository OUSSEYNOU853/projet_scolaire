// src/store/selectors/utilisateurs/index.ts
import { RootState } from '@/store/slices';

export const selectAllEtudiants = (state: RootState) =>
  state.etudiant.etudiants;
export const selectEtudiantSelectionne = (state: RootState) =>
  state.etudiant.etudiantSelectionne;
export const selectEtudiantsByClasse = (state: RootState, classe: string) =>
  state.etudiant.etudiants.filter((etudiant) => etudiant.classe === classe);
export const selectEtudiantLoading = (state: RootState) =>
  state.etudiant.loading;
export const selectEtudiantError = (state: RootState) => state.etudiant.error;

export const selectEtudiant = (state: RootState) => state.etudiant;
export const selectEtudiants = (state: RootState) => state.etudiant.etudiants;
