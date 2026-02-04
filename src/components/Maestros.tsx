'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Maestros() {
  const { t } = useLanguage();

  const maestros = [
    { name: t('maestros.sarita'), key: 'sarita' },
    { name: t('maestros.richard'), key: 'richard' },
    { name: t('maestros.denis'), key: 'denis' },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          {t('maestros.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maestros.map((maestro) => (
            <div
              key={maestro.key}
              className="bg-background p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🧘</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                {maestro.name}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-primary hover:bg-accent text-background px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md">
            {t('button.aboutUs')}
          </button>
          <button className="bg-secondary hover:bg-primary text-background px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md">
            {t('button.maestroDenis')}
          </button>
        </div>
      </div>
    </section>
  );
}
