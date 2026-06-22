import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ProductListPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    let result = products;
    
    if (category) {
      result = result.filter(p => p.category === category || p.gender === category);
    }
    
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    
    setFilteredProducts(result);
  }, [category, query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold uppercase mb-6">
        {query ? `Search: ${query}` : category ? `${category} Fashion` : 'All Products'}
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-text-muted">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
