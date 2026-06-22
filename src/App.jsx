import { Routes, Route } from 'react-router-dom'
import { useSearch } from './context/SearchContext'
import Navbar from './components/layout/Navbar'
import MobileNav from './components/layout/MobileNav'
import Footer from './components/layout/Footer'
import SearchOverlay from './components/layout/SearchOverlay'
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'

function App() {
  const { isSearchOpen } = useSearch()

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {isSearchOpen && <SearchOverlay />}

      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:category" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}

export default App
