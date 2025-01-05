import { RootState } from '@/store/slices';

export const selectNotifications = (state: RootState) =>
  state.notifications.notifications;
export const selectNonLues = (state: RootState) => state.notifications.nonLues;
export const selectNotificationsRecentes = (state: RootState) =>
  state.notifications.notifications.slice(0, 5);
export const selectNotificationsLoading = (state: RootState) =>
  state.notifications.loading;
export const selectNotificationsError = (state: RootState) =>
  state.notifications.error;
