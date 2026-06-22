import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestSellers } from '../../data/products';

export default function BestSellers() {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight text-text-primary uppercase flex justify-center items-center gap-3 mb-3">
            <span className="text-warning">🏆</span> Best Sellers
          </h2>
          <p className="text-text-muted">Our most loved and highly rated products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link to="/products?tag=bestseller" className="px-10 py-3 bg-surface-dark text-white font-bold rounded-full hover:bg-primary-600 transition-colors uppercase tracking-wider text-sm shadow-card">
            Explore All Best Sellers
          </Link>
        </div>
      </div>
    </section>
  );
}
