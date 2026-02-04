'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-primary/20 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stack all columns vertically */}
        {/* Tablet: 2 columns */}
        {/* Desktop: 4 columns with first one larger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-12">
          {/* Column 1 - Brand & Search */}
          <div className="space-y-4 lg:pr-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              {t('footer.brandTitle')}
            </h3>
            <p className="text-sm text-foreground/70">
              {t('footer.brandSubtitle')}
            </p>
            <div className="mt-4">
              <input
                type="text"
                placeholder={t('footer.searchPlaceholder')}
                className="w-full px-4 py-2 rounded-lg border border-primary/30 focus:outline-none focus:border-accent bg-background/50"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              {t('footer.aboutTitle')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#maestros" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.team')}
                </a>
              </li>
              <li>
                <a href="#history" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.history')}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              {t('footer.legalTitle')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              {t('footer.socialTitle')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>Twitter/X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-foreground/60">
            © 2009 {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
