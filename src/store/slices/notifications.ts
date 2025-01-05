// store/slices/notifications.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  titre?: string;
  lu: boolean;
  date: string;
}

interface NotificationsState {
  loading: any;
  error: any;
  notifications: Notification[];
  nonLues: number;
}

const initialState: NotificationsState = {
  notifications: [],
  nonLues: 0,
  loading: undefined,
  error: undefined,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    ajouterNotification: (
      state,
      action: PayloadAction<Omit<Notification, 'id'>>,
    ) => {
      const id = Date.now().toString();
      state.notifications.unshift({ ...action.payload, id });
      if (!action.payload.lu) {
        state.nonLues += 1;
      }
    },
    marquerCommeLu: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(
        (n) => n.id === action.payload,
      );
      if (notification && !notification.lu) {
        notification.lu = true;
        state.nonLues -= 1;
      }
    },
    supprimerNotification: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(
        (n) => n.id === action.payload,
      );
      if (notification && !notification.lu) {
        state.nonLues -= 1;
      }
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload,
      );
    },
    toutMarquerCommeLu: (state) => {
      state.notifications.forEach((n) => {
        n.lu = true;
      });
      state.nonLues = 0;
    },
  },
});

export const {
  ajouterNotification,
  marquerCommeLu,
  supprimerNotification,
  toutMarquerCommeLu,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
