'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { US, ES } from 'country-flag-icons/react/3x2';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="bg-primary text-background px-3 py-2 rounded-full hover:bg-accent transition-colors duration-300 shadow-md flex items-center gap-2"
      aria-label="Toggle language"
    >
      {language === 'es' ? (
        <US className="w-6 h-4" title="Switch to English" />
      ) : (
        <ES className="w-6 h-4" title="Cambiar a Español" />
      )}
    </button>
  );
}
