import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import John from '../assets/images/john.jpg'
import Jane from '../assets/images/jane.jpg'
import Lee from '../assets/images/lee.jpg'

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovations",
    feedback: "This service exceeded my expectations. The team is highly professional and delivers top-notch results.",
    image: John,
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, Creative Minds",
    feedback: "Absolutely amazing! The attention to detail and creativity is unmatched.",
    image: Jane,
  },
  {
    name: "Michael Lee",
    role: "Founder, Elite Solutions",
    feedback: "One of the best experiences I've had with a service provider. Highly recommended!",
    image: Lee,
  },
];

const Testimonial3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] px-4 overflow-hidden">
      {/* Section Title and Subtitle */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 uppercase text-center tracking-wide">
        What Our Clients Say
      </h2>
      <p className="text-xl space-x-2  font-extrabold text-gray-200 md:text-xl text-center mb-10 max-w-2xl">
        Your Success Is Our Priority. See How We Deliver Excellence!
      </p>

      {/* Testimonial Container */}
      <div className="relative w-[300px] md:w-[500px] h-[320px] md:h-[380px] perspective">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full flex flex-col items-center justify-center rounded-2xl bg-white/15 backdrop-blur-[30px] text-white border border-white/10 shadow-xl p-6 transition-all duration-500 ease-in-out`}
            style={{ 
              transform: `rotateY(${(index - currentIndex) * 120}deg) translateZ(300px)`,
              opacity: currentIndex === index ? 1 : 0.3
            }}
          >
            {/* Profile Image */}
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-20 w-20 rounded-full mb-3 border-4 border-blue-500 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />

            {/* Feedback */}
            <p className="text-center text-sm md:text-lg italic">{testimonial.feedback}</p>

            {/* Client Info */}
            <h3 className="mt-3 text-lg font-bold">{testimonial.name}</h3>
            <p className="text-xs text-gray-400">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-5 flex space-x-3">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-400 scale-110" : "bg-gray-600"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial3D;
