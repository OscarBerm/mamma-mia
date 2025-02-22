import React, { useState } from 'react';
import { Pizza, Menu, X, ShoppingCart, House, LogIn, CircleUserRound, FilePenLine} from 'lucide-react';


const Navbar = () => {
  const total = 25000;
  const token = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Pizza className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">Mamma Mia!</span>
            </div>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <a href="#" className="links flex flex-row items-center gap-1 text-md lg:text-lg border-2 border-orange-100 rounded-2xl p-2 pr-3 transition-colors">
                <House className="w-4 h-4 lg:w-5 lg:h-5" /> 
                Home</a>
              <a href="#" className={`links flex flex-row items-center gap-1 text-md lg:text-lg border-2 border-orange-100 rounded-2xl p-2 pr-3 transition-color ${!token ? 'hidden' : ''}`}>
                <CircleUserRound className="w-4 h-4 lg:w-5 lg:h-5" />
                Profile</a>
              <a href="#" className={`links flex flex-row items-center gap-1 text-md lg:text-lg border-2 border-orange-100 rounded-2xl p-2 pr-3 transition-color ${!token ? 'hidden' : ''}`}>
                <LogIn className="w-4 h-4 lg:w-5 lg:h-5" />
                Logout</a>
              <a href="#" className={`links flex flex-row items-center gap-1 text-md lg:text-lg border-2 border-orange-100 rounded-2xl p-2 pr-3 transition-color ${token ? 'hidden' : ''}`}>
              <CircleUserRound className="w-4 h-4 lg:w-5 lg:h-5" />
                Login</a>
              <a href="#" className={`links flex flex-row items-center gap-1 text-md lg:text-lg border-2 border-orange-100 rounded-2xl p-2 pr-3 transition-color ${token ? 'hidden' : ''}`}>
              <FilePenLine className="w-4 h-4 lg:w-5 lg:h-5" />
                Register</a>
              <a href="#" className="btn-primary flex items-center gap-2 bg-orange-500 text-md lg:text-lg border-2 lg:mx-2 border-orange-400 rounded-2xl py-2 pl-4 pr-5 hover:bg-orange-600 transition-colors">
                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                Total: ${total.toLocaleString()}</a>
            </div>

            <button 
              className="btn-primary md:hidden p-2 rounded-lg bg-orange-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col items-center space-y-4">
                <a href="#inicio" className="links-mobile text-gray-700 hover:text-orange-500 transition-colors">Inicio</a>
                <a href="#menu" className="links-mobile text-gray-700 hover:text-orange-500 transition-colors">Menú</a>
                <a href="#nosotros" className="links-mobile text-gray-700 hover:text-orange-500 transition-colors">Nosotros</a>
                <a href="#contacto" className="links-mobile text-gray-700 hover:text-orange-500 transition-colors">Contacto</a>
                <a href="#" className="btn-primary flex items-center gap-2 bg-orange-500 text-md border-2 lg:mx-2 border-orange-400 rounded-2xl py-2 pl-4 pr-5 hover:bg-orange-600 transition-colors">
                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                Total: ${total.toLocaleString()}</a>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;