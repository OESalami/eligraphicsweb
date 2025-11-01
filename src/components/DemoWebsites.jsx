import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Bundle from "../assets/images/bundle.png";
import Golden from "../assets/images/golden.png";
import Movies from "../assets/images/emovies.png";
import Shop from "../assets/images/shop.png";

const websites = [
  {
    name: "DataBundlesGH",
    desc: "A modern e-commerce platform for instant data bundle sales with Paystack integration.",
    img: Bundle,
    link: "https://www.databundlesgh.com/",
  },
  {
    name: "Golden Gauge",
    desc: "Construction company delivering sustainable, high-quality spaces with expert craftsmanship.",
    img: Golden,
    link: "https://golden-gauge-upgd.vercel.app/",
  },
  {
    name: "EliMovies",
    desc: "Movie trailer website featuring trending, popular, and upcoming film previews.",
    img: Movies,
    link: "https://eli-movies.vercel.app/",
  },
  {
    name: "ShopEli",
    desc: "E-commerce website offering a wide range of quality products online.",
    img: Shop,
    link: "",
  },
];

const DemoWebsites = () => {
  return (
    <section
      id="websites"
      className="relative bg-[#f9fafb] text-gray-900 py-24 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-green-500 uppercase tracking-wide font-semibold text-sm">
          # Recent Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          <span className="text-green-600">Website</span> Demos
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          Explore some of our latest web development projects.
        </p>
      </motion.div>

      {/* Website Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {websites.map((site, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={site.img}
                alt={site.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between text-center sm:text-left">
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  {site.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {site.desc}
                </p>
              </div>

              <motion.a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1 }}
                className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Preview Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Accent Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-green-100 blur-3xl opacity-50"></div>
    </section>
  );
};

export default DemoWebsites;
