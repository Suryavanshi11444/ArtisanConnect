import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// Three different image URLs
const image1 = "https://i.pinimg.com/736x/5b/95/03/5b9503029c69ea998cd4e7e245523668.jpg";
const image2 = "https://i.pinimg.com/474x/22/f6/39/22f6395150a5501b1f2bdb1f27d43f92.jpg";
const image3 = "https://i.pinimg.com/474x/10/f3/2a/10f32a478c0f00fb30dd25ca2f33e856.jpg";

const Mainfeature = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <p className="text-amber-500 font-bold mt-[-40px] text-center text-[60px]">
          Our Main Feature
        </p>

        {/* Text Content with Left Border */}
        <div className="ml-4 sm:ml-0 border-l-4 border-amber-500 pl-6 mt-20">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-wide">
            Empowering Local Artisan Communities
          </h1>
          <h2 className="text-2xl font-bold text-amber-500 mb-6">
            Craft Meets Culture, Digitally
          </h2>
          <p className="text-lg text-gray-700 mb-16 leading-relaxed">
            Our platform connects artisans with global buyers while also serving as a guide for <br />
            tourists seeking authentic, handmade products. Promoting cultural <br />
            heritage and boosting local economies.
          </p>
        </div>

        {/* 4x3 Grid Layout */}
        <div className="mt-16 grid grid-cols-3 grid-rows-4 gap-8">
          <div className="col-start-1 row-start-3 row-span-3">
            <ProjectCard
              title="Explore India’s Craftsmanship"
              subtitle="Uncover India’s rich craft heritage and take home unique creations."
              image={image1}
              delay={0}
            />
          </div>
          <div className="col-start-2 row-start-2 row-span-2">
            <ProjectCard
              title="Your Ultimate Artisan Guide"
              subtitle="Get to know talented artisans and their exceptional crafts"
              image={image2}
              delay={300}
            />
          </div>
          <div className="col-start-3 row-start-1 row-span-2">
            <ProjectCard
              title="Supporting Local Artisans"
              subtitle="Connect with artisans and preserve India’s artistic legacy"
              image={image3}
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const useInView = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const ProjectCard = ({ title, subtitle, image, delay }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative bg-white shadow-lg rounded-2xl overflow-hidden w-80 group transition-all duration-700 ease-out transform ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        {/* Hover Zoom on Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start p-6">
          <div className="transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-200 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Arrow Button */}
      <a
        href="#"
        className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition duration-300"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Mainfeature;




