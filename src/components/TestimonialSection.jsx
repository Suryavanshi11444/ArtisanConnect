import React from "react";
import { motion } from "framer-motion";

// Allowed color variants only
const testimonials = [
  {
    name: "Anna Smith",
    role: "Marketing Specialist",
    quote: "I was blown away by the quality and professionalism. Absolutely recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    layout: "vertical",
    size: "lg",
    imageLayout: "circle",
    accentColor: "bg-blue-100",
  },
  {
    name: "Michael Lee",
    role: "CTO, TechCorp",
    quote: "Reliable, efficient, and exceeded our expectations. Amazing service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    layout: "horizontal",
    size: "md",
    imageLayout: "rectangle",
    accentColor: "bg-amber-100",
  },
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    quote: "The best team I've ever worked with. Creative, passionate, and fast!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    layout: "vertical",
    size: "md",
    imageLayout: "rectangle",
    accentColor: "bg-gray-100",
  },
  {
    name: "Daniel Kim",
    role: "CEO, InnovateX",
    quote: "Our go-to solution for all development needs. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    layout: "horizontal",
    size: "lg",
    imageLayout: "circle",
    accentColor: "bg-blue-100",
  },
  {
    name: "Linda Walker",
    role: "HR Manager",
    quote: "A truly wonderful experience. Very smooth and professional.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    layout: "vertical",
    size: "sm",
    imageLayout: "rectangle",
    accentColor: "bg-amber-100",
  },
  {
    name: "James Carter",
    role: "Business Analyst",
    quote: "They really understood our needs and delivered quality work.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    layout: "vertical",
    size: "md",
    imageLayout: "circle",
    accentColor: "bg-gray-100",
  },
  {
    name: "Emily Green",
    role: "UX Consultant",
    quote: "Collaborating with them was a pleasure. Great results and great people!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    layout: "horizontal",
    size: "sm",
    imageLayout: "circle",
    accentColor: "bg-blue-100",
  },
  {
    name: "Robert Nelson",
    role: "Founder, DevLink",
    quote: "Outstanding from start to finish. Will definitely work again.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    layout: "vertical",
    size: "lg",
    imageLayout: "rectangle",
    accentColor: "bg-amber-100",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1 mb-2 justify-center sm:justify-start">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < count ? "text-amber-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const sizeMap = {
  sm: "p-4 text-sm max-w-xs",
  md: "p-6 text-base max-w-md",
  lg: "p-8 text-lg max-w-lg",
};

const TestimonialCard = ({
  name,
  role,
  quote,
  rating,
  image,
  layout,
  size,
  imageLayout,
  accentColor,
}) => {
  const cardBase = `relative bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${sizeMap[size]} overflow-hidden`;
  const imageSize = imageLayout === "circle" ? "w-16 h-16 sm:w-20 sm:h-20" : "w-24 h-16 sm:w-32 sm:h-20";
  const imageStyle = `${imageSize} ${imageLayout === "circle" ? "rounded-full" : "rounded-lg"} object-cover shadow-md border-2 border-white`;

  const accentBar = (
    <div className={`absolute top-0 left-0 w-full h-2 ${accentColor}`} />
  );

  if (layout === "horizontal") {
    return (
      <motion.div
        className={`${cardBase} flex flex-col sm:flex-row gap-4 items-center`}
        whileHover={{ y: -5 }}
      >
        {accentBar}
        <div className="mt-4 sm:mt-0">
          <img src={image} alt={name} className={imageStyle} />
        </div>
        <div className="flex-1">
          <StarRating count={rating} />
          <p className="italic text-gray-700 mb-3">"{quote}"</p>
          <div className="bg-gray-100 p-2 rounded">
            <p className="font-bold text-black">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${cardBase} flex flex-col items-center text-center`}
      whileHover={{ y: -5 }}
    >
      {accentBar}
      <img src={image} alt={name} className={`mt-6 mb-4 ${imageStyle}`} />
      <StarRating count={rating} />
      <p className="italic text-gray-700 mb-4 px-2">"{quote}"</p>
      <div className="mt-auto w-full bg-gray-100 p-3 rounded">
        <p className="font-bold text-black">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Hear from the people who've experienced our service firsthand
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
