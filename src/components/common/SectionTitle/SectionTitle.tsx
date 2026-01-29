import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    centered = true,
    light = false,
}) => {
    // Debug visual
    // console.log('Rendering SectionTitle', { title, subtitle });

    return (
        <div className={`${styles.container} ${centered ? styles.centered : ''} ${light ? styles.light : ''}`}>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.divider}>
                <span className={styles.dividerLine}></span>
                <span className={styles.dividerIcon}>🌿</span>
                <span className={styles.dividerLine}></span>
            </div>
        </div>
    );
};
