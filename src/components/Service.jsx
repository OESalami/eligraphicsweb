import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Palette,
  Megaphone,
  Gift,
} from "lucide-react"; // modern minimal icons

const services = [
  {
    name: "Website Development",
    icon: <Code2 className="w-10 h-10 text-green-500 mb-3" />,
    description:
      "We craft responsive, SEO-friendly, and high-performing websites that define your online presence.",
    points: ["Business Websites", "Personal Websites"],
  },
  {
    name: "Graphic Designing",
    icon: <Palette className="w-10 h-10 text-green-500 mb-3" />,
    description:
      "From stunning visuals to brand identity, we deliver designs that speak louder than words.",
    points: ["Poster/flyer Design"],
  },
  {
    name: "Ads Marketing",
    icon: <Megaphone className="w-10 h-10 text-green-500 mb-3" />,
    description:
      "Boost your reach and conversions with data-driven ads across Facebook, Instagram, and Meta networks.",
    points: ["Facebook Ads", "Instagram Ads"],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const beamY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={sectionRef}
      className="service relative min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
    >
      {/* Section Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-wide text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="text-green-500">Services</span>
      </motion.h1>

      <motion.h2
        className="text-lg md:text-xl mb-16 text-center text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Turning your vision into{" "}
        <span className="text-green-500">digital excellence.</span>
      </motion.h2>

      {/* Main Layout */}
      <div className="relative w-full max-w-5xl flex flex-col items-center space-y-16">
        {/* Central Scroll Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-green-400 to-green-600 rounded-full h-full"
          style={{ y: beamY }}
        ></motion.div>

        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative p-8 w-80 md:w-[420px] rounded-3xl shadow-lg border border-gray-100 bg-white/90 backdrop-blur-sm text-center hover:shadow-2xl transition-all duration-300 ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Connector Line to Center Beam */}
            <div
              className={`absolute ${
                index % 2 === 0 ? "-right-[55px]" : "-left-[55px]"
              } top-1/2 transform -translate-y-1/2 w-[55px] h-[2px] bg-gradient-to-r from-green-400 to-green-600 hidden md:block`}
            ></div>

            {/* Icon */}
            <div className="flex justify-center">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.name}
            </h3>

            {/* Short Description */}
            <p className="text-gray-500 text-sm mb-4 px-2 leading-relaxed">
              {service.description}
            </p>

            {/* Bullet Points */}
            <ul className="text-gray-600 text-sm space-y-2">
              {service.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/70 to-transparent rotate-180 pointer-events-none"></div>
    </div>
  );
};

export default Services;
