import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories';

export default function TopCategories() {
  const displayCategories = categories.slice(0, 8); // Show top 8

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-display font-bold text-center mb-8 tracking-tight uppercase">Shop By Category</h2>
        
        <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-8 pb-4 justify-start lg:justify-center px-2">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer w-20 md:w-28"
            >
              <Link to={`/products/${category.slug}`} className="w-full flex flex-col items-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-3 border-4 border-surface shadow-soft group-hover:shadow-card group-hover:border-primary-100 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-center text-text-primary group-hover:text-primary-600 transition-colors uppercase tracking-wide">{category.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
