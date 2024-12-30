import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({ asChild, children, ...props }) => {
  if (asChild) {
    return <>{children}</>;
  }

  return (
    <button
      {...props}
      className={`px-4 py-2 bg-blue-600 text-white rounded transition-transform transform hover:scale-105 transition-colors duration-300 hover:bg-blue-700 ${props.className}`}
    >
      {children}
    </button>
  );
};

export { Button };
