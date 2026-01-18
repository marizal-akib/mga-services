import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 relative h-10 md:h-12 lg:h-15 w-[200px] md:w-[240px] lg:w-[280px] overflow-hidden">
              <img 
                src="/assests/logos/white_logo.png" 
                alt="MGA Services" 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
                style={{ 
                  height: '140%',
                  objectFit: 'cover', 
                  objectPosition: 'left center',
                  filter: 'brightness(1.15) contrast(1.05)'
                }}
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Established in 2002, MGA provides trusted airport assistance services across Bangladesh, the Middle East, and the USA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Arrival Assistance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Departure Greet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Fast Track</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lounge Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for travel insights and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-900 border border-gray-800 text-white px-4 py-2 w-full text-sm focus:outline-none focus:border-gold-500"
              />
              <button className="bg-gold-500 text-white px-4 py-2 hover:bg-gold-600 transition-colors">
                OK
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2002-2026 MGA Services. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;