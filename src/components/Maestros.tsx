'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Maestros() {
  const { t } = useLanguage();

  const maestros = [
    {
      name: t('maestros.sarita'),
      key: 'sarita',
      video: 'https://iframe.mediadelivery.net/embed/427469/b9129de7-1310-4757-9be0-19e9de57da96?autoplay=false&loop=false&muted=false&preload=true&responsive=true'
    },
    {
      name: t('maestros.richard'),
      key: 'richard',
      video: 'https://iframe.mediadelivery.net/embed/427469/b1c3656a-ded2-4e03-bc58-35a0d6eeb2e4?autoplay=false&loop=false&muted=false&preload=true&responsive=true'
    },
  ];

  return (
    <section id="maestros" className="py-24 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('maestros.title')}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {maestros.map((maestro) => (
            <div
              key={maestro.key}
              className="bg-background rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-t-4 border-accent"
            >
              <div className="p-6">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={maestro.video}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ border: 'none' }}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-2xl font-semibold text-primary text-center mt-5">
                  {maestro.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-primary hover:bg-accent text-background px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            {t('button.aboutUs')}
          </button>
        </div>
      </div>
    </section>
  );
}
