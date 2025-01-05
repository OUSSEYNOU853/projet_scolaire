// src/store/selectors/absences/index.ts

import { RootState } from '@/store/slices';

export const selectAllAbsences = (state: RootState) => state.absences.absences;
export const selectAbsencesByEtudiant = (
  state: RootState,
  etudiantId: string,
) =>
  state.absences.absences.filter(
    (absence) => absence.etudiantId === etudiantId,
  );
export const selectAbsencesNonJustifiees = (state: RootState) =>
  state.absences.absences.filter((absence) => !absence.justifie);
export const selectAbsencesLoading = (state: RootState) =>
  state.absences.loading;
export const selectAbsencesError = (state: RootState) => state.absences.error;
