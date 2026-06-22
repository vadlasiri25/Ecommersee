import { useRef } from 'react';
import { brandsToExplore, brandsToBrowse, brandsInSpotlight } from '../../data/brands';
import { FiArrowRight } from 'react-icons/fi';

const BrandRow = ({ title, brands }) => {
  const scrollRef = useRef(null);

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary tracking-tight">{title}</h3>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 group">
          View All <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-6 pb-4 no-scrollbar snap-x snap-mandatory"
      >
        {brands.map((brand) => (
          <div 
            key={brand.id} 
            className={`w-[260px] md:w-[320px] flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-gradient-to-br ${brand.bgGradient} relative group cursor-pointer shadow-sm hover:shadow-card transition-all duration-300 border border-white/50`}
          >
            <div className="p-6 md:p-8 h-48 md:h-56 flex flex-col justify-between relative z-10">
              <div>
                <h4 className="text-2xl font-display font-black text-surface-dark mb-1 tracking-tight">{brand.name}</h4>
                <p className="text-sm font-medium text-surface-dark/70 uppercase tracking-wider">{brand.tagline}</p>
              </div>
              <div>
                <span className="inline-block bg-white text-surface-dark font-bold text-sm px-3 py-1 rounded-full shadow-sm group-hover:scale-105 transition-transform">
                  {brand.discount}
                </span>
              </div>
            </div>
            
            <img 
              src={brand.image} 
              alt={brand.name} 
              className="absolute bottom-0 right-0 w-3/5 h-full object-cover object-left mix-blend-multiply opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BrandsSection() {
  return (
    <section className="py-12 md:py-16 bg-surface border-t border-border-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight text-text-primary uppercase mb-3">Premium Brands</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Explore our curated collection of top lifestyle, fashion, and beauty brands offering the best quality and latest trends.</p>
        </div>
        
        <BrandRow title="Brands To Explore" brands={brandsToExplore} />
        <BrandRow title="Brands To Browse" brands={brandsToBrowse} />
        <BrandRow title="Brands In Spotlight" brands={brandsInSpotlight} />
      </div>
    </section>
  );
}
