import { Container, SectionTitle } from '../../common';
import { aboutContent } from '../../../data/content';
import styles from './About.module.css';

export const About = () => {
    return (
        <section id="nosotros" className={`section ${styles.about}`}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&q=80"
                                alt="Loro colorido - Fauna silvestre"
                                className={styles.mainImage}
                            />
                            <div className={styles.floatingCard}>
                                <span className={styles.floatingIcon}>🏆</span>
                                <div>
                                    <strong>10+ Años</strong>
                                    <span>de Experiencia</span>
                                </div>
                            </div>
                            <div className={styles.floatingCard2}>
                                <span className={styles.floatingIcon}>🦜</span>
                                <div>
                                    <strong>50+</strong>
                                    <span>Especies</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contentSection}>
                        <SectionTitle
                            subtitle={aboutContent.subtitle}
                            title={aboutContent.title}
                            centered={false}
                        />

                        <div className={styles.description}>
                            {aboutContent.description.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className={styles.statsGrid}>
                            {aboutContent.stats.map((stat, index) => (
                                <div key={index} className={styles.statCard}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
