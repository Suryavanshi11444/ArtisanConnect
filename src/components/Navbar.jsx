import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
    });
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <div className="flex items-center">
              <span className="text-3xl">🐢</span>
              <span className="ml-3 text-xl font-bold text-white hidden sm:block">
                Artisan<span className="text-amber-400">Connect</span>
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium relative group"
              >
                Tours
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium relative group"
              >
                Conservation
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium relative group"
              >
                Artisans
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative ml-4"
              >
                <FiSearch className="text-white h-5 w-5 cursor-pointer hover:text-amber-300" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors flex items-center"
              >
                <FiUser className="mr-2" /> Sign In
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-900/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-blue-800 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-800 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tours
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-800 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Conservation
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-800 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Artisans
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-800 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <div className="flex items-center px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-blue-800 text-white placeholder-blue-300 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-r-md">
                <FiSearch />
              </button>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium mt-2 flex items-center justify-center">
              <FiUser className="mr-2" /> Sign In
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;