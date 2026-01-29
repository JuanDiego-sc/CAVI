import type { NavItem, Service, Review } from '../types';

export const navigation: NavItem[] = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
    { id: 'servicios', label: 'Servicios', href: '#servicios' },
    { id: 'testimonios', label: 'Testimonios', href: '#testimonios' },
    { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const services: Service[] = [
    {
        id: 'aves-exoticas',
        icon: '🦜',
        title: 'Aves Exóticas',
        description: 'Atención especializada para loros, guacamayas, tucanes y todo tipo de aves exóticas. Diagnóstico y tratamiento de enfermedades aviares.',
    },
    {
        id: 'reptiles',
        icon: '🦎',
        title: 'Reptiles',
        description: 'Cuidado integral para iguanas, tortugas, serpientes y lagartos. Manejo nutricional y control de enfermedades específicas.',
    },
    {
        id: 'mamiferos-silvestres',
        icon: '🦔',
        title: 'Mamíferos Silvestres',
        description: 'Tratamiento para erizos, hurones, conejos silvestres y otros mamíferos exóticos. Medicina preventiva especializada.',
    },
    {
        id: 'emergencias',
        icon: '🚨',
        title: 'Emergencias 24/7',
        description: 'Servicio de urgencias disponible las 24 horas para atender emergencias con fauna silvestre. Respuesta inmediata.',
    },
    {
        id: 'rehabilitacion',
        icon: '🏥',
        title: 'Rehabilitación',
        description: 'Programas de rehabilitación para animales silvestres rescatados, preparándolos para su reinserción al hábitat natural.',
    },
    {
        id: 'consulta-nutricional',
        icon: '🥗',
        title: 'Nutrición Especializada',
        description: 'Asesoría nutricional personalizada según la especie. Planes alimenticios para mantener la salud óptima de tu mascota.',
    },
];

export const reviews: Review[] = [
    {
        id: '1',
        name: 'María González',
        avatar: '',
        rating: 5,
        comment: 'Excelente atención para mi guacamaya. El Dr. fue muy paciente y profesional. Mi Lola se recuperó completamente gracias a CAVI.',
        animalType: 'Guacamaya',
        date: '2024-01-15',
    },
    {
        id: '2',
        name: 'Carlos Rodríguez',
        avatar: '',
        rating: 5,
        comment: 'Llevé a mi iguana de emergencia y la atención fue inmediata. El equipo de CAVI realmente conoce sobre reptiles. Muy recomendados.',
        animalType: 'Iguana',
        date: '2024-01-10',
    },
    {
        id: '3',
        name: 'Ana Martínez',
        avatar: '',
        rating: 5,
        comment: 'Mi erizo estaba muy enfermo y en CAVI lo salvaron. Son especialistas de verdad en fauna silvestre. Eternamente agradecida.',
        animalType: 'Erizo',
        date: '2024-01-05',
    },
    {
        id: '4',
        name: 'Pedro Sánchez',
        avatar: '',
        rating: 5,
        comment: 'La mejor clínica para aves exóticas. Mi loro ahora está más sano que nunca gracias a sus cuidados y consejos nutricionales.',
        animalType: 'Loro',
        date: '2023-12-28',
    },
    {
        id: '5',
        name: 'Laura Jiménez',
        avatar: '',
        rating: 5,
        comment: 'Profesionales muy capacitados. Ayudaron a rehabilitar una tortuga que encontré herida. Tienen un amor genuino por los animales.',
        animalType: 'Tortuga',
        date: '2023-12-20',
    },
];

export const heroContent = {
    title: 'Cuidado Especializado para Fauna Silvestre',
    subtitle: 'CAVI',
    description: 'Somos expertos en el cuidado de aves exóticas, reptiles y mamíferos silvestres. Tu compañero exótico merece atención veterinaria de calidad.',
    ctaPrimary: 'Agendar Cita',
    ctaSecondary: 'Conocer Más',
};

export const aboutContent = {
    title: 'Sobre CAVI',
    subtitle: 'Centro de Atención Veterinaria Integral',
    description: `En CAVI nos especializamos en el cuidado de fauna silvestre y animales exóticos. Con más de 10 años de experiencia, nuestro equipo de veterinarios está altamente capacitado para brindar la mejor atención a tu compañero especial.

Entendemos que los animales exóticos tienen necesidades únicas y requieren un enfoque especializado. Por eso, contamos con equipos modernos y técnicas avanzadas específicas para cada especie.`,
    stats: [
        { value: '10+', label: 'Años de Experiencia' },
        { value: '5000+', label: 'Pacientes Atendidos' },
        { value: '50+', label: 'Especies Tratadas' },
        { value: '24/7', label: 'Atención Emergencias' },
    ],
};

export const contactContent = {
    title: 'Contáctanos',
    subtitle: 'Estamos aquí para ayudarte',
    phone: '+57 300 123 4567',
    email: 'contacto@cavi.com.co',
    address: 'Calle 123 #45-67, Bogotá, Colombia',
    hours: [
        { day: 'Lunes - Viernes', time: '8:00 AM - 7:00 PM' },
        { day: 'Sábados', time: '9:00 AM - 5:00 PM' },
        { day: 'Domingos', time: 'Solo Emergencias' },
    ],
};
