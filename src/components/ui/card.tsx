import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Ajout de la propriété onClick
}

export const Card = ({ children, className, onClick }: CardProps) => (
  <div
    className={`border p-4 rounded-lg ${className}`}
    onClick={onClick} // Ajout de l'événement onClick
    style={{ cursor: onClick ? 'pointer' : 'default' }} // Style de curseur conditionnel
  >
    {children}
  </div>
);

interface CardChildProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardChildProps) => (
  <div className={`text-xl font-semibold ${className}`}>{children}</div>
);

export const CardContent = ({ children, className }: CardChildProps) => (
  <div className={className}>{children}</div>
);

export const CardTitle = ({ children, className }: CardChildProps) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

export const CardDescription = ({ children, className }: CardChildProps) => (
  <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
);
