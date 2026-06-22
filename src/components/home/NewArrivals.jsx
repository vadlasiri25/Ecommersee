import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getNewArrivals } from '../../data/products';

export default function NewArrivals() {
  const newArrivals = getNewArrivals().slice(0, 8); // Top 8 new arrivals

  return (
    <section className="py-12 md:py-16 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-border-light pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-text-primary uppercase flex items-center gap-2">
              New Arrivals <span className="text-primary-500">✨</span>
            </h2>
            <p className="text-text-muted mt-2">Fresh styles straight from the runway</p>
          </div>
          
          <Link 
            to="/products?tag=new" 
            className="hidden md:inline-block border-b-2 border-text-primary text-text-primary font-bold hover:text-primary-600 hover:border-primary-600 transition-colors uppercase tracking-wider text-sm pb-1"
          >
            Shop All New
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/products?tag=new" 
            className="inline-block border border-border text-text-primary font-bold px-6 py-2 rounded-full hover:bg-surface-dark hover:text-white transition-colors uppercase tracking-wider text-xs"
          >
            View All New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
}
