import { useState } from 'react';
import { motion } from 'framer-motion';

const BuyerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'The handcrafted ceramic mug from Delhi is absolutely beautiful! The craftsmanship is exceptional and it keeps my tea warm for hours. Will definitely buy more from this artisan.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      product: 'Blue Pottery Vase'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      location: 'Mumbai',
      rating: 4,
      comment: 'The Udaipur miniature painting I purchased exceeded my expectations. The colors are vibrant and the detailing is exquisite. A true masterpiece that adds elegance to my home.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      product: 'Miniature Painting'
    },
    {
      id: 3,
      name: 'Ananya Singh',
      location: 'Bangalore',
      rating: 5,
      comment: 'My Phulkari dupatta from Patiala is stunning! The embroidery is flawless and the colors are so vibrant. Received so many compliments already. Worth every penny!',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      product: 'Phulkari Dupatta'
    },
    {
      id: 4,
      name: 'Vikram Mehta',
      location: 'Kolkata',
      rating: 4,
      comment: 'The bamboo basket set from Jharkhand is both beautiful and functional. Perfect for storing fruits and adds a natural touch to my kitchen. Excellent craftsmanship!',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      product: 'Bamboo Basket Set'
    },
    {
      id: 5,
      name: 'Neha Gupta',
      location: 'Hyderabad',
      rating: 5,
      comment: 'The Golden Temple painting from Amritsar is breathtaking. The gold detailing is magnificent and it has become the centerpiece of my living room. Highly recommend!',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      product: 'Golden Temple Painting'
    }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black sm:text-4xl">What Our Buyers Say</h2>
          <p className="mt-4 text-lg text-blue-900 max-w-3xl mx-auto">
            Hear from customers who've experienced our artisan products firsthand
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <motion.div
            key={reviews[activeReview].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-blue-100"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={reviews[activeReview].image} 
                  alt={reviews[activeReview].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                />
                <div className="mt-4 text-center">
                  <p className="font-medium text-black">{reviews[activeReview].name}</p>
                  <p className="text-sm text-blue-800">{reviews[activeReview].location}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < reviews[activeReview].rating ? 'text-amber-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-blue-900">
                    Purchased: {reviews[activeReview].product}
                  </span>
                </div>
                <blockquote className="text-lg text-black">
                  <p>"{reviews[activeReview].comment}"</p>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md border border-blue-200 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md border border-blue-200 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Review Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${activeReview === index ? 'bg-blue-600' : 'bg-blue-200'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Reviews Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.filter((_, i) => i !== activeReview).slice(0, 3).map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div className="ml-4">
                  <p className="font-medium text-black">{review.name}</p>
                  <p className="text-sm text-blue-800">{review.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-blue-900 mb-2">Purchased: {review.product}</p>
              <p className="text-black">"{review.comment.substring(0, 100)}..."</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyerReviews;