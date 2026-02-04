'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Ayahuasca() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          {t('ayahuasca.title')}
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
          {t('ayahuasca.description')}
        </p>
        
        <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="/img/jaguares-protegiendonos.webp"
            alt="Jaguares Protegiéndonos"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        
        <button className="bg-accent hover:bg-primary text-background px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
          {t('ayahuasca.cta')}
        </button>
      </div>
    </section>
  );
}
