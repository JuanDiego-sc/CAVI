// Services
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Reviews
export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  animalType: string;
  date: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  animalType: string;
  message: string;
}

// Navigation
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Section Props
export interface SectionProps {
  id?: string;
  className?: string;
}
