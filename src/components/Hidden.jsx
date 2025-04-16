import React, { useEffect, useRef } from 'react';
import {
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
} from 'react-icons/fa';

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
      angle += 0.05;

      items.forEach((item, index) => {
        const itemAngle = angle + (index * (2 * Math.PI / count));
        const x = Math.cos(itemAngle) * radius;
        const z = Math.sin(itemAngle) * radius;

        item.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${-itemAngle * (180 / Math.PI)}deg)`;
        item.style.opacity = 1 - (Math.abs(z) / radius) * 0.5;
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
      name: 'Sunset Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Mountain Peak',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Ancient City',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'Tropical Forest',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      name: 'Desert Oasis',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            <h2 className="text-4xl font-bold text-gray-800">
              We Founded These <span className="text-indigo-600">Amazing Places</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our platform has discovered and curated these breathtaking destinations,
              bringing them to travelers worldwide. Each location is carefully verified
              and documented by our team of explorers.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: <FaMapMarkerAlt />, label: 'Verified Locations' },
                { icon: <FaGlobeAmericas />, label: 'Global Coverage' },
                { icon: <FaUmbrellaBeach />, label: 'Beaches' },
                { icon: <FaMountain />, label: 'Mountains' },
                { icon: <FaCity />, label: 'Cities' },
              ].map(({ icon, label }, idx) => (
                <div key={idx} className="flex items-center gap-2 text-indigo-600">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative h-[400px] lg:h-[500px] flex justify-center items-center perspective-1000 -mx-4">
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
                    width: '200px',
                    height: '240px',
                    transformOrigin: 'center center',
                    left: 'calc(50% - 100px)',
                    top: 'calc(50% - 120px)',
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full flex flex-col transform transition-transform duration-300 hover:scale-105">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="font-semibold text-gray-800">{place.name}</h3>
                      <p className="text-xs text-indigo-600">Founded by us</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundedPlaces;
