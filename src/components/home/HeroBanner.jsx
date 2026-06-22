import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroBanners } from '../../data/banners';

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[500px] lg:h-[600px] overflow-hidden bg-surface-dark">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className={`absolute inset-0 bg-gradient-to-r ${heroBanners[activeIndex].bgGradient} opacity-60 mix-blend-multiply z-10`} />
          <img 
            src={heroBanners[activeIndex].image} 
            alt={heroBanners[activeIndex].title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white/90 text-sm md:text-lg font-medium tracking-widest uppercase mb-2 md:mb-4"
            >
              {heroBanners[activeIndex].subtitle}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white leading-tight mb-6 md:mb-8 drop-shadow-xl tracking-tighter"
            >
              {heroBanners[activeIndex].title}
            </motion.h1>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white text-surface-dark px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-glow-primary hover:scale-105 transform duration-300 uppercase tracking-wider"
            >
              {heroBanners[activeIndex].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
        {heroBanners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
