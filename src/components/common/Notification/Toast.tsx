import React, { JSX, useEffect } from 'react';
import { Notification, NotificationType } from './index';

interface ToastProps {
  id: string;
  type: NotificationType;
  message: string;
  description?: string;
  duration?: number;
  onClose: (id: string) => void;
}

export const Toast = ({
  id,
  type,
  message,
  description,
  duration = 5000,
  onClose,
}: ToastProps): JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, id, onClose]);

  return (
    <div className="animate-slide-in-right">
      <Notification
        type={type}
        message={message}
        description={description}
        onClose={() => onClose(id)}
      />
    </div>
  );
};
