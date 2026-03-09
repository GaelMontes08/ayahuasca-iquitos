import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://ayahuascaiquitos.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Casa del Jaguar – Ceremonias de Ayahuasca en Iquitos, Perú",
    template: "%s | Casa del Jaguar",
  },
  description:
    "Ceremonias de ayahuasca auténticas en Iquitos, Perú. Sanación emocional, crecimiento espiritual y expansión de conciencia con maestros curanderos con décadas de experiencia.",
  keywords: [
    "ayahuasca",
    "iquitos",
    "peru",
    "ceremonia ayahuasca",
    "ayahuasca ceremony",
    "plant medicine",
    "medicina ancestral",
    "sanación espiritual",
    "curandero",
    "casa del jaguar",
    "retiro ayahuasca",
    "ayahuasca retreat",
    "amazonia",
    "madre ayahuasca",
  ],
  authors: [{ name: "Casa del Jaguar", url: BASE_URL }],
  creator: "Casa del Jaguar",
  publisher: "Casa del Jaguar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 150,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "Casa del Jaguar – Ayahuasca Iquitos",
    title: "Casa del Jaguar – Ceremonias de Ayahuasca en Iquitos, Perú",
    description:
      "Ceremonias de ayahuasca auténticas en Iquitos, Perú. Sanación emocional, crecimiento espiritual y expansión de conciencia con maestros curanderos.",
    images: [
      {
        url: "/img/casa-del-jaguar-pared.webp",
        width: 1200,
        height: 800,
        alt: "Casa del Jaguar – Ayahuasca Iquitos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa del Jaguar – Ceremonias de Ayahuasca en Iquitos, Perú",
    description:
      "Ceremonias de ayahuasca auténticas en Iquitos, Perú. Sanación emocional y expansión espiritual con maestros curanderos.",
    images: ["/img/casa-del-jaguar-pared.webp"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/logo-dawn-3.png",
    apple: "/logo-dawn-3.png",
    shortcut: "/logo-dawn-3.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristAttraction"],
  "@id": `${BASE_URL}/#organization`,
  name: "Casa del Jaguar",
  alternateName: "Ayahuasca Iquitos – Casa del Jaguar",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo-dawn-3.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/img/casa-del-jaguar-pared.webp`,
  description:
    "Ceremonias de ayahuasca auténticas en Iquitos, Perú. Sanación emocional, crecimiento espiritual y expansión de conciencia con maestros curanderos con décadas de experiencia.",
  telephone: "+51917811803",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Iquitos",
    addressRegion: "Loreto",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-3.7491",
    longitude: "-73.2538",
  },
  priceRange: "$$",
  currenciesAccepted: "USD, PEN",
  foundingDate: "2009",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Candy Beatriz Rios Cahuaza" },
      reviewBody:
        "La experiencia en la Casa del Jaguar es absolutamente imperdible. La ceremonia de Ayahuasca es guiada con profundo conocimiento y sabiduría, brindando una experiencia transformadora.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Samuel Ballantine" },
      reviewBody:
        "This is a place for people who truly want to heal. The shaman is truly dedicated. Couldn't recommend this place any more.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Casa del Jaguar – Ayahuasca Iquitos",
  description:
    "Ceremonias de ayahuasca auténticas en Iquitos, Perú con maestros curanderos experimentados.",
  inLanguage: ["es-PE", "en"],
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
