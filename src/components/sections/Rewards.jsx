import { useState } from 'react';
import { motion } from 'framer-motion';

const ExplorationRewards = () => {
  const [activeTab, setActiveTab] = useState('howItWorks');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Image URLs from Unsplash
  const images = {
    explore: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    document: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    reward: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    submit: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    detail: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    another: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    avatars: {
      alex: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      samira: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      james: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      priya: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Explore & Earn Rewards
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover hidden gems in your area, share them with our community, and get rewarded for your exploration!
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {['howItWorks', 'rewards', 'submitPlace'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-blue-100 hover:text-white/80'
                  }`}
              >
                {tab === 'howItWorks' && 'How It Works'}
                {tab === 'rewards' && 'Rewards'}
                {tab === 'submitPlace' && 'Submit a Place'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          {/* How It Works */}
          {activeTab === 'howItWorks' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Explore Your Area',
                  description: 'Visit new places around you that aren\'t yet in our database.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  image: images.explore,
                  bg: 'from-blue-100 to-blue-50'
                },
                {
                  title: 'Document Your Find',
                  description: 'Take photos, write a description, and note the location details.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  image: images.document,
                  bg: 'from-indigo-100 to-indigo-50'
                },
                {
                  title: 'Submit & Earn',
                  description: 'Submit your discovery through our platform and earn rewards after verification.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  ),
                  image: images.reward,
                  bg: 'from-purple-100 to-purple-50'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`h-40 bg-gradient-to-r ${step.bg} flex items-center justify-center overflow-hidden`}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-white shadow-md mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Rewards */}
          {activeTab === 'rewards' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Rewards Await</h3>
                  <p className="text-gray-600 mb-6">
                    For every new place you discover and add to our platform, you'll earn points that can be redeemed for exciting rewards.
                  </p>
                  <ul className="space-y-3">
                    {[
                      '10 points for each approved location',
                      'Bonus 50 points for locations that become popular',
                      '100 points for featured discoveries',
                      'Exclusive badges for top explorers'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
                      View Reward Catalog
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-8">
                  <div className="relative w-full h-64">
                    {/* Reward badges animation */}
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-white rounded-full shadow-lg flex items-center justify-center"
                        style={{
                          width: i % 2 === 0 ? '80px' : '100px',
                          height: i % 2 === 0 ? '80px' : '100px',
                          left: i % 2 === 0 ? `${20 + i * 15}%` : `${10 + i * 20}%`,
                          top: i % 2 === 0 ? '40%' : '20%',
                        }}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-600">{i * 50}</div>
                          <div className="text-xs text-gray-500">points</div>
                        </div>
                      </motion.div>
                    ))}
                    <motion.div
                      className="absolute bg-white rounded-xl shadow-xl p-4 w-32"
                      style={{ left: '50%', top: '60%' }}
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="text-center">
                        <div className="text-xs text-indigo-600 font-semibold mb-1">Featured</div>
                        <div className="text-2xl font-bold text-indigo-800">100</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Submit Place */}
          {activeTab === 'submitPlace' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit a New Place</h3>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                    >
                      <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="text-lg font-medium text-green-800 mb-2">Submission Received!</h4>
                      <p className="text-green-600">Thank you for your contribution. Our team will review your submission and you'll be notified once it's approved.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="place-name">Place Name</label>
                          <input
                            id="place-name"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Hidden Garden Cafe"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                          <input
                            id="location"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Address or approximate location"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
                          <textarea
                            id="description"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Tell us about this place..."
                            required
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Upload Photos</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <svg className="h-12 w-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-500 mt-2">Drag & drop photos here or click to browse</p>
                            <p className="text-sm text-gray-400 mt-1">Maximum 5 photos (JPEG, PNG)</p>
                          </div>
                        </div>
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                          >
                            Submit Discovery
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-64"
                  >
                    {/* Main image */}
                    <motion.div
                      className="absolute rounded-xl shadow-lg overflow-hidden"
                      style={{
                        width: '70%',
                        height: '60%',
                        left: '15%',
                        top: '10%',
                      }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <img 
                        src={images.submit} 
                        alt="Submit a place"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Detail image */}
                    <motion.div
                      className="absolute rounded-lg shadow-md overflow-hidden"
                      style={{
                        width: '40%',
                        height: '30%',
                        left: '5%',
                        top: '60%',
                        zIndex: 2,
                      }}
                      animate={{
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <img 
                        src={images.detail} 
                        alt="Place detail"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Another image */}
                    <motion.div
                      className="absolute rounded-lg shadow-md overflow-hidden"
                      style={{
                        width: '40%',
                        height: '30%',
                        right: '5%',
                        top: '60%',
                        zIndex: 2,
                      }}
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <img 
                        src={images.another} 
                        alt="Another view"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Featured Explorers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Top Explorers</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Alex M.', discoveries: 42, location: 'New York', avatar: images.avatars.alex },
              { name: 'Samira K.', discoveries: 38, location: 'Tokyo', avatar: images.avatars.samira },
              { name: 'James L.', discoveries: 35, location: 'London', avatar: images.avatars.james },
              { name: 'Priya T.', discoveries: 31, location: 'Mumbai', avatar: images.avatars.priya }
            ].map((explorer, index) => (
              <motion.div
                key={explorer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gradient-to-r from-blue-200 to-indigo-200 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg border-4 border-white overflow-hidden">
                    <img 
                      src={explorer.avatar} 
                      alt={explorer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 pt-16 -mt-12 text-center">
                  <h4 className="text-xl font-semibold text-gray-800">{explorer.name}</h4>
                  <p className="text-gray-600 mb-2">{explorer.location}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-gray-800">{explorer.discoveries} discoveries</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplorationRewards;