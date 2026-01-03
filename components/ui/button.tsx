import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  asChild,
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  if (asChild) {
    return <>{children}</>;
  }

  const variantClasses =
    variant === 'secondary'
      ? 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'
      : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded transition-transform transform hover:scale-105 transition-colors duration-300 ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
