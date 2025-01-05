import React, { JSX } from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProps {
  type: NotificationType;
  message: string;
  description?: string;
  onClose?: () => void;
}

export const Notification = ({
  type,
  message,
  description,
  onClose,
}: NotificationProps): JSX.Element => {
  const icons = {
    success: <CheckCircle className="text-green-400" size={24} />,
    error: <AlertCircle className="text-red-400" size={24} />,
    info: <Info className="text-blue-400" size={24} />,
    warning: <AlertCircle className="text-yellow-400" size={24} />,
  };

  const styles = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-yellow-50 border-yellow-200',
  };

  return (
    <div
      className={`flex items-start p-4 rounded-lg border ${styles[type]}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="ml-3 flex-1">
        <h3 className="text-sm font-medium text-gray-900">{message}</h3>
        {description && (
          <div className="mt-1 text-sm text-gray-500">{description}</div>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
          aria-label="Close notification"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};
