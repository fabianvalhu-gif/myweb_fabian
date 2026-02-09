import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-[#0F1621] rounded-lg p-6 border border-[rgba(255,255,255,0.08)] ${className}`}
    >
      {children}
    </motion.div>
  );
};
