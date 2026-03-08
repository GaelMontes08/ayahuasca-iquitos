'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Ayahuasca() {
  const { t } = useLanguage();

  return (
    <section id="ayahuasca" className="py-24 px-4 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('ayahuasca.title')}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {t('ayahuasca.description')}
            </p>
            <button className="bg-accent hover:bg-primary text-background px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t('ayahuasca.cta')}
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/img/jaguares-protegiendonos.webp"
              alt="Jaguares Protegiéndonos"
              width={1200}
              height={800}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
