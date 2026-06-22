import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch, FiHeart, FiShoppingBag, FiUser, FiMic } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useSearch } from '../../context/SearchContext';

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { setIsSearchOpen } = useSearch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-3' : 'bg-surface py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-2xl text-text-primary">
            <FiMenu />
          </button>
          <Link to="/" className="text-2xl font-display font-black tracking-tight gradient-text">
            StyleBazaar
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 ml-8 font-medium text-sm">
            <Link to="/products/men" className="hover:text-primary-600 transition-colors uppercase tracking-wider">Men</Link>
            <Link to="/products/women" className="hover:text-primary-600 transition-colors uppercase tracking-wider">Women</Link>
            <Link to="/products/kids" className="hover:text-primary-600 transition-colors uppercase tracking-wider">Kids</Link>
            <Link to="/products/home" className="hover:text-primary-600 transition-colors uppercase tracking-wider">Home & Living</Link>
            <Link to="/products/beauty" className="hover:text-primary-600 transition-colors uppercase tracking-wider">Beauty</Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center bg-surface-alt rounded-full px-4 py-2 w-80 lg:w-96 border border-border-light focus-within:border-primary-400 focus-within:bg-white transition-all shadow-inner group cursor-text" onClick={() => setIsSearchOpen(true)}>
            <FiSearch className="text-text-muted group-focus-within:text-primary-500 text-lg" />
            <input type="text" placeholder="Search for products, brands and more" className="bg-transparent border-none outline-none w-full px-3 text-sm" readOnly />
            <FiMic className="text-text-muted hover:text-primary-500 cursor-pointer" />
          </div>

          <button className="md:hidden text-xl text-text-primary" onClick={() => setIsSearchOpen(true)}>
            <FiSearch />
          </button>

          <div className="flex items-center gap-4 md:gap-6 ml-2">
            <Link to="/wishlist" className="hidden md:flex flex-col items-center text-text-primary hover:text-primary-600 relative group">
              <FiHeart className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-semibold mt-1">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="flex flex-col items-center text-text-primary hover:text-primary-600 relative group">
              <FiShoppingBag className="text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:block text-[10px] font-semibold mt-1">Bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/profile" className="hidden md:flex flex-col items-center text-text-primary hover:text-primary-600 group">
              <FiUser className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-semibold mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
