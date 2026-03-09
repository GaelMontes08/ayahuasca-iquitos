import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';

const BASE_URL = 'https://ayahuascaiquitos.net';

export const metadata: Metadata = {
  title: 'Blog – Artículos sobre Ayahuasca y Medicina Ancestral',
  description:
    'Artículos, investigaciones y experiencias sobre ayahuasca, medicina ancestral y sanación espiritual en Iquitos, Perú. Ciencia, espiritualidad y transformación.',
  keywords: [
    'ayahuasca blog',
    'medicina ancestral',
    'ayahuasca investigación',
    'sanación espiritual',
    'psicodélicos',
    'ceremonia ayahuasca',
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: `${BASE_URL}/blog`,
    title: 'Blog – Artículos sobre Ayahuasca y Medicina Ancestral',
    description:
      'Artículos, investigaciones y experiencias sobre ayahuasca, medicina ancestral y sanación espiritual.',
    images: [
      {
        url: '/img/casa-del-jaguar-pared.webp',
        width: 1200,
        height: 800,
        alt: 'Blog – Casa del Jaguar Ayahuasca Iquitos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Artículos sobre Ayahuasca y Medicina Ancestral',
    description:
      'Artículos, investigaciones y experiencias sobre ayahuasca, medicina ancestral y sanación espiritual.',
    images: ['/img/casa-del-jaguar-pared.webp'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${BASE_URL}/blog`,
    },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-foreground/60">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-semibold" aria-current="page">Blog</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            Blog
          </h1>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Artículos, investigaciones y experiencias sobre ayahuasca y medicina ancestral
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                    {post.language === 'es' ? 'Español' : 'English'}
                  </span>
                  <h2 className="text-xl font-bold text-primary mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-accent font-semibold text-sm">
                    Leer más
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
