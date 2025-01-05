import React from 'react';

export const Avatar = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    {...props} // Permet de propager des propriétés comme onClick
  >
    {children}
  </div>
);

export const AvatarImage = ({
  src,
  alt = '',
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={`aspect-square h-full w-full object-cover ${className}`}
  />
);

export const AvatarFallback = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`}
  >
    {children}
  </div>
);
