import React, { useState, useEffect, useCallback } from 'react';
import { Container, SectionTitle, Card } from '../../common';
import { reviews } from '../../../data/content';
import styles from './Reviews.module.css';

export const Reviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
            >
                ★
            </span>
        ));
    };

    const getVisibleReviews = () => {
        const items = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + reviews.length) % reviews.length;
            items.push({ review: reviews[index], position: i });
        }
        return items;
    };

    return (
        <section id="testimonios" className={`section ${styles.reviews}`}>
            <Container>
                <SectionTitle
                    subtitle="Lo que dicen nuestros clientes"
                    title="Testimonios"
                />

                <div className={styles.carouselWrapper}>
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={prevSlide}
                        aria-label="Anterior testimonio"
                    >
                        ←
                    </button>

                    <div className={styles.carousel}>
                        {getVisibleReviews().map(({ review, position }) => (
                            <div
                                key={`${review.id}-${position}`}
                                className={`${styles.slideWrapper} ${styles[`position${position}`]}`}
                            >
                                <Card variant="elevated" padding="lg" className={styles.reviewCard}>
                                    <div className={styles.reviewHeader}>
                                        <div className={styles.avatar}>
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className={styles.reviewerInfo}>
                                            <h4 className={styles.reviewerName}>{review.name}</h4>
                                            <span className={styles.animalType}>
                                                Paciente: {review.animalType}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.rating}>
                                        {renderStars(review.rating)}
                                    </div>

                                    <blockquote className={styles.comment}>
                                        "{review.comment}"
                                    </blockquote>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={nextSlide}
                        aria-label="Siguiente testimonio"
                    >
                        →
                    </button>
                </div>

                <div className={styles.dots}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir al testimonio ${index + 1}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
