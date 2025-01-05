import React from 'react';

type AlertProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'destructive' | 'success';
};

export function Alert({
  children,
  className = '',
  onClick,
  variant = 'default',
}: AlertProps) {
  const baseStyles =
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground';

  const variantStyles = {
    default: 'bg-background text-foreground border-border',
    destructive:
      'border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600',
    success:
      'border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div role="alert" className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
}

type AlertDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function AlertDescription({
  children,
  className = '',
  onClick,
}: AlertDescriptionProps) {
  return (
    <div
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
