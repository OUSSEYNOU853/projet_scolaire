import React from 'react';

// export const Button = ({
//   children,
//   ...props
// }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
//   <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded">
//     {children}
//   </button>
// );

// src/components/ui/button.tsx
export const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: any) => {
  const baseStyle = 'px-4 py-2 rounded';
  const variantStyle =
    variant === 'outline' ? 'border border-gray-300' : 'bg-blue-500 text-white';
  const sizeStyle = size === 'sm' ? 'text-sm' : 'text-md';
  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'solid',
  size: 'md',
};
