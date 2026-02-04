import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

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
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Casa del Jaguar`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-accent transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-foreground/60">
            <span className="text-sm uppercase font-semibold text-accent">
              {post.language === 'es' ? 'Español' : 'English'}
            </span>
            {post.date && (
              <span className="text-sm">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
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

        {/* Back to blog link */}
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
  );
}
