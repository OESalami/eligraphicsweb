import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import John from "../assets/images/john.jpg";
import Jane from "../assets/images/jane.jpg";
import Lee from "../assets/images/lee.jpg";

const testimonials = [
  {
    name: "Noah Carter",
    role: "CEO, Tech Innovations",
    feedback:
      "Eligraphics Web transformed our online presence completely. Their attention to detail and creative approach truly stand out.",
    image: John,
  },
  {
    name: "Grace Miller",
    role: "Marketing Manager, Creative Minds",
    feedback:
      "The team is highly skilled and very professional. They delivered more than expected — the results speak for themselves.",
    image: Jane,
  },
  {
    name: "Alex Rivera",
    role: "Founder, Elite Solutions",
    feedback:
      "From start to finish, the experience was seamless. Eligraphics Web understood our vision perfectly and brought it to life.",
    image: Lee,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="testimonial relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-24 overflow-hidden">
      {/* Background Accent Glow */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-green-200 via-white to-transparent blur-3xl opacity-50 pointer-events-none"></div> */}

      {/* Section Header */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our <span className="text-green-500">Clients Say</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 text-base md:text-lg text-center mb-14 max-w-2xl"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Trusted by businesses and individuals — our work speaks for itself.
      </motion.p>

      {/* Testimonial Card Area */}
      <div className="relative w-full max-w-xl h-[360px]">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-50 border border-green-100 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8"
          >
            {/* Image */}
            <motion.img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full border-4 border-green-400 shadow-md object-cover mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />

            {/* Feedback */}
            <p className="text-gray-700 text-center italic leading-relaxed mb-6 max-w-md">
              “{testimonials[currentIndex].feedback}”
            </p>

            {/* Client Info */}
            <h3 className="text-lg font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[currentIndex].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="mt-10 flex space-x-3">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-green-500 scale-125 shadow-md"
                : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Bottom Fade for smooth section blending */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/70 to-transparent rotate-180 pointer-events-none"></div>
    </section>
  );
};

export default Testimonial;
