import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Session {
  id: string;
  cours: string;
  professeur: string;
  salle: string;
  dateDebut: string;
  dateFin: string;
  type: 'PRESENTIEL' | 'EN_LIGNE';
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}

interface EmploiTempsState {
  sessions: Session[];
  selectedSession: Session | null;
  isLoading: boolean;
  error: string | null;
  filtres: {
    dateDebut?: string;
    dateFin?: string;
    professeur?: string;
    salle?: string;
    status?: string;
  };
}

const initialState: EmploiTempsState = {
  sessions: [],
  selectedSession: null,
  isLoading: false,
  error: null,
  filtres: {},
};

const emploiTempsSlice = createSlice({
  name: 'emploiTemps',
  initialState,
  reducers: {
    fetchSessionsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSessionsSuccess: (state, action: PayloadAction<Session[]>) => {
      state.isLoading = false;
      state.sessions = action.payload;
      state.error = null;
    },
    fetchSessionsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectSession: (state, action: PayloadAction<Session>) => {
      state.selectedSession = action.payload;
    },
    updateFiltres: (
      state,
      action: PayloadAction<Partial<EmploiTempsState['filtres']>>,
    ) => {
      state.filtres = { ...state.filtres, ...action.payload };
    },
    addSession: (state, action: PayloadAction<Session>) => {
      state.sessions.push(action.payload);
    },
    updateSession: (state, action: PayloadAction<Session>) => {
      const index = state.sessions.findIndex(
        (session) => session.id === action.payload.id,
      );
      if (index !== -1) {
        state.sessions[index] = action.payload;
      }
    },
    deleteSession: (state, action: PayloadAction<string>) => {
      state.sessions = state.sessions.filter(
        (session) => session.id !== action.payload,
      );
    },
    updateSessionStatus: (
      state,
      action: PayloadAction<{ id: string; status: Session['status'] }>,
    ) => {
      const session = state.sessions.find((s) => s.id === action.payload.id);
      if (session) {
        session.status = action.payload.status;
      }
    },
  },
});

export const {
  fetchSessionsRequest,
  fetchSessionsSuccess,
  fetchSessionsFailure,
  selectSession,
  updateFiltres,
  addSession,
  updateSession,
  deleteSession,
  updateSessionStatus,
} = emploiTempsSlice.actions;

export default emploiTempsSlice.reducer;
