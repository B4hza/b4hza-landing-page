import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-7 py-3 rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
