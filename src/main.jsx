import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { SearchProvider } from './context/SearchContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <CartProvider>
        <WishlistProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </WishlistProvider>
      </CartProvider>
    </HashRouter>
  </StrictMode>,
)
