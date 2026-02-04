# Casa del Jaguar - Ayahuasca Iquitos

A bilingual (Spanish/English) website for Casa del Jaguar, an ayahuasca ceremonies business in Iquitos, Peru.

## 🌿 Features

- **Bilingual Support**: Toggle between Spanish and English with a single click
- **Warm Design**: Earth tones (browns, greens, golds) inspired by nature
- **Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with warm color scheme
│   ├── layout.tsx         # Root layout with LanguageProvider
│   └── page.tsx           # Homepage
├── components/
│   ├── About.tsx          # About section
│   ├── Ayahuasca.tsx      # Ayahuasca information section
│   ├── Hero.tsx           # Hero/welcome section
│   ├── LanguageToggle.tsx # Language switcher button
│   ├── Location.tsx       # Location information
│   └── Maestros.tsx       # Maestros section
└── contexts/
    └── LanguageContext.tsx # i18n context for translations
```

## 🎨 Color Palette

- **Background**: `#faf8f5` - Warm off-white
- **Foreground**: `#3e2723` - Deep brown
- **Primary**: `#8b6f47` - Earth brown
- **Secondary**: `#5a7d5a` - Forest green
- **Accent**: `#d4af37` - Gold

## 🌍 Adding Translations

Edit the `translations` object in `src/contexts/LanguageContext.tsx`:

```typescript
const translations = {
  es: {
    'key': 'Texto en español',
  },
  en: {
    'key': 'Text in English',
  },
};
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

