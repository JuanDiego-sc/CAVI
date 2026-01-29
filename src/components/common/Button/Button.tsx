import React from 'react';
import type { ButtonVariant, ButtonSize } from '../../../types';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    fullWidth?: boolean;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    fullWidth = false,
    href,
    className = '',
    ...props
}) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className,
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <a href={href} className={buttonClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};
