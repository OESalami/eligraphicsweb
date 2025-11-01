import { motion } from "framer-motion";
import {
  FaUsers,
  FaBullseye,
  FaCrown,
} from "react-icons/fa";

const sections = [
  {
    title: "Who We Are",
    text: "At EligraphicsWeb, we merge creativity and technology to deliver powerful digital experiences — from modern websites to standout brand designs.",
    icon: <FaUsers className="text-green-600 text-6xl md:text-7xl" />,
  },
  {
    title: "Our Mission",
    text: "We aim to empower individuals and businesses to establish impactful online presences with clean design, speed, and strategy.",
    icon: <FaBullseye className="text-green-600 text-6xl md:text-7xl" />,
  },
  {
    title: "Why Choose Us?",
    text: "We believe in excellence. Our solutions combine performance, beauty, and functionality — ensuring your brand leads in the digital space.",
    icon: <FaCrown className="text-green-600 text-6xl md:text-7xl" />,
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen bg-white text-gray-800 overflow-hidden"
    >
      {/* Header Section (unchanged) */}
      <motion.div
        className="text-center pt-24 pb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-green-500 uppercase tracking-wide font-semibold text-sm">
          # About EligraphicsWeb
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2">
          We Build <span className="text-green-600">Brands</span> That Inspire
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Transforming visions into creative realities.
        </p>
      </motion.div>

      {/* Icon Sections */}
      <div className="w-full max-w-6xl mx-auto px-6 space-y-20 md:space-y-28 pb-24">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-12`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Icon Container */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full bg-green-50 border border-green-200 shadow-md"
              >
                {section.icon}
              </motion.div>
              {/* Soft glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 -z-10"
                style={{
                  background:
                    index % 2 === 0
                      ? "radial-gradient(circle at top left, rgba(0,255,153,0.2), transparent)"
                      : "radial-gradient(circle at top right, rgba(0,255,255,0.2), transparent)",
                }}
              ></div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                <span className="text-green-600">{section.title.split(" ")[0]}</span>{" "}
                {section.title.split(" ").slice(1).join(" ")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.text}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-4 px-8 py-3 rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors duration-300"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-100 to-transparent blur-2xl"></div>
    </div>
  );
};

export default About;
