'use client';

import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
}

interface Props {
  articles: Article[];
}

export default function ArticleTicker({ articles }: Props) {
  if (articles.length === 0) return null;

  // Duplicate content for a seamless infinite loop
  const doubled = [...articles, ...articles];

  return (
    <div className="bg-[#f0e8dc] border-t border-primary/20 overflow-hidden">
      <div className="flex items-stretch">
        {/* Static label */}
        <div className="shrink-0 flex items-center bg-primary px-4 py-1.5 text-white text-xs font-bold uppercase tracking-widest z-10">
          Blog
        </div>
        {/* Scrolling track */}
        <div className="overflow-hidden flex-1 relative">
          <div className="flex whitespace-nowrap animate-ticker">
            {doubled.map((article, i) => (
              <Link
                key={i}
                href={`/blog/${article.slug}`}
                className="inline-flex items-center px-5 py-1.5 text-sm text-foreground/75 hover:text-accent transition-colors"
              >
                {article.title}
                <span className="mx-4 text-primary/35 text-xs select-none">◆</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
