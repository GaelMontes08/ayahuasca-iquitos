'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {t('about.approach')}
            </p>
          </div>
        </div>

        <p className="text-xl font-semibold text-center text-secondary mt-12">
          {t('about.subtitle')}
        </p>
      </div>
    </section>
  );
}
