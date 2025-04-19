import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Anna Smith",
    role: "Marketing Specialist",
    quote: "I was blown away by the quality and professionalism. Absolutely recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    bgColor: "bg-gray-50",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "CTO, TechCorp",
    quote: "Reliable, efficient, and exceeded our expectations. Amazing service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bgColor: "bg-gray-50",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Designer",
    quote: "The best team I've ever worked with. Creative, passionate, and fast!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    bgColor: "bg-gray-50",
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "CEO, InnovateX",
    quote: "Our go-to solution for all development needs. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    bgColor: "bg-gray-50",
  },
  {
    id: 5,
    name: "Linda Walker",
    role: "HR Manager",
    quote: "A truly wonderful experience. Very smooth and professional.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    bgColor: "bg-gray-50",
  },
  {
    id: 6,
    name: "James Carter",
    role: "Business Analyst",
    quote: "They really understood our needs and delivered quality work.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    bgColor: "bg-gray-50",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: i * 0.1, type: "spring" }}
        className={`text-lg ${i < count ? "text-blue-600" : "text-gray-300"}`}
      >
        ★
      </motion.span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  const { name, role, quote, rating, image, bgColor } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`relative ${bgColor} rounded-xl p-6 shadow-md overflow-hidden group border border-gray-200`}
    >
      {/* Gradient accent */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-blue-600"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      />
      
      {/* Floating avatar */}
      <motion.div
        className="relative z-10 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-all" />
          <motion.img
            src={image}
            alt={name}
            className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-sm"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
              <FaQuoteLeft className="text-xs" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Speech bubble effect */}
      <motion.div
        className="relative bg-white rounded-lg p-4 shadow-sm mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-white" />
        <div className="flex justify-center mb-2">
          <StarRating count={rating} />
        </div>
        <div className="relative">
          <FaQuoteLeft className="absolute -top-3 -left-1 text-gray-200 text-xl" />
          <p className="text-gray-700 text-sm italic text-center px-1">{quote}</p>
          <FaQuoteRight className="absolute -bottom-3 -right-1 text-gray-200 text-xl" />
        </div>
      </motion.div>

      {/* User info */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-xs text-gray-600">{role}</p>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-all" />
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-600"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 30],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Voices of Satisfaction
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        {/* Testimonial grid with staggered animation */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </AnimatePresence>
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-5">
            Ready to join our satisfied clients?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;