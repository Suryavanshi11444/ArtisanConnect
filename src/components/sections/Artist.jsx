import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintBrush, FaPalette, FaHands, FaChevronRight, FaChevronLeft, FaMonument } from 'react-icons/fa';

const artisans = [
  {
    id: 1,
    type: "Pottery Maker",
    description: "Crafting timeless clay pieces using ancient techniques passed through generations",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <FaHands className="text-amber-500" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    type: "Miniature Painter",
    description: "Preserving the delicate art of intricate miniature paintings with natural pigments",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <FaPaintBrush className="text-amber-500" />,
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200"
  },
  {
    id: 3,
    type: "Textile Weaver",
    description: "Creating sustainable fabrics with traditional handloom methods",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <FaHands className="text-amber-500" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 4,
    type: "Metal Sculptor",
    description: "Transforming raw metals into expressive contemporary artworks",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <FaMonument className="text-amber-500" />,
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200"
  },
  {
    id: 5,
    type: "Tribal Artist",
    description: "Keeping indigenous art forms alive through authentic storytelling",
    image: "https://images.unsplash.com/photo-1583209814689-c0e6e4fe7b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <FaPalette className="text-amber-500" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  }
];

const ArtisanHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % artisans.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextArtisan = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % artisans.length);
  };

  const prevArtisan = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + artisans.length) % artisans.length);
  };

  return (
    <section className="relative h-screen bg-blue-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="#4b5563" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center px-6 py-12">
        {/* Left content */}
        <div className="lg:w-1/2 z-10 lg:pr-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Discover India's <span className="text-amber-500">Artisan</span> Heritage
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            Explore the diverse world of traditional craftsmanship that forms the backbone of our cultural identity.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['Pottery', 'Textiles', 'Painting', 'Sculpture', 'Jewelry'].map((craft, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-amber-50 transition-colors"
              >
                {craft}
              </span>
            ))}
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all flex items-center gap-2"
          >
            Explore Art Forms
            <FaChevronRight className="text-sm" />
          </motion.button>
        </div>

        {/* Right slider */}
        <div className="lg:w-1/2 relative h-full flex items-center justify-center mt-8 lg:mt-0">
          <AnimatePresence custom={direction}>
            <motion.div
              key={artisans[currentIndex].id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full max-w-md"
            >
              <div className="relative">
                {/* Artisan image */}
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={artisans[currentIndex].image} 
                    alt={artisans[currentIndex].type}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Artisan type card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`absolute -bottom-6 -right-6 ${artisans[currentIndex].bgColor} p-6 rounded-xl shadow-lg w-64 border ${artisans[currentIndex].borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {artisans[currentIndex].icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{artisans[currentIndex].type}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{artisans[currentIndex].description}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={prevArtisan}
            className="absolute left-0 lg:-left-12 p-3 bg-white rounded-full shadow-md hover:bg-amber-50 transition-colors z-20 border border-gray-200"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
            onClick={nextArtisan}
            className="absolute right-0 lg:-right-12 p-3 bg-white rounded-full shadow-md hover:bg-amber-50 transition-colors z-20 border border-gray-200"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {artisans.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-amber-500 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanHero;