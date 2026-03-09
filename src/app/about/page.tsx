import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutPageContent from '@/components/AboutPageContent';

const BASE_URL = 'https://ayahuascaiquitos.net';

export const metadata: Metadata = {
  title: 'About Us – Our Story & Mission',
  description:
    'Learn about Casa del Jaguar — authentic ayahuasca healing ceremonies in Iquitos, Peru since 2008. Meet our shamanic maestros Denis Montes and Dan Reynolds.',
  keywords: [
    'about casa del jaguar',
    'ayahuasca iquitos history',
    'maestro denis montes',
    'maestro dan reynolds',
    'shamanic healing peru',
    'plant medicine team',
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: `${BASE_URL}/about`,
    title: 'About Us – Casa del Jaguar | Ayahuasca Iquitos',
    description:
      'Learn about Casa del Jaguar — authentic ayahuasca healing ceremonies in Iquitos, Peru since 2008. Meet our shamanic maestros.',
    images: [
      {
        url: '/img/Ceremonial-Maloca-from-the-inside-1.webp',
        width: 1200,
        height: 800,
        alt: 'Ceremonial Maloca – Casa del Jaguar Iquitos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Casa del Jaguar | Ayahuasca Iquitos',
    description:
      'Authentic ayahuasca healing ceremonies in Iquitos, Peru since 2008. Meet Maestro Denis Montes and Maestro Dan Reynolds.',
    images: ['/img/Ceremonial-Maloca-from-the-inside-1.webp'],
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${BASE_URL}/about`,
  url: `${BASE_URL}/about`,
  name: 'About Us – Casa del Jaguar',
  description:
    'Casa del Jaguar offers authentic ayahuasca healing ceremonies in Iquitos, Peru since 2008 with experienced shamanic maestros.',
  isPartOf: {
    '@id': `${BASE_URL}/#website`,
  },
  about: {
    '@id': `${BASE_URL}/#organization`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AboutPageContent />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
