import React from "react";
import Web from "../assets/images/web-dev.png";
import Graphics from "../assets/images/graphics.png";
import Social from "../assets/images/social-media.png";
import "./Hero.css";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    transition: { duration: 0.3, ease: easeInOut },
  },
});

const headphoneData = [
  {
    id: 1,
    image: Web,
    title: "Web Development",
    subtitle:
      "Get a professional, responsive, and user-friendly website tailored for your brand or business, ensuring a sleek design and smooth functionality.",
  },
  {
    id: 2,
    image: Graphics,
    title: "Graphic Designing",
    subtitle:
      "Creative and high-quality designs, including posters, photo manipulation, and retouching, to enhance visuals and make your brand stand out.",
  },
  {
    id: 3,
    image: Social,
    title: "Social Marketing",
    subtitle:
      "Boost your online presence with real subscribers, followers, views, and likes to grow your brand and engagement effortlessly.",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  return (
    <section className="home relative bg-[#060608] text-white md:py-20 py-10 flex justify-center items-center overflow-hidden">
      {/* Gradient Fade to White at the Bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-[#060608]/50 to-transparent pointer-events-none"></div> */}

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-green-500/10 blur-[100px] rounded-full"></div>

      <div className="container flex flex-col md:flex-row justify-around items-center relative z-10 px-6">
        {/* Text Section */}
        <div className="flex flex-col mb-10 mt-10 justify-center items-center md:items-start xl:max-w-[450px] space-y-6 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeData.id}
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-4xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              <span className="text-green-400">{activeData.title.split(" ")[0]}</span>{" "}
              {activeData.title.split(" ").slice(1).join(" ")}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeData.subtitle}
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-lg font-medium text-gray-300 leading-relaxed"
            >
              {activeData.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Divider */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <div className="w-20 h-[1px] bg-green-400"></div>
            <p className="uppercase text-sm tracking-wide text-green-400">
              Top Services for You
            </p>
            <div className="w-20 h-[1px] bg-green-400"></div>
          </div>

          {/* Icons Switch */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {headphoneData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveData(item)}
                className={`cursor-pointer p-3 rounded-xl border ${
                  activeData.id === item.id
                    ? "border-green-400 bg-green-500/10"
                    : "border-white/20 hover:border-green-400/50"
                } transition-all duration-300`}
              >
                <img src={item.image} alt="" className="w-[100px]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.image}
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              src={activeData.image}
              alt={activeData.title}
              className="w-[350px] md:w-[450px] xl:w-[520px] object-contain drop-shadow-[0_0_25px_#00ff9960]"
            />
          </AnimatePresence>
        </div>
      </div>
      {/* Smooth transition to About section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="absolute bottom-0 left-0 w-full h-[90px] pointer-events-none bg-gradient-to-b from-transparent via-[#111]/10 to-white"
/>
    </section>
  );
};

export default Hero;
