import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    name: "Website Development",
    points: [
      "Business Websites",
      "Personal Websites",
    ],
  },
  {
    name: "Graphic Designing",
    points: [
      "Poster Design",
      "Photo Manipulation",
      "Photo Retouching",
    ],
  },
  {
    name: "Gift Card Trading",
    points: [
      "Secure Transactions",
      "Wide Range of Cards",
    ],
  },
  {
    name: "Social Media Marketing",
    points: [
      "Followers, Likes, Comments, Shares, Views, Subscribers and more",

    ],
  },
  {
    name: "AR Business Marketing",
    points: [
      "SmartConnect Cards",
    ],
  },
  {
    name: "Ads Marketing",
    points: [
      "Facebook Ads",
      "Instagram Ads",
    ],
  },
  {
    name: "Commission Based Ads",
    points: [
      "Earn without Advertising",
      "5% Commission on Sales",
    ],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  // Animate beam movement along the services
  const beamY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={sectionRef} className="service relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      {/* Subtle Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 pointer-events-none"></div>

      {/* Section Title */}
      <motion.h1
        className="text-4xl font-extrabold mb-4 text-center tracking-wide uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-2xl font-semibold mb-12 text-center text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Your Vision, Our Expertise.
      </motion.h2>

      {/* Container for the layout */}
      <div className="relative w-full max-w-4xl flex flex-col items-center space-y-12">
        {/* Central Neon Beam */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/60 blur-md h-full"
          style={{ y: beamY }}
        ></motion.div>

        {/* Service Nodes & Lines */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative p-6 w-64 md:w-80 rounded-lg shadow-lg border backdrop-blur-lg bg-gray-800/60 text-center text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Connecting Line to Central Beam */}
            <div className="absolute left-1/2 top-[-24px] w-1 h-6 bg-blue-500 hidden md:block"></div>

            {/* Service Name */}
            <div>{service.name}</div>

            {/* Service Points */}
            <ul className="mt-4 text-sm text-gray-300 list-disc list-inside">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
