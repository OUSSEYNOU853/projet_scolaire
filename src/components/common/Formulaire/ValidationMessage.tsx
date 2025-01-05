import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

type ValidationMessageProps = {
  message: string;
  type: 'success' | 'error' | 'warning';
  className?: string;
};

const ValidationMessage = ({
  message,
  type,
  className = '',
}: ValidationMessageProps) => {
  const getStyle = () => {
    switch (type) {
      case 'success':
        return {
          container: 'bg-green-50 border-green-400 text-green-700',
          icon: <CheckCircle className="w-5 h-5 text-green-400" />,
        };
      case 'error':
        return {
          container: 'bg-red-50 border-red-400 text-red-700',
          icon: <XCircle className="w-5 h-5 text-red-400" />,
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-yellow-400 text-yellow-700',
          icon: <AlertCircle className="w-5 h-5 text-yellow-400" />,
        };
      default:
        return {
          container: '',
          icon: null,
        };
    }
  };

  const style = getStyle();

  return (
    <div
      className={`flex items-center p-4 my-2 border-l-4 rounded ${style.container} ${className}`}
    >
      {style.icon}
      <span className="ml-3 text-sm font-medium">{message}</span>
    </div>
  );
};

export default ValidationMessage;
