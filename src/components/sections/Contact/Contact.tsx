import React, { useState } from 'react';
import { Container, SectionTitle, Button, Card } from '../../common';
import { contactContent } from '../../../data/content';
import type { ContactFormData } from '../../../types';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        animalType: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
            name: '',
            email: '',
            phone: '',
            animalType: '',
            message: '',
        });

        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    return (
        <section id="contacto" className={`section ${styles.contact}`}>
            <Container>
                <SectionTitle
                    subtitle={contactContent.subtitle}
                    title={contactContent.title}
                />

                <div className={styles.wrapper}>
                    <Card variant="elevated" padding="lg" className={styles.formCard}>
                        <h3 className={styles.formTitle}>Envíanos un mensaje</h3>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Correo electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="correo@ejemplo.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone" className={styles.label}>
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="+57 300 000 0000"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="animalType" className={styles.label}>
                                        Tipo de animal
                                    </label>
                                    <select
                                        id="animalType"
                                        name="animalType"
                                        value={formData.animalType}
                                        onChange={handleChange}
                                        className={styles.input}
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="ave">Ave exótica</option>
                                        <option value="reptil">Reptil</option>
                                        <option value="mamifero">Mamífero silvestre</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${styles.input} ${styles.textarea}`}
                                    placeholder="Cuéntanos sobre tu mascota y en qué podemos ayudarte..."
                                    rows={5}
                                    required
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                </div>
                            )}

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                fullWidth
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </Button>
                        </form>
                    </Card>

                    <div className={styles.infoSection}>
                        <Card variant="outlined" padding="lg" className={styles.infoCard}>
                            <h4 className={styles.infoTitle}>Información de Contacto</h4>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📞</span>
                                    <div>
                                        <span className={styles.infoLabel}>Teléfono</span>
                                        <a href={`tel:${contactContent.phone}`} className={styles.infoValue}>
                                            {contactContent.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>✉️</span>
                                    <div>
                                        <span className={styles.infoLabel}>Email</span>
                                        <a href={`mailto:${contactContent.email}`} className={styles.infoValue}>
                                            {contactContent.email}
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📍</span>
                                    <div>
                                        <span className={styles.infoLabel}>Dirección</span>
                                        <span className={styles.infoValue}>{contactContent.address}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card variant="outlined" padding="lg" className={styles.infoCard}>
                            <h4 className={styles.infoTitle}>Horarios de Atención</h4>

                            <div className={styles.scheduleList}>
                                {contactContent.hours.map((schedule, index) => (
                                    <div key={index} className={styles.scheduleItem}>
                                        <span className={styles.scheduleDay}>{schedule.day}</span>
                                        <span className={styles.scheduleTime}>{schedule.time}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card variant="elevated" padding="md" className={styles.emergencyCard}>
                            <div className={styles.emergencyContent}>
                                <span className={styles.emergencyIcon}>🚨</span>
                                <div>
                                    <h4 className={styles.emergencyTitle}>Emergencias 24/7</h4>
                                    <p className={styles.emergencyText}>
                                        ¿Tu mascota necesita atención urgente? Llámanos ahora.
                                    </p>
                                    <a href={`tel:${contactContent.phone}`} className={styles.emergencyPhone}>
                                        {contactContent.phone}
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
};
