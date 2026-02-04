'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-secondary/20 to-background px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          {t('hero.title')}
        </h1>
        
        <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="/img/casa-del-jaguar-pared.webp"
            alt="Casa del Jaguar"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="h-1 w-32 bg-accent mx-auto my-8"></div>
        
        <p className="text-2xl md:text-3xl font-semibold text-secondary">
          {t('hero.tagline')}
        </p>
        
        <button className="mt-8 bg-primary hover:bg-accent text-background px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
}
