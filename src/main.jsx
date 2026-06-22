import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { SearchProvider } from './context/SearchContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
