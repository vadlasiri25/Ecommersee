import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getFlashSale } from '../../data/products';

export default function FlashSale() {
  const flashSaleProducts = getFlashSale().slice(0, 4);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 25, seconds: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => num.toString().padStart(2, '0');

  return (
    <section className="py-12 md:py-16 bg-surface-alt relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight text-text-primary uppercase flex items-center gap-2 mb-2">
              Flash Sale <span className="text-3xl text-rose-500 animate-pulse">⚡</span>
            </h2>
            <p className="text-text-muted text-sm md:text-base">Grab these deals before they're gone!</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-border-light">
            <span className="text-sm font-bold uppercase tracking-wider text-text-secondary mr-2">Ends In</span>
            <div className="flex gap-2 text-xl font-display font-bold text-rose-500">
              <span className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center">{formatTime(timeLeft.hours)}</span>
              <span className="mt-1">:</span>
              <span className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center">{formatTime(timeLeft.minutes)}</span>
              <span className="mt-1">:</span>
              <span className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center">{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {flashSaleProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link to="/products?tag=flash-sale" className="px-8 py-3 bg-transparent border-2 border-text-primary text-text-primary font-bold rounded-full hover:bg-text-primary hover:text-white transition-colors uppercase tracking-wider text-sm">
            View All Deals
          </Link>
        </div>
      </div>
    </section>
  );
}
