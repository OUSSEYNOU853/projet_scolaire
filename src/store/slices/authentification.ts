import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: 'ETUDIANT' | 'PROFESSEUR' | 'ADMIN' | 'ATTACHE';
  photo?: string;
}

interface AuthState {
  utilisateur: Utilisateur | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  utilisateur: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: Utilisateur; token: string }>,
    ) => {
      state.isLoading = false;
      state.utilisateur = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.utilisateur = null;
      state.token = null;
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<Partial<Utilisateur>>) => {
      if (state.utilisateur) {
        state.utilisateur = { ...state.utilisateur, ...action.payload };
      }
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  updateProfile,
} = authSlice.actions;
export default authSlice.reducer;
