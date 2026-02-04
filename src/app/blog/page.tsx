import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Casa del Jaguar',
  description: 'Artículos sobre ayahuasca, ceremonias y sanación espiritual',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
  );
}
