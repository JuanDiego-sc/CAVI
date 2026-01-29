import React, { useState, useEffect } from 'react';
import { Container } from '../../common';
import { Button } from '../../common/Button';
import { navigation } from '../../../data/content';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Container>
                <div className={styles.headerContent}>
                    <a href="#inicio" className={styles.logo}>
                        <span className={styles.logoIcon}>🦜</span>
                        <span className={styles.logoText}>CAVI</span>
                    </a>

                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                        <ul className={styles.navList}>
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        className={styles.navLink}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.headerActions}>
                        <Button variant="primary" size="sm" href="#contacto">
                            Agendar Cita
                        </Button>
                    </div>

                    <button
                        className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </Container>

            {isMobileMenuOpen && (
                <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </header>
    );
};
