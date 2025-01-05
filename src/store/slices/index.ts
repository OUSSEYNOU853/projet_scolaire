// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../slices/notes';
import absencesReducer from '../slices/absences';
import notificationsReducer from '../slices/notifications';
import utilisateursReducer from '../slices/utilisateurs';
import emploiTempsReducer from '../slices/emploiTemps';
import etudiantReducer from '../slices/etudiantSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    absences: absencesReducer,
    notifications: notificationsReducer,
    utilisateurs: utilisateursReducer,
    emploiTemps: emploiTempsReducer,
    etudiant: etudiantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// In your app, you can now type `useSelector`, `useDispatch`, and `RootState` as follows:
