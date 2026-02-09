import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ children, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
        active 
          ? 'bg-[#4DA3FF] text-white' 
          : 'bg-[#0F1621] text-[#9AA6B2] hover:bg-[#1A2030] hover:text-[#E9EEF5]'
      }`}
    >
      {children}
    </button>
  );
};
