'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          {t('about.title')}
        </h2>
        
        <div className="space-y-8">
          <div className="bg-secondary/10 p-8 rounded-lg">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              {t('about.description')}
            </p>
          </div>
          
          <div className="h-1 w-32 bg-accent mx-auto my-8"></div>
          
          <div className="bg-primary/10 p-8 rounded-lg">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              {t('about.approach')}
            </p>
          </div>
          
          <p className="text-xl font-semibold text-center text-secondary mt-12">
            {t('about.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
