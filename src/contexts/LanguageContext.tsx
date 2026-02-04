'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Hero Section
    'hero.title': 'Bienvenidos a la Casa del Jaguar',
    'hero.description': 'Nuestras ceremonias se desarrollan en un entorno confortable, seguro y cuidadosamente preparado, donde cada participante es acompañado en un proceso profundo de sanación emocional y expansión espiritual.',
    'hero.tagline': '🌿 Equilibrio, bienestar y reconexión desde el alma hasta el cuerpo.',
    'hero.cta': 'Reserva tu lugar y comienza tu viaje',
    
    // About Section
    'about.title': 'Sabiduría Ancestral',
    'about.description': 'Integramos de manera consciente la sabiduría ancestral amazónica con los enfoques de la ciencia moderna, ofreciendo una experiencia transformadora.',
    'about.approach': 'Nuestro enfoque se basa en el respeto, el cuidado y la guía personalizada, permitiendo que cada viaje interior sea vivido con claridad, contención y propósito.',
    'about.subtitle': 'Uso responsable de las Plantas Sagradas en un entorno cómodo y seguro.',
    
    // Maestros Section
    'maestros.title': 'Nuestros Maestros',
    'maestros.sarita': 'Maestra Sarita',
    'maestros.richard': 'Maestro Richard',
    'maestros.denis': 'Maestro Denis',
    
    // Location Section
    'location.title': 'Ubicación en Iquitos',
    'location.description': 'La Casa del Jaguar está ubicada en la ciudad de Iquitos, capital de la Amazonía peruana, lo que nos permite ofrecer una experiencia auténtica de sanación con todas las comodidades de un entorno urbano.',
    'location.benefits': 'Nuestra ubicación facilita el acceso, garantiza mayor confort y nos permite contar con todos los recursos necesarios para tu bienestar.',
    
    // Ayahuasca Section
    'ayahuasca.title': '¿Qué es la Ayahuasca?',
    'ayahuasca.description': 'Es una Medicina Holística, un agente divino de transformación que nos permite conocer la verdad sobre quiénes somos.',
    'ayahuasca.cta': 'Leer Más',
    
    // Buttons
    'button.aboutUs': 'Sobre Nosotros',
    'button.maestroDenis': 'Maestro Denis',
    
    // Navigation
    'nav.brand': 'Ayahuasca Iquitos',
    'nav.about': 'Acerca de Nosotros',
    'nav.importantInfo': 'Información Importante',
    'nav.info.ayahuasca': 'Ayahuasca',
    'nav.info.sanPedro': 'San Pedro (Huachuma)',
    'nav.info.sonido': 'Sonido',
    'nav.info.hemiSync': 'Espíritu y Medicina: Hemi-Sync en Ceremonia',
    'nav.maestros': 'Maestros Chamanes',
    'nav.maestros.denis': 'Maestro Denis Montes',
    'nav.maestros.dan': 'Maestro Dan Reynolds',
    'nav.blog': 'Blog',
    'nav.blog.post1': 'Mi Despertar a lo Divino',
    'nav.blog.post2': 'Un encuentro transformador',
    'nav.blog.post3': 'Mi primera Ceremonia con el Maestro Dan',
    'nav.blog.post4': 'Beneficios de las Ceremonias',
    'nav.contact': 'Contáctanos',
    'nav.gallery': 'Galería de Fotos',
    'nav.gallery.casa': 'Casa del Jaguar',
    'nav.gallery.maloca': 'Maloca Ceremonial',
    
    // Footer Section
    'footer.brandTitle': 'Ayahuasca Iquitos',
    'footer.brandSubtitle': 'Ceremonias de Sanación Chamánica',
    'footer.searchPlaceholder': 'Buscar...',
    'footer.aboutTitle': 'Nosotros',
    'footer.about': 'Acerca de',
    'footer.team': 'Equipo',
    'footer.history': 'Historia',
    'footer.careers': 'Trabaja con nosotros',
    'footer.legalTitle': 'Legal',
    'footer.privacy': 'Privacidad',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.contact': 'Contáctanos',
    'footer.socialTitle': 'Redes Sociales',
    'footer.copyright': 'Casa del Jaguar. Todos los derechos reservados.',
    
    // Reviews Section
    'reviews.title': 'Lo que dicen nuestros visitantes',
    'reviews.subtitle': 'Experiencias reales de personas que han participado en nuestras ceremonias',
    'reviews.note': 'Pausar con el mouse sobre las reseñas para leer con calma',
    
    // Latest Posts Section
    'latestPosts.title': 'Últimos Artículos del Blog',
    'latestPosts.subtitle': 'Descubre las últimas publicaciones sobre ayahuasca, ceremonias y sabiduría ancestral',
    'latestPosts.viewAll': 'Ver Todos los Artículos',
  },
  en: {
    // Hero Section
    'hero.title': 'Welcome to Casa del Jaguar',
    'hero.description': 'Our ceremonies take place in a comfortable, safe, and carefully prepared environment, where each participant is accompanied through a profound process of emotional healing and spiritual expansion.',
    'hero.tagline': '🌿 Balance, wellness, and reconnection from soul to body.',
    'hero.cta': 'Reserve Your Place and Begin Your Journey',
    
    // About Section
    'about.title': 'Ancestral Wisdom',
    'about.description': 'We consciously integrate Amazonian ancestral wisdom with modern scientific approaches, offering a transformative experience.',
    'about.approach': 'Our approach is based on respect, care, and personalized guidance, allowing each inner journey to be experienced with clarity, containment, and purpose.',
    'about.subtitle': 'Responsible use of Sacred Plants in a comfortable and safe environment.',
    
    // Maestros Section
    'maestros.title': 'Our Maestros',
    'maestros.sarita': 'Maestra Sarita',
    'maestros.richard': 'Maestro Richard',
    'maestros.denis': 'Maestro Denis',
    
    // Location Section
    'location.title': 'Location in Iquitos',
    'location.description': 'Casa del Jaguar is located in the city of Iquitos, capital of the Peruvian Amazon, which allows us to offer an authentic healing experience with all the comforts of an urban environment.',
    'location.benefits': 'Our location facilitates access, guarantees greater comfort, and provides us with all the necessary resources for your well-being.',
    
    // Ayahuasca Section
    'ayahuasca.title': 'What is Ayahuasca?',
    'ayahuasca.description': 'It is a Holistic Medicine, a divine agent of transformation that allows us to know the truth about who we are.',
    'ayahuasca.cta': 'Read More',
    
    // Buttons
    'button.aboutUs': 'About Us',
    'button.maestroDenis': 'Maestro Denis',
    
    // Navigation
    'nav.brand': 'Ayahuasca Iquitos',
    'nav.about': 'About Us',
    'nav.importantInfo': 'Important Information',
    'nav.info.ayahuasca': 'Ayahuasca',
    'nav.info.sanPedro': 'San Pedro (Huachuma)',
    'nav.info.sonido': 'Sound',
    'nav.info.hemiSync': 'Spirit and Medicine: Hemi-Sync in Ceremony',
    'nav.maestros': 'Shamanic Maestros',
    'nav.maestros.denis': 'Maestro Denis Montes',
    'nav.maestros.dan': 'Maestro Dan Reynolds',
    'nav.blog': 'Blog',
    'nav.blog.post1': 'My Awakening to the Divine',
    'nav.blog.post2': 'A transformative encounter',
    'nav.blog.post3': 'My first Ceremony with Maestro Dan',
    'nav.blog.post4': 'Benefits of the Ceremonies',
    'nav.contact': 'Contact Us',
    'nav.gallery': 'Photo Gallery',
    'nav.gallery.casa': 'Casa del Jaguar',
    'nav.gallery.maloca': 'Ceremonial Maloca',
    
    // Footer Section
    'footer.brandTitle': 'Ayahuasca Iquitos',
    'footer.brandSubtitle': 'Shamanic Healing Ceremonies',
    'footer.searchPlaceholder': 'Search...',
    'footer.aboutTitle': 'About',
    'footer.about': 'About',
    'footer.team': 'Team',
    'footer.history': 'History',
    'footer.careers': 'Careers',
    'footer.legalTitle': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    'footer.contact': 'Contact Us',
    'footer.socialTitle': 'Social',
    'footer.copyright': 'Casa del Jaguar. All rights reserved.',
    
    // Reviews Section
    'reviews.title': 'What our visitors say',
    'reviews.subtitle': 'Real experiences from people who have participated in our ceremonies',
    'reviews.note': 'Hover over reviews to read at your own pace',
    
    // Latest Posts Section
    'latestPosts.title': 'Latest Blog Articles',
    'latestPosts.subtitle': 'Discover the latest posts about ayahuasca, ceremonies and ancestral wisdom',
    'latestPosts.viewAll': 'View All Articles',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
