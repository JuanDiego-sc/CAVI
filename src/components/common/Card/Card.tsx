import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'outlined';
    hoverable?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'default',
    hoverable = false,
    padding = 'md',
}) => {
    const cardClasses = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        hoverable ? styles.hoverable : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className={cardClasses}>
            {children}
        </div>
    );
};
