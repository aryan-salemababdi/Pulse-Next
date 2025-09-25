'use client';
import { NextPage } from 'next';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const Button: NextPage<ButtonProps> = ({ children, isActive, ...props }) => (
  <button
    className={`btn-scenario bg-white px-6 py-2 rounded-lg shadow font-semibold cursor-pointer ${
      isActive ? 'active' : ''
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
