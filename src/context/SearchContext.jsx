import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { searchProducts } from '../data/products';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const searchResults = useMemo(() => {
    if (!query || query.trim().length === 0) return [];
    return searchProducts(query);
  }, [query]);

  const addToHistory = useCallback((term) => {
    if (!term || term.trim() === '') return;
    setSearchHistory(prev => {
      const filtered = prev.filter(t => t.toLowerCase() !== term.toLowerCase());
      return [term, ...filtered].slice(0, 10);
    });
  }, []);

  const clearHistory = useCallback(() => {
    setSearchHistory([]);
  }, []);

  return (
    <SearchContext.Provider value={{
      query, setQuery, searchResults, searchHistory, addToHistory, clearHistory, isSearchOpen, setIsSearchOpen
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
