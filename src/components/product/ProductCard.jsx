import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiShoppingBag, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    // Default size and color for quick add
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative bg-surface rounded-xl overflow-hidden hover:shadow-card transition-all duration-300 border border-border-light h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-surface-alt">
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton"></div>
        )}
        
        {/* Images */}
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered && product.images?.[0] ? 'opacity-0' : 'opacity-100'} ${imageLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {product.images?.[0] && (
          <img 
            src={product.images[0]} 
            alt={`${product.name} alternate`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 scale-105 group-hover:scale-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* Badges */}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">
            {product.discount}% OFF
          </div>
        )}
        {product.tags?.includes('bestseller') && (
          <div className="absolute top-2 left-2 bg-warning text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider shadow-sm">
            BESTSELLER
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white text-text-primary hover:text-rose-500 transition-all shadow-sm z-10"
        >
          <FiHeart className={wishlisted ? "fill-rose-500 text-rose-500" : ""} />
        </button>

        {/* Hover Actions */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent transition-transform duration-300 flex justify-center gap-2 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-white text-surface-dark py-2 px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-primary-50 hover:text-primary-600 transition-colors"
          >
            <FiShoppingBag /> Add To Bag
          </button>
        </div>
      </Link>

      <div className="p-3 md:p-4 flex flex-col flex-1">
        <h3 className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">{product.brand}</h3>
        <Link to={`/product/${product.id}`} className="text-sm font-medium text-text-primary line-clamp-1 mb-1 hover:text-primary-600 transition-colors">
          {product.name}
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          <span className="flex items-center text-warning text-xs">
            {product.rating} <FiStar className="fill-warning ml-0.5" />
          </span>
          <span className="text-border-light text-xs">|</span>
          <span className="text-text-muted text-[10px]">({product.reviews})</span>
        </div>
        
        <div className="mt-auto flex items-baseline gap-2">
          <span className="font-bold text-text-primary text-sm md:text-base">₹{product.price.toLocaleString('en-IN')}</span>
          {product.discount > 0 && (
            <>
              <span className="text-text-muted text-xs line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-success text-[10px] font-bold">{product.discount}% OFF</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
