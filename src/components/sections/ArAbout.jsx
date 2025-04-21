import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArtisanTopProducts = () => {

  
  const [expanded, setExpanded] = useState(false);
  const [selectedArea, setSelectedArea] = useState('All');

  const highlightArtisans = [
    'Udaipur Arts',
    'Udaipur Silver Smiths',
    'Udaipur Leather',
    'Udaipur Painters'
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Blue Pottery Vase',
      price: 32.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Delhi Clay Arts',
      area: 'Delhi',
      inStock: true
    },
    {
      id: 2,
      name: 'Brass Elephant Statue',
      price: 45.50,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1566030650546-1f8fc6f4d1a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Metal Crafts Delhi',
      area: 'Delhi',
      inStock: true
    },
    {
      id: 3,
      name: 'Handwoven Silk Saree',
      price: 89.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Delhi Weavers',
      area: 'Delhi',
      inStock: true
    },
    {
      id: 4,
      name: 'Marble Inlay Box',
      price: 52.00,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Delhi Marble Arts',
      area: 'Delhi',
      inStock: true
    },
    {
      id: 5,
      name: 'Miniature Painting',
      price: 65.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Udaipur Arts',
      area: 'Udaipur',
      inStock: true
    },
    {
      id: 6,
      name: 'Silver Jewelry Set',
      price: 78.50,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Udaipur Silver Smiths',
      area: 'Udaipur',
      inStock: true
    },
    {
      id: 7,
      name: 'Leather Mojari Shoes',
      price: 42.75,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Udaipur Leather',
      area: 'Udaipur',
      inStock: true
    },
    {
      id: 8,
      name: 'Pichwai Painting',
      price: 95.00,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      artisan: 'Udaipur Painters',
      area: 'Udaipur',
      inStock: true
    },
    // ... Add the rest of the product objects here as in your previous dataset ...
  ];

  const areas = ['All', ...new Set(allProducts.map(product => product.area))];
  const filteredProducts = selectedArea === 'All' ? allProducts : allProducts.filter(product => product.area === selectedArea);
  const visibleProducts = expanded ? filteredProducts : filteredProducts.slice(0, 4);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Artisan Top Products</h2>
          <p className="mt-4 text-lg text-gray max-w-3xl mx-auto">
            Discover handcrafted excellence from skilled artisans across India
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {areas.map(area => (
            <button
              key={area}
              onClick={() => {
                setSelectedArea(area);
                setExpanded(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedArea === area
                  ? 'bg-[#FF9933] text-white'
                  : 'bg-[#FF9933] text-white hover:bg-gray-200'
              }`}
            >
              {area}
            </button>
          ))}
        </motion.div>

        {filteredProducts.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-gray">No products found for {selectedArea}. Check back later!</p>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visibleProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-blue-100"
                >
                  <div className="relative h-48 bg-blue-50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {product.rating} ★
                    </div>
                    <div className="absolute bottom-2 left-2 bg-[#FF9933] text-white text-xs font-bold px-2 py-1 rounded">
                      {product.area}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-1">{product.name}</h3>
                    <p className={`text-sm mb-2 ${highlightArtisans.includes(product.artisan) ? 'text-black' : 'text-blue-800'}`}>
                      by {product.artisan}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 font-bold">${product.price.toFixed(2)}</span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                            product.inStock
                              ? 'bg-[#FF9933] hover:bg-gray-700 text-white'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {product.inStock ? 'Buy Now' : 'Out of Stock'}
                        </button>
                        <button className="bg-white border border-[#FF9933] text-[#FF9933] hover:bg-gray px-3 py-1 rounded-md text-sm transition-colors duration-200">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length > 4 && (
              <div className="mt-10 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setExpanded(!expanded)}
                  className="bg-blue-600 hover:bg-gray text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 shadow-md"
                >
                  {expanded ? 'Show Less' : 'Show More'}
                </motion.button>
              </div>
            )}
          </>
        )}

        <AnimatePresence>
          {expanded && filteredProducts.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-center"
            >
              <p className="text-blue-900">
                Showing {expanded ? 'all' : '4'} of {filteredProducts.length} {selectedArea === 'All' ? '' : selectedArea + ' '}artisan products
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArtisanTopProducts;