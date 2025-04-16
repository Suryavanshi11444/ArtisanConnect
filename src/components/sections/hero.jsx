import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/originals/33/af/b6/33afb6502f3609abfb0f0845b48ff23e.jpg"
          alt="Sea turtle swimming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-800/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-amber-400 mr-4"></div>
                <span className="text-amber-300 font-medium tracking-wider">ARTISAN CONNECT</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect Marine Life Through <span className="text-amber-300">Sustainable Tourism</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Join our community of responsible travelers and help conserve sea turtles while experiencing authentic local cultures and artisan traditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
                >
                  Explore Tours
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Feature Blocks */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 mt-12 lg:mt-0 lg:ml-12">
            {[
              {
                icon: '🐢',
                title: 'Turtle Conservation',
                desc: 'Participate in hands-on protection programs'
              },
              {
                icon: '✋',
                title: 'Artisan Workshops',
                desc: 'Learn traditional crafts from local masters'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly Stays',
                desc: 'Sustainable accommodations worldwide'
              },
              {
                icon: '🌎',
                title: 'Global Impact',
                
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video in Bottom Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-6 bottom-6 w-64 h-48 md:w-80 md:h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Art.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Water Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current text-blue-900"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current text-blue-800"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current text-blue-700"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;