'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/img/casa-del-jaguar-pared.webp"
        alt="Casa del Jaguar"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/80"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight">
          {t('hero.title')}
        </h1>

        <div className="h-1 w-32 bg-accent mx-auto"></div>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow">
          {t('hero.description')}
        </p>

        <p className="text-2xl md:text-3xl font-semibold text-accent drop-shadow">
          {t('hero.tagline')}
        </p>

        <button className="mt-4 bg-accent hover:bg-white hover:text-primary text-foreground px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
          {t('hero.cta')}
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
