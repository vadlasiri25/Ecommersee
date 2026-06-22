import { featuredBrands } from '../../data/brands';

export default function FeaturedBrands() {
  // Duplicate array for seamless infinite marquee
  const marqueeBrands = [...featuredBrands, ...featuredBrands, ...featuredBrands];

  return (
    <section className="py-12 bg-surface overflow-hidden border-y border-border-light">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-xl md:text-2xl font-display font-bold text-center tracking-tight text-text-primary uppercase">
          Featured Brands
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-8 md:gap-16 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {marqueeBrands.map((brand, i) => (
            <div key={`${brand.id}-${i}`} className="flex flex-col items-center">
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-3xl font-display font-black text-white shadow-soft mb-3 transition-transform hover:scale-110"
                style={{ backgroundColor: brand.color }}
              >
                {brand.logo}
              </div>
              <span className="text-sm font-semibold text-text-muted">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
