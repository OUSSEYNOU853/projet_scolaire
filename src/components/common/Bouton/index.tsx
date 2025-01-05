// composants/commun/Bouton/index.tsx
import React from 'react';
import { cn } from '../../../utils/cn';

interface BoutonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primaire' | 'secondaire' | 'danger' | 'success' | 'outline';
  taille?: 'petit' | 'moyen' | 'grand';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Bouton = ({
  variante = 'primaire',
  taille = 'moyen',
  isLoading = false,
  icon,
  className,
  children,
  disabled,
  ...props
}: BoutonProps) => {
  // Classes de base et utilitaires
  const baseStyles =
    'flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variantes de style
  const varianteStyles = {
    primaire: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondaire: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    outline:
      'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  };

  // Tailles
  const tailleStyles = {
    petit: 'px-3 py-1.5 text-sm',
    moyen: 'px-4 py-2 text-base',
    grand: 'px-6 py-3 text-lg',
  };

  const classes = cn(
    baseStyles,
    varianteStyles[variante],
    tailleStyles[taille],
    isLoading && 'opacity-70 cursor-not-allowed',
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  );

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <div className="mr-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {children}
    </button>
  );
};
