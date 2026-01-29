import { Suspense } from 'react';
import { Container, Button } from '../../common';
import { heroContent } from '../../../data/content';
import { WildlifeScene } from '../../three';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section id="inicio" className={styles.hero}>
            {/* Background Image */}
            <div className={styles.backgroundImage}>
                <img
                    src="https://images.unsplash.com/photo-1567752881298-f2f84e1e7c0a?w=1920&q=80"
                    alt="Fauna silvestre - Iguana en bosque"
                    className={styles.bgImg}
                />
                <div className={styles.imageOverlay}></div>
            </div>

            {/* ThreeJS Particles */}
            <div className={styles.particlesWrapper}>
                <Suspense fallback={null}>
                    <WildlifeScene />
                </Suspense>
            </div>

            <Container>
                <div className={styles.content}>
                    <span className={styles.badge}>
                        🌿 Especialistas en Fauna Silvestre
                    </span>
                    <h1 className={styles.title}>
                        <span className={styles.subtitle}>{heroContent.subtitle}</span>
                        {heroContent.title}
                    </h1>
                    <p className={styles.description}>
                        {heroContent.description}
                    </p>
                    <div className={styles.cta}>
                        <Button variant="primary" size="lg" href="#contacto">
                            {heroContent.ctaPrimary}
                        </Button>
                        <Button variant="outline" size="lg" href="#nosotros">
                            {heroContent.ctaSecondary}
                        </Button>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statIcon}>🦜</span>
                            <span className={styles.statText}>Aves Exóticas</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statIcon}>🦎</span>
                            <span className={styles.statText}>Reptiles</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statIcon}>🦔</span>
                            <span className={styles.statText}>Mamíferos</span>
                        </div>
                    </div>
                </div>
            </Container>

            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Desliza hacia abajo</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </div>
        </section>
    );
};
