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
    accentColor: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "CTO, TechCorp",
    quote: "Reliable, efficient, and exceeded our expectations. Amazing service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    accentColor: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Designer",
    quote: "The best team I've ever worked with. Creative, passionate, and fast!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    accentColor: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "CEO, InnovateX",
    quote: "Our go-to solution for all development needs. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    accentColor: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: 5,
    name: "Linda Walker",
    role: "HR Manager",
    quote: "A truly wonderful experience. Very smooth and professional.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    accentColor: "from-rose-400 to-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    id: 6,
    name: "James Carter",
    role: "Business Analyst",
    quote: "They really understood our needs and delivered quality work.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    accentColor: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-50",
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
        className={`text-xl ${i < count ? "text-amber-400" : "text-gray-200"}`}
      >
        ★
      </motion.span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  const { name, role, quote, rating, image, accentColor, bgColor } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`relative ${bgColor} rounded-3xl p-8 shadow-lg overflow-hidden group`}
    >
      {/* Gradient accent */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accentColor}`}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      />
      
      {/* Floating avatar */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative w-20 h-20 mx-auto">
          <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} rounded-full blur-md opacity-30 group-hover:opacity-50 transition-all`} />
          <motion.img
            src={image}
            alt={name}
            className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-md"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={`bg-gradient-to-br ${accentColor} text-white rounded-full w-8 h-8 flex items-center justify-center`}>
              <FaQuoteLeft className="text-xs" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Speech bubble effect */}
      <motion.div
        className="relative bg-white rounded-xl p-6 shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
        <div className="flex justify-center mb-4">
          <StarRating count={rating} />
        </div>
        <div className="relative">
          <FaQuoteLeft className="absolute -top-4 -left-2 text-gray-200 text-2xl" />
          <p className="text-gray-700 italic text-center px-2">{quote}</p>
          <FaQuoteRight className="absolute -bottom-4 -right-2 text-gray-200 text-2xl" />
        </div>
      </motion.div>

      {/* User info */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="font-bold text-lg text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-all" />
      <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-white opacity-5 group-hover:opacity-15 transition-all" />
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voices of Satisfaction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        {/* Testimonial grid with staggered animation */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to join our satisfied clients?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;