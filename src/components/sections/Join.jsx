import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPaintBrush, 
  FaSearch, 
  FaStore, 
  FaStar, 
  FaTimes, 
  FaFileUpload,
  FaImage,
  FaLink,
  FaUserTie
} from 'react-icons/fa';

const JoinUs = () => {
  const [openForm, setOpenForm] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    file: null,
    links: [''],
    experience: ''
  });

  const opportunities = [
    {
      id: 'guide',
      title: "Become a Local Guide",
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      description: "Get paid to share hidden gems in your area. Verified locals get premium listings.",
      benefits: [
        "Earn commission on bookings",
        "Build your personal brand",
        "Access exclusive events"
      ],
      btnText: "Apply as Guide",
      formFields: [
        {
          type: 'file',
          label: 'Upload Resume/CV',
          name: 'resume',
          accept: '.pdf,.doc,.docx',
          icon: <FaFileUpload className="mr-2" />
        },
        {
          type: 'text',
          label: 'Years of local experience',
          name: 'experience',
          placeholder: 'e.g. 5 years in Barcelona',
          icon: <FaUserTie className="mr-2" />
        },
        {
          type: 'links',
          label: 'Social/Review Profiles (optional)',
          name: 'links',
          placeholder: 'e.g. TripAdvisor, Google Reviews',
          icon: <FaLink className="mr-2" />
        }
      ]
    },
    {
      id: 'artist',
      title: "Join as Verified Artist",
      icon: <FaPaintBrush className="w-8 h-8" />,
      description: "Sell your artwork inspired by secret locations. Featured artist program available.",
      benefits: [
        "Dedicated storefront",
        "Commission-free period",
        "Promotion to our community"
      ],
      btnText: "Show Your Art",
      formFields: [
        {
          type: 'file',
          label: 'Portfolio PDF or Images',
          name: 'portfolio',
          accept: '.pdf,.jpg,.png',
          icon: <FaFileUpload className="mr-2" />
        },
        {
          type: 'text',
          label: 'Art style/medium',
          name: 'style',
          placeholder: 'e.g. Watercolor landscapes',
          icon: <FaPaintBrush className="mr-2" />
        },
        {
          type: 'links',
          label: 'Website/Social Links',
          name: 'links',
          placeholder: 'e.g. Instagram, Etsy',
          icon: <FaLink className="mr-2" />
        }
      ]
    },
    {
      id: 'confirmation',
      title: "Confirmation Team",
      icon: <FaSearch className="w-8 h-8" />,
      description: "Help verify new hidden places. Priority given to community contributors.",
      benefits: [
        "Travel stipends available",
        "Early access to new spots",
        "Influence discovery criteria"
      ],
      btnText: "Join Verification",
      formFields: [
        {
          type: 'file',
          label: 'Verification Samples',
          name: 'samples',
          accept: '.pdf,.jpg,.png',
          icon: <FaFileUpload className="mr-2" />
        },
        {
          type: 'text',
          label: 'Areas of expertise',
          name: 'expertise',
          placeholder: 'e.g. Historic sites, hiking trails',
          icon: <FaSearch className="mr-2" />
        },
        {
          type: 'links',
          label: 'References (optional)',
          name: 'links',
          placeholder: 'e.g. LinkedIn, professional site',
          icon: <FaLink className="mr-2" />
        }
      ]
    },
    {
      id: 'vendor',
      title: "Marketplace Vendor",
      icon: <FaStore className="w-8 h-8" />,
      description: "Sell authentic local products to travelers visiting hidden gems.",
      benefits: [
        "Zero setup fees",
        "Geotagged product listings",
        "Local delivery network"
      ],
      btnText: "Start Selling",
      formFields: [
        {
          type: 'file',
          label: 'Product Catalog',
          name: 'catalog',
          accept: '.pdf,.jpg,.png',
          icon: <FaFileUpload className="mr-2" />
        },
        {
          type: 'text',
          label: 'Product categories',
          name: 'categories',
          placeholder: 'e.g. Handmade ceramics, local spices',
          icon: <FaStore className="mr-2" />
        },
        {
          type: 'links',
          label: 'Existing store links',
          name: 'links',
          placeholder: 'e.g. Etsy, Shopify',
          icon: <FaLink className="mr-2" />
        }
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      role: openForm
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...formData.links];
    newLinks[index] = value;
    setFormData(prev => ({
      ...prev,
      links: newLinks
    }));
  };

  const addLinkField = () => {
    setFormData(prev => ({
      ...prev,
      links: [...prev.links, '']
    }));
  };

  const removeLinkField = (index) => {
    const newLinks = formData.links.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      links: newLinks
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      message: '',
      file: null,
      links: [''],
      experience: ''
    });
    setOpenForm(null);
    alert('Application submitted successfully!');
  };

  const currentFormConfig = opportunities.find(o => o.id === openForm);

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-10 blur-3xl"
      />
      
      <motion.div 
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-amber-100 opacity-10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Join Our <span className="text-blue-600">Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Contribute to uncovering hidden places and enjoy exclusive benefits as part of our community.
          </motion.p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center mb-6 mx-auto shadow-inner">
                  {opp.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{opp.title}</h3>
                <p className="text-gray-600 text-center mb-5">{opp.description}</p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-semibold text-gray-500 mb-3 text-center tracking-wider uppercase">KEY BENEFITS</h4>
                  <ul className="space-y-3">
                    {opp.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <FaStar className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mt-auto">
                  <motion.button 
                    onClick={() => setOpenForm(opp.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-all w-full shadow-md"
                  >
                    {opp.btnText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Form - Now appears below cards */}
        <AnimatePresence>
          {openForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-20"
            >
              <motion.div
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-500 p-6 text-white">
                    <div className="h-full flex flex-col justify-center">
                      <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        {currentFormConfig?.icon}
                      </div>
                      <h3 className="text-xl font-bold text-center mb-2">
                        {currentFormConfig?.title}
                      </h3>
                      <p className="text-center text-blue-100 mb-6">
                        {currentFormConfig?.description}
                      </p>
                      <div className="bg-white bg-opacity-20 rounded-lg p-4">
                        <h4 className="text-xs font-semibold mb-2 text-blue-100 tracking-wider uppercase">What We Look For</h4>
                        <ul className="space-y-2 text-sm">
                          {currentFormConfig?.benefits.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <FaStar className="text-amber-300 mt-0.5 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      {currentFormConfig?.formFields.map((field, index) => (
                        <div key={index}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {field.label} {field.type !== 'links' && field.required && '*'}
                          </label>
                          
                          {field.type === 'file' ? (
                            <div className="flex items-center justify-center w-full">
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  {field.icon}
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">{field.accept}</p>
                                </div>
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept={field.accept}
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          ) : field.type === 'links' ? (
                            <div className="space-y-2">
                              {formData.links.map((link, linkIndex) => (
                                <div key={linkIndex} className="flex items-center">
                                  <div className="flex-grow relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                      {field.icon}
                                    </div>
                                    <input
                                      type="text"
                                      value={link}
                                      onChange={(e) => handleLinkChange(linkIndex, e.target.value)}
                                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                      placeholder={field.placeholder}
                                    />
                                  </div>
                                  {formData.links.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeLinkField(linkIndex)}
                                      className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                      <FaTimes />
                                    </button>
                                  )}
                                </div>
                              ))}
                              <button
                                type="button"
                                onClick={addLinkField}
                                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                              >
                                <span className="mr-1">+ Add another link</span>
                              </button>
                            </div>
                          ) : (
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                {field.icon}
                              </div>
                              <input
                                type="text"
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleInputChange}
                                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder={field.placeholder}
                              />
                            </div>
                          )}
                        </div>
                      ))}

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us why you're interested *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-6 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
                        >
                          Submit Application
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Community CTA - Updated color scheme to match */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative shadow-xl"
        >
          {/* Animated dots background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Community Members Get <span className="text-amber-300">Exclusive</span> Benefits
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-blue-100 mb-8"
            >
              Those who help discover hidden places receive special privileges across all programs, 
              including early access, higher commissions, and VIP event invitations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => setOpenForm('community')}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
              >
                Learn About Community Rewards
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;