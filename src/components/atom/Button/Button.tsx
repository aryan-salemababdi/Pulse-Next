'use client';
import React, { ButtonHTMLAttributes } from 'react';
import { NextPage } from 'next';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  isActive?: boolean;
  className?: string;
}

const Button: NextPage<ButtonProps> = ({
  children,
  primary = false,
  isActive = false,
  className = '',
  ...props
}) => (
  <button
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow cursor-pointer
      ${primary 
        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/30' 
        : 'bg-gray-800 text-white hover:bg-gray-700'}
      ${isActive ? 'ring-2 ring-blue-400' : ''}
      ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;