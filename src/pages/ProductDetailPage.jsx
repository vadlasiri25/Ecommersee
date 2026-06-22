import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  if (!product) return <div className="text-center py-20 text-xl">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-alt border border-border">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">{product.brand}</h2>
          <h1 className="text-2xl md:text-4xl font-display font-black text-text-primary mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-surface-alt px-3 py-1 rounded-full border border-border">
              <span className="font-bold text-sm mr-1">{product.rating}</span>
              <span className="text-warning">★</span>
              <span className="text-text-muted text-xs ml-2 border-l border-border pl-2">{product.reviews} Ratings</span>
            </div>
          </div>
          
          <div className="border-y border-border py-4 mb-6">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-3xl font-black text-text-primary">₹{product.price.toLocaleString()}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-xl text-text-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-lg font-bold text-success">{product.discount}% OFF</span>
                </>
              )}
            </div>
            <p className="text-success font-medium text-sm">inclusive of all taxes</p>
          </div>
          
          <div className="mb-8">
            <button 
              onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
              className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors uppercase tracking-wider shadow-glow-primary"
            >
              Add To Bag
            </button>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-2">Product Details</h3>
            <p className="text-text-secondary leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
