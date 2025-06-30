import React from 'react'
import styles from './Button.module.scss'
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'



type ButtonTheme = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button = ({ children, className, onClick, theme = 'primary', type = 'button', disabled = false, isLoading = false }: ButtonProps) => {
  const btnTheme: Record<ButtonTheme, string> = {
    primary: styles.primary,
    secondary: styles.secondary
  }

  return (
    <button 
      type={type}
      className={`${styles.button} ${btnTheme[theme]} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <Tailspin size="30" stroke="5" speed="0.9" color="var(--button-color)" /> : children}
    </button>
  )
}
