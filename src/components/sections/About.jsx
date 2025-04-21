import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaSearchLocation, FaUsers, FaPalette } from 'react-icons/fa';

const AboutSection = () => {
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.setAttribute('controls', 'controls');
    }
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-10"></div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-[#FF9933]/10 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-[#FF9933]/10 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.div className="inline-flex items-center justify-center mb-4" whileHover={{ scale: 1.05 }}>
            <div className="w-16 h-1 bg-[#FF9933] mr-4"></div>
            <span className="text-[#FF9933] font-medium tracking-wider">ARTISAN CONNECT</span>
            <div className="w-16 h-1 bg-[#FF9933] ml-4"></div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preserving <span className="text-[#FF9933]">Cultural Heritage</span> Through Connection
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our platform bridges artisans with global audiences while celebrating traditional craftsmanship.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artisan Spotlight */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
            <div className="relative h-48 overflow-hidden">
              <img loading="lazy" src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1470&q=80" alt="Artisan at work" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Meet Our Artisans</h3>
                <p className="text-[#FF9933] font-medium">Handcrafted Excellence</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Each artisan brings generations of skill and tradition to their craft, creating unique pieces with cultural significance.
              </p>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[#FF9933] font-medium flex items-center">
                Explore Artisan Stories <span className="ml-2">→</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#FF9933] to-[#E07F1E] rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
            <div className="space-y-6">
              {[
                { icon: <FaHandsHelping className="text-2xl" />, value: '500+', label: 'Skilled Artisans' },
                { icon: <FaSearchLocation className="text-2xl" />, value: '100+', label: 'Cultural Sites' },
                { icon: <FaUsers className="text-2xl" />, value: '10K+', label: 'Community Members' }
              ].map((item, idx) => (
                <motion.div key={idx} className="flex items-center gap-4" whileHover={{ x: 5 }}>
                  <div className="bg-white/20 p-3 rounded-full">{item.icon}</div>
                  <div>
                    <p className="text-3xl font-bold">{item.value}</p>
                    <p className="text-white/90">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.95 }} className="mt-8 w-full py-3 bg-white/10 border border-white/30 rounded-lg font-medium">
              Join Our Movement
            </motion.button>
          </motion.div>

          {/* Cultural Heritage */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                <div className="bg-[#FF9933]/10 p-3 rounded-full">
                  <FaPalette className="text-[#FF9933] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cultural Heritage</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We document and preserve traditional techniques while helping artisans adapt to modern markets.
              </p>
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <img loading="lazy" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1470&q=80" alt="Traditional craft" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">Madhubani Painting • Bihar, India</p>
                </div>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full py-3 bg-[#FF9933] hover:bg-[#E07F1E] text-white rounded-lg font-medium shadow-md">
                Explore Traditional Crafts
              </motion.button>
            </div>
          </motion.div>

          {/* Video Component */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 md:col-span-2">
            <div className="relative aspect-video bg-gray-100">
              <video
                ref={videoRef}
                src="/backhill.mp4"
                preload="none"
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1470&q=80"
                aria-label="Artisan Stories Video"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-[#FF9933] rounded-full flex items-center justify-center cursor-pointer shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlay}
                  aria-label="Play video"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                    <path d="M5 3L19 12L5 21V3Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artisan Stories</h3>
              <p className="text-gray-600 mb-4">Watch how our platform transforms lives by connecting artisans with global audiences.</p>
              <div className="flex items-center gap-2 text-sm text-[#FF9933] font-medium cursor-pointer" onClick={handlePlay}>
                <span>Play Video</span><span>→</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF9933]">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=880&q=80" alt="Artisan testimonial" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Meera Devi</h4>
                  <p className="text-sm text-[#FF9933]">Madhubani Artist</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"This platform helped me reach international clients while preserving our ancestral art form. My income has tripled and I can now train young artists in our village."</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FF9933" stroke="#FF9933">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <button className="text-sm text-[#FF9933] font-medium hover:underline">Read Full Story →</button>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#FF9933] to-[#E07F1E] rounded-xl shadow-lg p-8 text-white md:col-span-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Connect with Artisans?</h3>
                <p className="text-white/90">Join our community to discover authentic craftsmanship.</p>
              </div>
              <div className="flex gap-4">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: 'white', color: '#FF9933' }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-white text-[#FF9933] rounded-lg font-bold shadow-md">
                  Explore Artisans
                </motion.button>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-white/10 border border-white/30 rounded-lg font-medium">
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default AboutSection;

