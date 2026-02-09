import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg transition-all duration-200 font-medium";
  
  const variantStyles = {
    primary: "bg-[#4DA3FF] text-white hover:bg-[#3D8FE6] hover:shadow-lg hover:shadow-[#4DA3FF]/20",
    secondary: "border border-[#4DA3FF] text-[#4DA3FF] hover:bg-[#4DA3FF]/10"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
