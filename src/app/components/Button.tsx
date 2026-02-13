import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variantStyles = {
    primary:
      "bg-[#4DA3FF] text-white hover:bg-[#3D8FE6] hover:shadow-lg hover:shadow-[#4DA3FF]/20",
    secondary: "border border-[#4DA3FF] text-[#4DA3FF] hover:bg-[#4DA3FF]/10"
  };

  return (
    <button 
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
