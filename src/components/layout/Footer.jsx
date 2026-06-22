import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white/90 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Men's Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kids' Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beauty & Grooming</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white/90 uppercase tracking-wider">Help</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white/90 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white/90 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-surface-dark transition-all"><FiFacebook className="text-xl" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-surface-dark transition-all"><FiTwitter className="text-xl" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-surface-dark transition-all"><FiInstagram className="text-xl" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-surface-dark transition-all"><FiYoutube className="text-xl" /></a>
            </div>
            <h3 className="font-bold text-sm mb-3 text-white/90 uppercase tracking-wider">Secure Payments</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-white/10 px-2 py-1 rounded text-xs font-medium">VISA</span>
              <span className="bg-white/10 px-2 py-1 rounded text-xs font-medium">MasterCard</span>
              <span className="bg-white/10 px-2 py-1 rounded text-xs font-medium">UPI</span>
              <span className="bg-white/10 px-2 py-1 rounded text-xs font-medium">NetBanking</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-display font-black tracking-tight gradient-text">
            StyleBazaar
          </div>
          <p className="text-sm text-white/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} StyleBazaar E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
