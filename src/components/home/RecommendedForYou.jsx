import { useState } from 'react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function RecommendedForYou() {
  const [visibleCount, setVisibleCount] = useState(8);
  const recommended = products.slice(10, 30); // Random slice for demo

  return (
    <section className="py-12 md:py-16 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-text-primary uppercase flex justify-center items-center gap-2 mb-3">
            Recommended For You <span className="text-primary-500">💎</span>
          </h2>
          <p className="text-text-muted">Handpicked styles based on your preferences</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {recommended.slice(0, visibleCount).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index % 8} />
          ))}
        </div>
        
        {visibleCount < recommended.length && (
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="px-10 py-3 bg-white border border-border text-text-primary font-bold rounded-full hover:border-primary-500 hover:text-primary-600 transition-colors uppercase tracking-wider text-sm shadow-sm"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
