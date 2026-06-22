import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiClock, FiTrendingUp } from 'react-icons/fi';
import { useSearch } from '../../context/SearchContext';

export default function SearchOverlay() {
  const { query, setQuery, searchResults, searchHistory, addToHistory, clearHistory, isSearchOpen, setIsSearchOpen } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      document.body.classList.add('modal-open');
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      addToHistory(query);
      setIsSearchOpen(false);
      navigate(`/products?q=${encodeURIComponent(query)}`);
    }
  };

  const handleHistoryClick = (term) => {
    setQuery(term);
    addToHistory(term);
    setIsSearchOpen(false);
    navigate(`/products?q=${encodeURIComponent(term)}`);
  };

  const handleProductClick = (id) => {
    if (query.trim()) addToHistory(query);
    setIsSearchOpen(false);
    navigate(`/product/${id}`);
  };

  const trendingSearches = ['Sneakers', 'Kurtas', 'Watches', 'Jeans', 'T-Shirts'];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-surface flex flex-col h-[100dvh]"
        >
          <div className="border-b border-border p-4 shadow-sm">
            <div className="container mx-auto flex items-center gap-3">
              <form onSubmit={handleSearch} className="flex-1 flex items-center bg-surface-alt rounded-lg px-4 py-3 border border-border-light focus-within:border-primary-500 transition-colors">
                <FiSearch className="text-text-muted text-xl mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for products, brands and more..."
                  className="bg-transparent border-none outline-none w-full text-base"
                />
                {query && (
                  <button type="button" onClick={() => setQuery('')} className="p-1 text-text-muted hover:text-text-primary">
                    <FiX />
                  </button>
                )}
              </form>
              <button onClick={() => setIsSearchOpen(false)} className="p-2 text-text-primary font-medium hover:text-rose-500 transition-colors">
                Cancel
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-surface-alt/30">
            <div className="container mx-auto max-w-3xl">
              {query.trim().length === 0 ? (
                <>
                  {searchHistory.length > 0 && (
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-text-primary flex items-center gap-2"><FiClock /> Recent Searches</h3>
                        <button onClick={clearHistory} className="text-xs text-primary-600 font-medium hover:underline">Clear All</button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((term, i) => (
                          <button key={i} onClick={() => handleHistoryClick(term)} className="px-4 py-2 bg-surface border border-border rounded-full text-sm hover:border-primary-300 hover:text-primary-600 transition-colors">
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-text-primary flex items-center gap-2 mb-4"><FiTrendingUp /> Trending Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((term, i) => (
                        <button key={i} onClick={() => handleHistoryClick(term)} className="px-4 py-2 bg-surface border border-border rounded-full text-sm hover:border-primary-300 hover:text-primary-600 transition-colors flex items-center gap-1">
                          <FiSearch className="text-text-muted" /> {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <h3 className="font-medium text-text-muted mb-4">Search Results ({searchResults.length})</h3>
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.slice(0, 8).map(product => (
                        <div 
                          key={product.id} 
                          onClick={() => handleProductClick(product.id)}
                          className="flex items-center gap-4 p-3 bg-surface rounded-xl border border-border hover:border-primary-300 hover:shadow-soft cursor-pointer transition-all"
                        >
                          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                          <div className="flex-1">
                            <h4 className="font-medium text-text-primary line-clamp-1">{product.name}</h4>
                            <p className="text-sm text-text-muted uppercase text-[10px] tracking-wider">{product.brand}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                            {product.discount > 0 && <p className="text-xs text-success font-medium">{product.discount}% OFF</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FiSearch className="text-4xl text-border mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-text-primary mb-1">No results found</h3>
                      <p className="text-text-muted text-sm">Try searching for something else like "shirt" or "nike"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
