import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HeroSection = () => {
  const cursorRef = useRef(null);

  // Cursor motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden cursor-none">
      {/* White Background with Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-10"></div>

      {/* Custom Cursor with Rectangles */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
        }}
      >
        {/* Multiple rotating rectangle borders */}
        {[0, 1, 2].map((i) => (
          <motion.diva
            key={i}
            className="absolute border border-[#FF9933]/40 w-6 h-6 rounded-[4px]"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              ease: 'linear',
            }}
            style={{
              top: -i * 5,
              left: -i * 5,
              width: 24 + i * 10,
              height: 24 + i * 10,
            }}
          />
        ))}
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto py-24">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-[#FF9933]/10 px-4 py-2 rounded-full mb-6"
              >
                <span className="text-[#FF9933] text-sm font-medium tracking-wider">
                  PRESERVING CULTURAL HERITAGE
                </span>
              </motion.div>

              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Bridging <span className="text-[#FF9933]">Artisans</span> with <br />
                The Modern World
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Discover authentic craftsmanship through immersive experiences that
                connect you directly with India's most skilled artisans and their
                centuries-old traditions.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ y: -2, boxShadow: "0 6px 12px rgba(255, 153, 51, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#FF9933] hover:bg-[#E07F1E] text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all"
                >
                  Explore Artisans
                </motion.button>
                <motion.button
                  whileHover={{ y: -2, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border-2 border-gray-200 text-gray-700 hover:border-[#FF9933] font-medium py-3 px-8 rounded-lg shadow-sm transition-all"
                >
                  Learn Their Stories
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Artisan Showcase */}
          <div className="lg:w-1/3 grid grid-cols-2 gap-4">
            {[
              { image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=800&q=80", title: "Pottery" },
              { image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80", title: "Textiles" },
              { image: "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?auto=format&fit=crop&w=800&q=80", title: "Jewelry" },
              { image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80", title: "Woodwork" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Moving Decorative Elements */}
        <motion.div
          animate={{
            x: [0, -50, 0, 50, 0],
            y: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-12 bottom-12 hidden lg:block"
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-[#FF9933]/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border-2 border-[#FF9933]/20 rounded-full animate-spin-slow-reverse"></div>
            <div className="absolute inset-16 border-2 border-[#FF9933]/10 rounded-full animate-spin-slow"></div>
          </div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default HeroSection;