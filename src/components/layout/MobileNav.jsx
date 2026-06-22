import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiGrid, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function MobileNav() {
  const location = useLocation();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border-light pb-safe">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? 'text-primary-600' : 'text-text-muted hover:text-text-primary'}`}>
          <FiHome className={`text-xl mb-1 ${isActive('/') ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/products" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/products') ? 'text-primary-600' : 'text-text-muted hover:text-text-primary'}`}>
          <FiGrid className={`text-xl mb-1 ${isActive('/products') ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Categories</span>
        </Link>
        <Link to="/wishlist" className={`relative flex flex-col items-center justify-center w-full h-full ${isActive('/wishlist') ? 'text-primary-600' : 'text-text-muted hover:text-text-primary'}`}>
          <FiHeart className={`text-xl mb-1 ${isActive('/wishlist') ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Wishlist</span>
          {wishlistCount > 0 && (
            <span className="absolute top-1 right-3 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Link>
        <Link to="/cart" className={`relative flex flex-col items-center justify-center w-full h-full ${isActive('/cart') ? 'text-primary-600' : 'text-text-muted hover:text-text-primary'}`}>
          <FiShoppingBag className={`text-xl mb-1 ${isActive('/cart') ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Bag</span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-3 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/profile" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/profile') ? 'text-primary-600' : 'text-text-muted hover:text-text-primary'}`}>
          <FiUser className={`text-xl mb-1 ${isActive('/profile') ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </div>
  );
}
