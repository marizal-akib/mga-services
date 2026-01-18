import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-sm font-bold transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 shadow-lg shadow-gold-500/20",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white",
    white: "bg-white text-dark-900 hover:bg-gray-100 shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;