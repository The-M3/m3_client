import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={styles.button + " " + className} onClick={onClick}>{children}</button>
  )
}
