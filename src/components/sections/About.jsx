import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-16 h-1 bg-amber-400 mr-4"></div>
          <span className="text-amber-600 font-medium">Artisan Connect</span>
          <div className="w-16 h-1 bg-amber-400 ml-4"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Preserving <span className="text-blue-600">Marine Life</span> Through Tourism
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how our sustainable travel experiences support turtle conservation while celebrating local artisan traditions.
        </p>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-12 grid-rows-5 gap-4 md:gap-6 min-h-[1000px]">
        
        {/* Block 1 - Logo (top-left) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl shadow-lg col-span-3 row-span-1 flex items-center justify-center p-4"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-center"
          >
            <div className="text-5xl text-amber-300">🐢</div>
            <p className="text-amber-100 font-medium mt-2 tracking-wider">ARTISAN CONNECT</p>
          </motion.div>
        </motion.div>

        {/* Block 2 - Vertical double height (below Block 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative rounded-xl overflow-hidden col-span-3 row-span-2 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1470&q=80" 
            alt="Turtle journey"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-2xl font-bold text-white">The</h3>
            <p className="text-3xl font-bold text-amber-300">Struggle</p>
            <p className="text-blue-100 mt-1">To The Sea</p>
            <div className="w-12 h-1 bg-amber-300 mt-3"></div>
          </div>
        </motion.div>

        {/* Block 3 - Main Banner (center, spans 3 rows) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden col-span-6 row-span-3 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 z-10"></div>
          <img 
            src="https://i.pinimg.com/originals/d4/e6/a5/d4e6a51bf4a291fcea3ffe0b180205f0.jpg" 
            alt="Turtle conservation"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className='flex flex-col items-center justify-center text-center p-6 '>
            <h2 className="text-5xl md:text-7xl font-bold text-center">
              <span className="text-white">PROTECT </span>
              <span className="text-amber-300">SEA TURTLES</span>
            </h2>
            <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deserunt aperiam nemo laudantium ipsam tenetur eaque incidunt quae est rerum nostrum velit architecto et quo esse repellendus, dignissimos cumque tempora repellat repudiandae delectus eligendi beatae maxime eos! Nam deleniti aut, aliquid quis tempora, incidunt sint, ea ipsam voluptas sed iusto?</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Block 4 - Short stats block (below Block 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-xl col-span-3 row-span-1 flex items-center justify-center p-6 border border-blue-100"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-700 mb-1">230k+</p>
            <p className="text-gray-600 font-medium">Successful</p>
            <p className="text-gray-600 font-medium">Conservations</p>
            <div className="flex justify-center mt-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="w-2 h-2 bg-amber-400 rounded-full mx-1"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Block 5 - Call to action (bottom middle row) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl col-span-6 row-span-1 flex items-center p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for an Ethical Adventure?</h3>
              <p className="text-amber-100">Join our next conservation expedition</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-md mt-4 md:mt-0"
            >
              Book Your Journey
            </motion.button>
          </div>
        </motion.div>

        {/* Block 6 - Cultural craft (new bottom-left) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative rounded-xl overflow-hidden col-span-3 row-span-1 group shadow-lg"
        >
          <img 
            src="https://i.etsystatic.com/20250217/r/il/90159d/3967148943/il_570xN.3967148943_3b9h.jpg"
            alt="Cultural craft"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
          <div className="absolute bottom-6 left-6 z-20">
            <h4 className="text-xl font-bold text-white">Artisan Craft</h4>
            <p className="text-amber-300 font-medium">Traditions Preserved</p>
            <div className="w-10 h-1 bg-amber-300 mt-2"></div>
          </div>
        </motion.div>

        {/* Block 7 - Tall right block (spans height of Block 1 + Block 8) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-xl col-span-3 row-span-2 flex flex-col justify-between p-8 shadow-lg"
        >
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-1 bg-amber-300 mr-3"></div>
              <h3 className="text-2xl font-bold text-white">Our Impact</h3>
            </div>
            <p className="text-blue-100 text-lg mb-4">
              Join 50,000+ conservation travelers making a real difference in marine ecosystems.
            </p>
            <ul className="space-y-3">
              {['Beach Cleanups', 'Nest Protection', 'Community Education'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-amber-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold py-3 px-6 rounded-lg text-center cursor-pointer transition-colors shadow-md"
          >
            Read Success Stories
          </motion.div>
        </motion.div>

        {/* Block 8 - Tall image block (below Block 7) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative rounded-xl overflow-hidden col-span-3 row-span-3 group shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1526&q=80" 
            alt="Turtle hatchlings"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <p className="text-blue-100 text-lg">Hatchling Protection</p>
            <p className="text-amber-300 text-3xl font-bold">Success Rate +37%</p>
            <div className="w-16 h-1 bg-amber-300 mt-3"></div>
          </div>
        </motion.div>

        {/* Block 9 - Scenic Spot (bottom center-left) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative rounded-xl overflow-hidden col-span-3 row-span-1 group shadow-lg"
        >
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
            alt="Scenic Tourism Spot"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
          <div className="absolute bottom-6 left-6 z-20">
            <h4 className="text-xl font-bold text-white">Hidden Gem</h4>
            <p className="text-amber-300 font-medium">Explore Majestic Views</p>
            <div className="w-10 h-1 bg-amber-300 mt-2"></div>
          </div>
        </motion.div>

        {/* Block 10 - Handicraft info block (bottom-right) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-xl shadow-xl col-span-3 row-span-1 p-6 flex flex-col items-center justify-center border border-blue-100"
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-blue-800 mb-2">Handcrafted Heritage</h4>
          <p className="text-gray-600 text-center mb-4">Support local artisans through sustainable tourism experiences.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 font-medium flex items-center"
          >
            Discover Crafts <span className="ml-1">→</span>
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;