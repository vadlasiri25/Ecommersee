import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from '../product/ProductCard';
import { getTrending } from '../../data/products';

export default function TrendingCollection() {
  const trendingProducts = getTrending().slice(0, 8);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-text-primary uppercase flex items-center gap-2">
              Trending Now <span className="text-2xl">🔥</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-rose-500 mt-2 rounded-full"></div>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt hover:text-primary-600 transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt hover:text-primary-600 transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {trendingProducts.map((product, index) => (
            <div key={product.id} className="w-[200px] md:w-[260px] flex-shrink-0 snap-start">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
