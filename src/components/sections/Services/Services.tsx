import React from 'react';
import { Container, SectionTitle, Card } from '../../common';
import { services } from '../../../data/content';
import styles from './Services.module.css';

export const Services: React.FC = () => {
    return (
        <section id="servicios" className={`section ${styles.services}`}>
            <Container>
                <SectionTitle
                    subtitle="Lo que ofrecemos"
                    title="Nuestros Servicios"
                />

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Card
                            key={service.id}
                            variant="elevated"
                            hoverable
                            padding="lg"
                            className={styles.serviceCard}
                        >
                            <div
                                className={styles.cardContent}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <a href="#contacto" className={styles.cardLink}>
                                    Más información →
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};
