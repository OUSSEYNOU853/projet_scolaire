import React from 'react';

type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'success'
  | 'destructive'
  | 'outline';

const variants: Record<BadgeVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  success: 'bg-green-100 text-green-800 hover:bg-green-200',
  destructive: 'bg-red-100 text-red-800 hover:bg-red-200',
  outline: 'border border-gray-200 text-gray-900 hover:bg-gray-100',
};

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export const Badge = ({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) => {
  return (
    <span
      className={`
        inline-flex items-center 
        rounded-full 
        px-2.5 py-0.5 
        text-xs font-semibold 
        transition-colors 
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
