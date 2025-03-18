import { motion, useScroll, useTransform } from "framer-motion";
import Who from '../assets/images/who-we-are.jpg'
import Our from '../assets/images/our-mission.jpg'
import Why from '../assets/images/why-us.jpg'

const sections = [
  {
    title: "Who We Are",
    text: "We specialize in website development, graphic design, AR business cards, and more. Our focus is on delivering high-quality digital solutions tailored to your needs.",
    image: Who,
  },
  {
    title: "Our Mission",
    text: "We combine creativity, technology, and strategy to bring your vision to life. Our goal is to help businesses and individuals establish a strong online presence.",
    image: Our,
  },
  {
    title: "Why Choose Us?",
    text: "We offer modern designs, cutting-edge technology, and fast, reliable services to ensure your brand stands out in the digital world.",
    image: Why,
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="about min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 lg:px-8 py-16 text-center">
        {/* Section Title */}
        <motion.h1
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT US
          <p className="text-xl space-x-2 text-gray-200 font-normal text-gray-200">Get To Know Us Better</p>
        </motion.h1>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="sticky top-16 w-full flex flex-col sm:flex-row items-center justify-center bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
              style={{ scale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image Section */}
              <div className="w-full sm:w-1/2 h-64 md:h-80 flex-shrink-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full sm:w-1/2 p-6 md:p-10 text-center sm:text-left">
                <h1 className="text-3xl font-bold">{section.title}</h1>
                <p className="mt-4 text-lg">{section.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
