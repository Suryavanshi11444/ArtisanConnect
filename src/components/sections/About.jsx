// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutSection = () => {
//   return (
//     <div className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4 md:px-8 max-w-7xl mx-auto">
//       {/* Heading Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <div className="inline-flex items-center justify-center mb-4">
//           <div className="w-16 h-1 bg-amber-400 mr-4"></div>
//           <span className="text-amber-600 font-medium">Artisan Connect</span>
//           <div className="w-16 h-1 bg-amber-400 ml-4"></div>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Preserving <span className="text-blue-600">Marine Life</span> Through Tourism
//         </h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Discover how our sustainable travel experiences support turtle conservation while celebrating local artisan traditions.
//         </p>
//       </motion.div>

//       {/* Grid Container */}
//       <div className="grid grid-cols-12 grid-rows-5 gap-4 md:gap-6 min-h-[1000px]">
        
//         {/* Block 1 - Logo (top-left) */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl shadow-lg col-span-3 row-span-1 flex items-center justify-center p-4"
//         >
//           <motion.div 
//             animate={{ rotate: [0, 5, -5, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//             className="text-center"
//           >
//             <div className="text-5xl text-amber-300">🐢</div>
//             <p className="text-amber-100 font-medium mt-2 tracking-wider">ARTISAN CONNECT</p>
//           </motion.div>
//         </motion.div>

//         {/* Block 2 - Vertical double height (below Block 1) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="relative rounded-xl overflow-hidden col-span-3 row-span-2 group"
//         >
//           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
//           <img 
//             src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1470&q=80" 
//             alt="Turtle journey"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute bottom-6 left-6 z-20">
//             <h3 className="text-2xl font-bold text-white">The</h3>
//             <p className="text-3xl font-bold text-amber-300">Struggle</p>
//             <p className="text-blue-100 mt-1">To The Sea</p>
//             <div className="w-12 h-1 bg-amber-300 mt-3"></div>
//           </div>
//         </motion.div>

//         {/* Block 3 - Main Banner (center, spans 3 rows) */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="relative rounded-xl overflow-hidden col-span-6 row-span-3 group"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 z-10"></div>
//           <img 
//             src="https://i.pinimg.com/originals/d4/e6/a5/d4e6a51bf4a291fcea3ffe0b180205f0.jpg" 
//             alt="Turtle conservation"
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="absolute inset-0 flex items-center justify-center z-20"
//           >
//             <div className='flex flex-col items-center justify-center text-center p-6 '>
//             <h2 className="text-5xl md:text-7xl font-bold text-center">
//               <span className="text-white">PROTECT </span>
//               <span className="text-amber-300">SEA TURTLES</span>
//             </h2>
//             <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deserunt aperiam nemo laudantium ipsam tenetur eaque incidunt quae est rerum nostrum velit architecto et quo esse repellendus, dignissimos cumque tempora repellat repudiandae delectus eligendi beatae maxime eos! Nam deleniti aut, aliquid quis tempora, incidunt sint, ea ipsam voluptas sed iusto?</p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Block 4 - Short stats block (below Block 2) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="bg-white rounded-xl shadow-xl col-span-3 row-span-1 flex items-center justify-center p-6 border border-blue-100"
//         >
//           <div className="text-center">
//             <p className="text-4xl font-bold text-blue-700 mb-1">230k+</p>
//             <p className="text-gray-600 font-medium">Successful</p>
//             <p className="text-gray-600 font-medium">Conservations</p>
//             <div className="flex justify-center mt-3">
//               {[1, 2, 3].map((i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ scale: [1, 1.3, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
//                   className="w-2 h-2 bg-amber-400 rounded-full mx-1"
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Block 5 - Call to action (bottom middle row) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl col-span-6 row-span-1 flex items-center p-8 shadow-lg"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between w-full">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for an Ethical Adventure?</h3>
//               <p className="text-amber-100">Join our next conservation expedition</p>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-md mt-4 md:mt-0"
//             >
//               Book Your Journey
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Block 6 - Cultural craft (new bottom-left) */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="relative rounded-xl overflow-hidden col-span-3 row-span-1 group shadow-lg"
//         >
//           <img 
//             src="https://i.etsystatic.com/20250217/r/il/90159d/3967148943/il_570xN.3967148943_3b9h.jpg"
//             alt="Cultural craft"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
//           <div className="absolute bottom-6 left-6 z-20">
//             <h4 className="text-xl font-bold text-white">Artisan Craft</h4>
//             <p className="text-amber-300 font-medium">Traditions Preserved</p>
//             <div className="w-10 h-1 bg-amber-300 mt-2"></div>
//           </div>
//         </motion.div>

//         {/* Block 7 - Tall right block (spans height of Block 1 + Block 8) */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-xl col-span-3 row-span-2 flex flex-col justify-between p-8 shadow-lg"
//         >
//           <div>
//             <div className="flex items-center mb-6">
//               <div className="w-8 h-1 bg-amber-300 mr-3"></div>
//               <h3 className="text-2xl font-bold text-white">Our Impact</h3>
//             </div>
//             <p className="text-blue-100 text-lg mb-4">
//               Join 50,000+ conservation travelers making a real difference in marine ecosystems.
//             </p>
//             <ul className="space-y-3">
//               {['Beach Cleanups', 'Nest Protection', 'Community Education'].map((item, index) => (
//                 <li key={index} className="flex items-center">
//                   <svg className="w-5 h-5 text-amber-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-blue-100">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <motion.div 
//             whileHover={{ scale: 1.03 }}
//             className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold py-3 px-6 rounded-lg text-center cursor-pointer transition-colors shadow-md"
//           >
//             Read Success Stories
//           </motion.div>
//         </motion.div>

//         {/* Block 8 - Tall image block (below Block 7) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//           className="relative rounded-xl overflow-hidden col-span-3 row-span-3 group shadow-lg"
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent z-10"></div>
//           <img 
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1526&q=80" 
//             alt="Turtle hatchlings"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute bottom-8 left-8 z-20">
//             <p className="text-blue-100 text-lg">Hatchling Protection</p>
//             <p className="text-amber-300 text-3xl font-bold">Success Rate +37%</p>
//             <div className="w-16 h-1 bg-amber-300 mt-3"></div>
//           </div>
//         </motion.div>

//         {/* Block 9 - Scenic Spot (bottom center-left) */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="relative rounded-xl overflow-hidden col-span-3 row-span-1 group shadow-lg"
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
//             alt="Scenic Tourism Spot"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
//           <div className="absolute bottom-6 left-6 z-20">
//             <h4 className="text-xl font-bold text-white">Hidden Gem</h4>
//             <p className="text-amber-300 font-medium">Explore Majestic Views</p>
//             <div className="w-10 h-1 bg-amber-300 mt-2"></div>
//           </div>
//         </motion.div>

//         {/* Block 10 - Handicraft info block (bottom-right) */}
//         <motion.div 
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.9 }}
//           className="bg-white rounded-xl shadow-xl col-span-3 row-span-1 p-6 flex flex-col items-center justify-center border border-blue-100"
//         >
//           <div className="bg-blue-100 p-4 rounded-full mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-blue-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={1.5}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//             </svg>
//           </div>
//           <h4 className="text-xl font-bold text-blue-800 mb-2">Handcrafted Heritage</h4>
//           <p className="text-gray-600 text-center mb-4">Support local artisans through sustainable tourism experiences.</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="text-blue-600 font-medium flex items-center"
//           >
//             Discover Crafts <span className="ml-1">→</span>
//           </motion.button>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHands, FaMapMarkedAlt, FaPalette, FaSearchLocation, FaUsers } from 'react-icons/fa';

const ImpactSection = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
    }
  };

  const features = [
    { 
      id: 1, 
      value: '500+', 
      label: 'Skilled Artisans', 
      icon: <FaHands className="text-amber-500 text-3xl" />,
      description: 'Traditional craftspeople preserving heritage techniques'
    },
    { 
      id: 2, 
      value: '100+', 
      label: 'Hidden Gems', 
      icon: <FaSearchLocation className="text-amber-500 text-3xl" />,
      description: 'Lesser-known cultural sites curated by our community'
    },
    { 
      id: 3, 
      value: '3,000+', 
      label: 'Opportunities', 
      icon: <FaMapMarkedAlt className="text-amber-500 text-3xl" />,
      description: 'Jobs as local guides, teachers, and cultural ambassadors'
    },
    { 
      id: 4, 
      value: '10K+', 
      label: 'Community', 
      icon: <FaUsers className="text-amber-500 text-3xl" />,
      description: 'Travelers and culture enthusiasts connecting with artisans'
    },
  ];

  const artisanSpotlight = {
    name: "Meera Devi",
    craft: "Madhubani Painting",
    location: "Bihar, India",
    years: "15+ years experience",
    quote: "This platform helped me reach international clients while preserving our ancestral art form.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white text-gray-800">
      {/* Blue accent elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 z-20"></div>
      <div className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-blue-100 opacity-50"></div>
      <div className="absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-amber-100 opacity-30"></div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="artisan-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#3B82F6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#artisan-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-blue-600">Empowering</span> <span className="text-amber-500">Artisans</span>, <span className="text-blue-600">Discovering</span> <span className="text-amber-500">Heritage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our platform bridges tradition and opportunity, connecting skilled artisans with global audiences while uncovering cultural treasures.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Features grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: feature.id * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-3xl font-bold mb-1 text-gray-900">{feature.value}</h3>
                    <h4 className="text-lg font-semibold mb-2 text-blue-600">{feature.label}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200 col-span-2"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                      <FaPalette className="text-white text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Join Our Artisan Network</h3>
                    <p className="text-gray-600 mb-4">Showcase your craft, connect with clients, and find rewarding opportunities as cultural guides.</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center gap-2 px-6 py-2 bg-amber-500 hover:bg-amber-600 rounded-full text-white font-medium transition-all shadow-md">
                        Register as Artisan
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all shadow-md">
                        Explore Hidden Gems
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Video component */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-amber-500"
            >
              {/* Video element with fallback */}
              <video
                ref={videoRef}
                src="/backhill.mp4" 
                type="video/mp4"
                className="w-full aspect-video object-cover"
                onClick={handlePlayVideo}
                poster="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              >
                <source src="/artisan-stories.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handlePlayVideo}
                  className="w-20 h-20 bg-amber-500 bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all group"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M5 3L19 12L5 21V3Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Artisan Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-500"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-100">
                    <img 
                      src={artisanSpotlight.image} 
                      alt={artisanSpotlight.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{artisanSpotlight.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{artisanSpotlight.years}</span>
                  </div>
                  <p className="text-sm text-amber-600 font-medium mb-2">{artisanSpotlight.craft} • {artisanSpotlight.location}</p>
                  <p className="text-gray-600 mb-4 italic">"{artisanSpotlight.quote}"</p>
                  <button className="text-sm flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    View Artisan Profile
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;