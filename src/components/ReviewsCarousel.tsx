'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl?: string;
}

export default function ReviewsCarousel() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Candy Beatriz Rios Cahuaza',
      rating: 5,
      text: "La experiencia en la Casa del Jaguar es absolutamente imperdible. Desde el inicio, la atención es de primera, con un ambiente acogedor y armonioso. La ceremonia de Ayahuasca es guiada con profundo conocimiento y sabiduría, brindando una experiencia transformadora. Cada detalle, desde La preparación hasta la explicación, contribuye a hacer de esta sesión un momento único e inolvidable. Sin duda, una experiencia que recomiendo a quienes buscan una conexión auténtica y significativa.",
      date: 'Hace 6 meses',
      avatarUrl: '/img/avatars/candy-beatriz-rios-cahuaza.webp',
    },
    {
      id: 2,
      name: 'Diego Reuch Borbor',
      rating: 5,
      text: "Una experiencia única en el lugar. Buena atención, preparación y el guiado en ceremonia es sencillamente personalizado, que se adapta a la situación de uno. Como producto de la potente conexión que tuve gracias a la madre ayahuasca y al maestro chaman pude expandir mis límites mentales y espirituales para forjar la transcendente consciencia que hoy me ayuda a tener una mejor calidad de vida. Definitivamente recomendaría visitar la Casa del Jaguar a toda persona que desee entender mejor su realidad y expandir su nivel de conciencia.",
      date: 'Hace 10 meses',
      avatarUrl: '/img/avatars/diego-reuch-borbor.webp',
    },
    {
      id: 3,
      name: 'Samuel Ballantine',
      rating: 5,
      text: "This is a place for people who truly want to heal. The shaman is truly dedicated he is. The kind of man who will sit and talk to you all day if you so desire it. He holds great insight and will be able to guide you through your ceremonies and help you understand what you are seeing and processing. Couldn’t recommend this place any more.",
      date: 'Hace 4 meses',
    },
    {
      id: 4,
      name: 'Jacopo Foglia',
      rating: 5,
      text: "L’esperienza con lo sciamano Denis è stata davvero sorprendente! Avevo già partecipato ad una cerimonia di ayahuasca prima di quel momento, ma questa è stata davvero interessante ed intima. Ha guidato me ed il mio amico in un viaggio interiore indescrivibile, aiutandoci grazie a diverse ore di chiacchierata prima della cerimonia, spiegandoci il suo approccio con la medicina e spiegandoci come gestire la cerimonia nelle sue diverse fasi. Sicuramente parteciperò ad una nuova quando tornerò ad Iquitos.",
      date: 'Hace 3 meses',
    },
    {
      id: 5,
      name: 'Stella Palomares',
      rating: 5,
      text: "Una experiencia gratificante y llena de sabiduría con la acogedora atención del Sr Jaguar y su linda familia; sentimos mucha comodidad y linda energía. Fuimos bien guiados bajo el poder de la madre Ayahuasca ",
      date: 'Hace 1 año',
      avatarUrl: '/img/avatars/stella-palomares.webp',
    },
  ];

  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused || isTouching) return;

    let animationFrame: number;
    let lastTime = Date.now();
    
    const scroll = () => {
      const now = Date.now();
      const delta = now - lastTime;
      
      if (delta > 16 && scrollContainer) { // ~60fps
        scrollContainer.scrollLeft += 0.5;
        
        // Calculate the width of one set of reviews
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        
        // Reset when we've scrolled through one complete set
        if (scrollContainer.scrollLeft >= singleSetWidth) {
          scrollContainer.scrollLeft = 0;
        }
        
        lastTime = now;
      }
      
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isTouching]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          {t('reviews.title')}
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          {t('reviews.subtitle')}
        </p>

        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="shrink-0 w-80 md:w-96 bg-background border border-primary/20 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar or Initials */}
                  <div className="shrink-0">
                    {review.avatarUrl ? (
                      <Image
                        src={review.avatarUrl}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {getInitials(review.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Name, Date, and Stars */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base text-primary truncate">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-foreground/60 mt-1">{review.date}</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed text-sm line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm text-foreground/60">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-foreground/60 mt-8">
          {t('reviews.note')}
        </p>
      </div>
    </section>
  );
}
