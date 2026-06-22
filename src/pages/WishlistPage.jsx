import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-text-muted mb-8">Save items that you like in your wishlist.</p>
        <Link to="/products" className="px-8 py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors uppercase tracking-wider">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-display font-bold uppercase mb-8">My Wishlist ({wishlistItems.length} Items)</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
