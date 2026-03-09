import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL = 'https://ayahuascaiquitos.net';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const cleanDescription = post.excerpt
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/[`#[\]]/g, '')
    .substring(0, 160);

  const ogImages = post.image
    ? [{ url: post.image, width: 1200, height: 800, alt: post.title }]
    : [{ url: '/img/casa-del-jaguar-pared.webp', width: 1200, height: 800, alt: post.title }];

  return {
    title: post.title,
    description: cleanDescription,
    keywords: ['ayahuasca', 'medicina ancestral', 'iquitos', 'peru', post.title],
    authors: [{ name: 'Casa del Jaguar', url: BASE_URL }],
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      locale: post.language === 'es' ? 'es_PE' : 'en_US',
      url: `${BASE_URL}/blog/${slug}`,
      title: post.title,
      description: cleanDescription,
      siteName: 'Casa del Jaguar – Ayahuasca Iquitos',
      images: ogImages,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [`${BASE_URL}/#organization`],
      section: 'Ayahuasca',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: cleanDescription,
      images: post.image ? [post.image] : ['/img/casa-del-jaguar-pared.webp'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt.substring(0, 200),
    ...(post.image && { image: `${BASE_URL}${post.image}` }),
    author: {
      '@type': 'Organization',
      name: 'Casa del Jaguar',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Casa del Jaguar',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo-dawn-3.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    inLanguage: post.language === 'es' ? 'es-PE' : 'en',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary/10 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground/60">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-accent transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-primary font-semibold line-clamp-1" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-foreground/60">
              <span className="text-sm uppercase font-semibold text-accent">
                {post.language === 'es' ? 'Español' : 'English'}
              </span>
              {post.date && (
                <time
                  dateTime={post.date}
                  className="text-sm"
                >
                  {new Date(post.date).toLocaleDateString(
                    post.language === 'es' ? 'es-PE' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </time>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg prose-primary max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold text-primary mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-semibold text-secondary mt-6 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-foreground/80 leading-relaxed mb-4">{children}</p>,
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt || ''}
                    className="rounded-lg shadow-lg my-8 w-full"
                    loading="lazy"
                  />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-accent hover:text-primary underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/80">{children}</ol>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/70 my-6">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
