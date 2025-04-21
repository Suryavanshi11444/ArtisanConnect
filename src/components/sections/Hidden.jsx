import React, { useEffect, useRef } from 'react';
import {
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaCompass,
  FaBinoculars,
} from 'react-icons/fa';
import { GiPathDistance, GiTreasureMap } from 'react-icons/gi';

const FoundedPlaces = () => {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const radius = 180;
    const items = carousel.querySelectorAll('.carousel-item');
    const count = items.length;
    let angle = 0;

    const animateCarousel = () => {
      angle += 0.02;

      items.forEach((item, index) => {
        const itemAngle = angle + (index * (2 * Math.PI / count));
        const x = Math.cos(itemAngle) * radius;
        const z = Math.sin(itemAngle) * radius;

        item.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${-itemAngle * (180 / Math.PI)}deg)`;
        item.style.opacity = 1 - (Math.abs(z) / radius) * 0.3;
        item.style.zIndex = `${Math.round(100 - (z + radius))}`;
      });

      animationRef.current = requestAnimationFrame(animateCarousel);
    };

    animateCarousel();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const places = [
    {
      id: 1,
      name: 'Secret Beach Cove',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'Beach',
    },
    {
      id: 2,
      name: 'Forgotten Summit',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'Mountain',
    },
    {
      id: 3,
      name: 'Lost City Ruins',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'Archaeology',
    },
    {
      id: 4,
      name: 'Whispering Forest',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'Jungle',
    },
    {
      id: 5,
      name: 'Mirage Oasis',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'Desert',
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-16 h-16 rounded-full bg-[#FF9933] opacity-20"></div>
        <div className="absolute bottom-20 right-24 w-24 h-24 rounded-full bg-[#FF9933] opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-[#FF9933] opacity-10"></div>
      </div>

      {/* Compass Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5 pointer-events-none">
        <FaCompass className="w-full h-full text-[#FF9933]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9933] text-white rounded-full shadow-md mb-4">
              <FaBinoculars />
              <span className="text-sm font-medium">Discover Hidden Gems</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Unveil the World's <span className="text-[#FF9933]">Best Kept Secrets</span>
            </h1>

            <p className="text-lg text-gray-600">
              Our team of modern explorers has uncovered these hidden treasures,
              carefully documenting each location to bring you authentic,
              off-the-beaten-path experiences.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: <FaMapMarkerAlt className="text-xl" />, label: 'Verified Locations', count: '200+' },
                { icon: <GiTreasureMap className="text-xl" />, label: 'Hidden Spots', count: '150+' },
                { icon: <GiPathDistance className="text-xl" />, label: 'Adventure Trails', count: '80+' },
              ].map(({ icon, label, count }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200"
                >
                  <span className="text-[#FF9933]">{icon}</span>
                  <div>
                    <p className="font-medium text-gray-800">{label}</p>
                    <p className="text-xs text-[#FF9933] font-semibold">{count}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex gap-4">
              <button className="px-6 py-3 bg-[#FF9933] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Start Exploring
              </button>
              <button className="px-6 py-3 bg-white text-[#FF9933] rounded-lg font-medium shadow-md hover:shadow-lg transition-all border border-[#FF9933]">
                Meet Our Explorers
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative h-[400px] lg:h-[500px] flex justify-center items-center perspective-1000 -mx-4">
            {/* Decorative badge on carousel */}
            <div className="absolute top-0 right-0 lg:right-20 transform translate-y-8 bg-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Live Discovery</span>
            </div>

            <div
              ref={carouselRef}
              className="relative w-full h-full carousel-container"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {places.map((place) => (
                <div
                  key={place.id}
                  className="absolute carousel-item transition-opacity duration-300"
                  style={{
                    width: '220px',
                    height: '260px',
                    transformOrigin: 'center center',
                    left: 'calc(50% - 110px)',
                    top: 'calc(50% - 130px)',
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col transform transition-transform duration-300 hover:scale-105 border border-gray-100">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-[#FF9933] text-white text-xs px-2 py-1 rounded">
                        {place.type}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-gray-800 text-center">{place.name}</h3>
                      <p className="text-xs text-[#FF9933] text-center mt-1 font-medium">Exclusive Discovery</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel navigation hint */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm">
              Scroll to explore more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundedPlaces;
