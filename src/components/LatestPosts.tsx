'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  language: 'es' | 'en';
  date?: string;
}

export default function LatestPosts() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blog/latest')
      .then(res => res.json())
      .then(data => {
        // Filter by current language or show all
        const filteredPosts = data.filter((post: BlogPost) => post.language === language);
        setPosts(filteredPosts.slice(0, 10));
      })
      .catch(err => console.error('Error loading posts:', err));
  }, [language]);

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('latestPosts.title')}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('latestPosts.subtitle')}
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <svg 
                    className="w-6 h-6 text-accent flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-foreground/70 text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    {post.language === 'es' ? 'Español' : 'English'}
                  </span>
                  {post.date && (
                    <span className="text-foreground/60">
                      {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-background px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t('latestPosts.viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
