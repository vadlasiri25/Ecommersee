import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Your Bag is Empty</h1>
        <p className="text-text-muted mb-8">There is nothing in your bag. Let's add some items.</p>
        <Link to="/products" className="px-8 py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors uppercase tracking-wider">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-display font-bold uppercase mb-8">Shopping Bag ({cartItems.length} Items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.cartId} className="flex gap-4 p-4 bg-surface rounded-xl border border-border">
              <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-lg bg-surface-alt" />
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold uppercase text-text-muted">{item.brand}</h3>
                    <h2 className="font-medium text-text-primary">{item.name}</h2>
                  </div>
                  <button onClick={() => removeFromCart(item.cartId)} className="text-text-muted hover:text-rose-500 transition-colors p-2">
                    <FiTrash2 />
                  </button>
                </div>
                
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt">-</button>
                    <span className="font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt">+</button>
                  </div>
                  <div className="font-bold text-lg">₹{(item.price * item.quantity).toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full lg:w-1/3">
          <div className="bg-surface p-6 rounded-xl border border-border sticky top-24">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-border pb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-text-muted">Subtotal</span>
              <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-muted">Delivery</span>
              <span className="font-medium text-success">FREE</span>
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold text-xl">₹{cartTotal.toLocaleString()}</span>
            </div>
            <button className="w-full mt-6 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors uppercase tracking-wider shadow-glow-primary">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
