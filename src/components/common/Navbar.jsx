import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-blue-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-blue-900/90 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-3xl">🐢</span>
                <span className="ml-3 text-xl font-bold text-white hidden sm:block">
                  Artisan<span className="text-amber-400">Connect</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 justify-between ml-8">
              <div className="flex items-center space-x-4 sm:space-x-6">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/places', label: 'Places' },
                  { to: '/conservation', label: 'Conservation' },
                  { to: '/artisans', label: 'Artisans' },
                  { to: '/about', label: 'About' },
                ].map(({ to, label }) => (
                  <motion.div key={label} whileHover={{ y: -2 }}>
                    <Link
                      to={to}
                      className="text-white hover:text-amber-300 px-2 sm:px-3 py-2 text-sm font-medium relative group"
                    >
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  {searchOpen ? (
                    <motion.form
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      onSubmit={handleSearch}
                      className="flex"
                    >
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="bg-blue-800 text-white placeholder-blue-300 rounded-l-md px-3 py-1 text-sm w-32 sm:w-40 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-r-md"
                      >
                        <FiSearch />
                      </button>
                    </motion.form>
                  ) : (
                    <FiSearch 
                      className="text-white h-5 w-5 cursor-pointer hover:text-amber-300" 
                      onClick={() => setSearchOpen(true)}
                    />
                  )}
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium shadow-md transition-colors flex items-center"
                >
                  <FiUser className="mr-1 sm:mr-2" /> 
                  <span className="hidden sm:inline">Sign In</span>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-amber-300 focus:outline-none"
              >
                <FiSearch className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 focus:outline-none"
              >
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden my-2"
            >
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-blue-800 text-white placeholder-blue-300 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-amber-400"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-r-md"
                >
                  <FiSearch />
                </button>
              </form>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-blue-900/95 backdrop-blur-sm"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/places', label: 'Places' },
                  { to: '/conservation', label: 'Conservation' },
                  { to: '/artisans', label: 'Artisans' },
                  { to: '/about', label: 'About' },
                ].map(({ to, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-blue-800 hover:text-amber-300 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-md text-base font-medium mt-2 flex items-center justify-center"
                >
                  <FiUser className="mr-2" /> Sign In
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer div to prevent content from being hidden behind navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;