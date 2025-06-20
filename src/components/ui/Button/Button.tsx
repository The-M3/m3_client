import React from 'react'
import styles from './Button.module.scss'


type ButtonTheme = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme
}

export const Button = ({ children, className, onClick, theme = 'primary' }: ButtonProps) => {
  const btnTheme: Record<ButtonTheme, string> = {
    primary: styles.primary,
    secondary: styles.secondary
  }

  return (
    <button className={`${styles.button} ${btnTheme[theme]} ${className}`} onClick={onClick}>{children}</button>
  )
}
