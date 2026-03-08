'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('location.title')}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {t('location.description')}
            </p>
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {t('location.benefits')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
