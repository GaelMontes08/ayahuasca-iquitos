'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

const content = {
  es: {
    nav: { home: 'Inicio', about: 'Acerca de Nosotros' },
    hero: {
      title: 'Acerca de Nosotros',
      subtitle: 'Donde la sabiduría ancestral se fusiona con la ciencia moderna',
    },
    welcome: {
      title: 'Bienvenidos a la Casa del Jaguar',
      intro: 'Donde la sabiduría ancestral se fusiona con la ciencia moderna en la búsqueda del bienestar físico, mental y emocional.',
      description: 'En la Casa del Jaguar, nos dedicamos a brindar ayuda con las plantas maestras a personas que enfrentan problemas de salud mental como depresión, ansiedad, adicciones y heridas emocionales.',
      healing: 'En la Casa del Jaguar ayudamos a sanar mente, cuerpo y espíritu con la ayuda de las Plantas Maestras.',
    },
    stats: [
      { value: '2008', label: 'Fundado en', sublabel: 'Más de 15 años de experiencia' },
      { value: '∞', label: 'Mente · Cuerpo · Espíritu', sublabel: 'Sanación holística integral' },
      { value: 'IQT', label: 'Iquitos, Perú', sublabel: 'Corazón de la Amazonía' },
    ],
    story: {
      title: 'Nuestra Historia',
      p1: 'Desde el 2008, hemos estado trabajando en el mundo de la medicina vegetal, en particular con la medicina sagrada Ayahuasca, en ceremonias de sanación.',
      p2: 'Nuestro camino comenzó con una profunda investigación por el potencial curativo de esta planta maestra (Ayahuasca) y, desde entonces, hemos trabajado incansablemente para integrarla en prácticas terapéuticas efectivas.',
    },
    approach: {
      title: 'Nuestra Filosofía',
      p1: 'Nosotros no vemos a las ceremonias de sanación chamánica como simples atracciones turísticas — realizamos nuestro trabajo con el máximo respeto y seriedad.',
      p2: 'Para nosotros, las plantas maestras Ayahuasca y la Huachuma no son solo plantas: son una poderosa herramienta para la transformación interior y la sanación.',
      p3: 'Nuestras ceremonias chamánicas se llevan a cabo con mucho respeto y sobre todo brindando todo el apoyo necesario a los pasajeros (participantes); honramos lo sagrado de la ceremonia y la medicina, de esta manera la maloca ceremonial se transforma en un espacio de sanación profunda.',
    },
    science: {
      quote: 'Sabemos que la sanación es un proceso, por eso combinamos la sabiduría de las plantas maestras con los conocimientos de la ciencia moderna.',
    },
    mission: {
      label: 'Nuestra Misión',
      title: 'Simple pero profunda',
      text: 'Ayudar a las personas a reconectarse con su verdadero ser, sanar traumas del pasado y liberar todo su potencial.',
    },
    team: {
      title: 'Nuestro Equipo',
      subtitle: 'Guías con décadas de experiencia en medicina vegetal amazónica',
      richard: {
        name: 'Maestro Richard',
        role: 'Maestro Chamán',
        bio: 'Con más de una década de experiencia , el Maestro Denis guía a los participantes con profunda sabiduría, cuidado personalizado y un profundo conocimiento de las plantas sagradas.',
      },
      sarita: {
        name: 'Maestra Sarita',
        role: 'Maestra de Ceremonias',
        bio: 'Maestra Sarita, madre de Richard, es una respetada curandera shipibo-conibo con una vasta trayectoria en el arte ancestral del ayahuasca, dedicada a acompañar y sanar a quienes buscan bienestar y claridad.',
      },
      denis: {
        name: 'Maestro Denis',
        role: 'Maestro Chamán',
        bio: 'Con más de una década de experiencia , el Maestro Denis guía a los participantes con profunda sabiduría, cuidado personalizado y un profundo conocimiento de las plantas sagradas.',
      },
      dan: {
        name: 'Maestro Dan',
        role: 'Maestro de Ceremonias',
        bio: 'Maestro Dan, es un maestro de ceremonias con una vasta trayectoria en el arte ancestral del ayahuasca, dedicada a acompañar y sanar a quienes buscan bienestar y claridad.',
      },
    },
    cta: {
      title: '¿Listo para comenzar tu viaje?',
      text: 'Ya sea que busques alivio para la ansiedad persistente, luches por superar una adicción o simplemente anheles mayor claridad y propósito en la vida, estamos aquí para apoyarte en cada paso del camino.',
      facebook: 'Visítanos en Facebook',
      whatsapp: 'Contáctanos por WhatsApp',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About Us' },
    hero: {
      title: 'About Us',
      subtitle: 'Where ancestral wisdom merges with modern science',
    },
    welcome: {
      title: 'Welcome to Casa del Jaguar',
      intro: 'Where ancestral wisdom merges with modern science in the pursuit of physical, mental, and emotional well-being.',
      description: 'At Casa del Jaguar, we are dedicated to helping people through master plants who face mental health challenges such as depression, anxiety, addictions, and emotional wounds.',
      healing: 'At Casa del Jaguar we help heal mind, body, and spirit with the help of Master Plants.',
    },
    stats: [
      { value: '2008', label: 'Founded in', sublabel: 'Over 15 years of experience' },
      { value: '∞', label: 'Mind · Body · Spirit', sublabel: 'Integral holistic healing' },
      { value: 'IQT', label: 'Iquitos, Peru', sublabel: 'Heart of the Amazon' },
    ],
    story: {
      title: 'Our Story',
      p1: 'Since 2008, we have been working in the world of plant medicine, particularly with the sacred medicine Ayahuasca, in healing ceremonies.',
      p2: 'Our journey began with a deep investigation into the healing potential of this master plant (Ayahuasca) and, since then, we have worked tirelessly to integrate it into effective therapeutic practices.',
    },
    approach: {
      title: 'Our Philosophy',
      p1: 'We do not see shamanic healing ceremonies as mere tourist attractions — we carry out our work with the utmost respect and seriousness.',
      p2: 'For us, the master plants Ayahuasca and Huachuma are not just plants: they are powerful tools for inner transformation and healing.',
      p3: 'Our shamanic ceremonies are held with great respect and, above all, providing all the necessary support to the passengers (participants); we honor the sacredness of the ceremony and the medicine, transforming the ceremonial maloca into a space of deep healing.',
    },
    science: {
      quote: 'We know that healing is a process, which is why we combine the wisdom of master plants with the knowledge of modern science.',
    },
    mission: {
      label: 'Our Mission',
      title: 'Simple yet profound',
      text: 'To help people reconnect with their true selves, heal past traumas, and unlock their full potential.',
    },
    team: {
      title: 'Our Team',
      subtitle: 'Guides shipibo-conibo with decades of experience in ayahuasca and healing',
      richard: {
        name: 'Maestro Richard',
        role: 'Shipibo-Conibo Master',
        bio: 'Maestro Richard, son of Maestra Sarita, is a Shipibo-Conibo master with decades of experience guiding ayahuasca ceremonies and helping people in their process of healing and transformation.',
      },
      sarita: {
        name: 'Maestra Sarita',
        role: 'Shipibo-Conibo Master',
        bio: 'Maestra Sarita, mother of Richard, is a respected Shipibo-Conibo healer with a vast background in the ancestral art of ayahuasca, dedicated to supporting and healing those seeking well-being and clarity.',
      },
      denis: {
        name: 'Maestro Denis',
        role: 'Shaman Master',
        bio: 'With more than a decade of experience, Maestro Denis guides participants with deep wisdom, personalized care, and a profound knowledge of sacred plants.',
      },
      dan: {
        name: 'Maestro Dan',
        role: 'Ceremony Master',
        bio: 'Maestro Dan was the founder of Casa del Jaguar and has been a ceremony master with a vast background in the ancestral art of ayahuasca, supporting and healing those seeking well-being and clarity.',
      },
    },
    cta: {
      title: 'Ready to Begin Your Journey?',
      text: 'Whether you seek relief from persistent anxiety, struggle to overcome an addiction, or simply long for greater clarity and purpose in life, we are here to support you every step of the way.',
      facebook: 'Visit Us on Facebook',
      whatsapp: 'Contact Us on WhatsApp',
    },
  },
};

export default function AboutPageContent() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/img/Ceremonial-Maloca-from-the-inside-1.webp"
          alt="Maloca Ceremonial – Casa del Jaguar"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-foreground/20" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/60">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  {c.nav.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold" aria-current="page">
                {c.nav.about}
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            {c.hero.title}
          </h1>
          <p className="mt-3 text-lg text-accent font-medium drop-shadow">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {c.welcome.title}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium italic">
            {c.welcome.intro}
          </p>
          <p className="text-lg text-foreground/75 leading-relaxed">
            {c.welcome.description}
          </p>
          <p className="text-xl font-semibold text-secondary">
            {c.welcome.healing}
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 px-4 bg-primary text-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {c.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-lg font-semibold text-white">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story (Denis) ── */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accent">
                {c.story.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {c.story.title}
              </h2>
              <div className="h-1 w-16 bg-accent" />
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">{c.story.p1}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{c.story.p2}</p>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/img/shaman-denis-montes-pequeno.webp"
                alt="Maestro Denis Montes – Curandero Chamán"
                width={600}
                height={750}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">{c.team.denis.name}</p>
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mt-1">
                  {c.team.denis.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Philosophy (Dan) ── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/img/Dan1.webp"
                alt="Maestro Dan Reynolds – Ceremony Master"
                width={600}
                height={750}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">{c.team.dan.name}</p>
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mt-1">
                  {c.team.dan.role}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accent">
                {c.approach.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {c.approach.title}
              </h2>
              <div className="h-1 w-16 bg-accent" />
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">{c.approach.p1}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{c.approach.p2}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{c.approach.p3}</p>
          </div>
        </div>
      </section>

      {/* ── Science + Wisdom banner ── */}
      <section className="py-16 px-4 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-10 h-10 text-accent mx-auto mb-4 opacity-70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic font-medium">
            &ldquo;{c.science.quote}&rdquo;
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-accent border border-accent/40 px-4 py-1 rounded-full mb-6">
            {c.mission.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">
            {c.mission.title}
          </h2>
          <div className="bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/30 rounded-2xl p-10 shadow-lg">
            <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed font-medium">
              {c.mission.text}
            </p>
          </div>
        </div>
      </section>

      {/* ── Team cards ── */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {c.team.title}
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">{c.team.subtitle}</p>
            <div className="h-1 w-20 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Denis */}
            <div className="bg-background rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-t-4 border-accent">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/img/shaman-denis-montes-pequeno.webp"
                  alt={c.team.richard.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{c.team.richard.name}</h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 mb-3">
                  {c.team.richard.role}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">{c.team.richard.bio}</p>
              </div>
            </div>

            {/* Dan */}
            <div className="bg-background rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-t-4 border-accent">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/img/Dan1.webp"
                  alt={c.team.sarita.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{c.team.sarita.name}</h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 mb-3">
                  {c.team.sarita.role}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">{c.team.sarita.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{c.cta.title}</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">
            {c.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="https://www.facebook.com/ayahuascaiquitos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1464d0] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {c.cta.facebook}
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=51917811803&text=Hola+Ayahuasca+Iquitos%0D%0AMe+gustaría+saber+más+información+sobre+las+ceremonias&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {c.cta.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
