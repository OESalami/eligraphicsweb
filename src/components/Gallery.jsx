import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Beauty from "../assets/images/Beauty.jpg";
import DataBundle from "../assets/images/DatabundlesGH.png";
import Food from "../assets/images/food.jpg";
import ELIGWEB from "../assets/images/eligweb.png";

const galleryImages = [Beauty, DataBundle, Food, ELIGWEB];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative bg-white text-gray-900 py-24 overflow-hidden"
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
          # Our Works
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          <span className="text-green-600">Creative</span> Gallery
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          A glimpse of our recent graphic designs.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-lg border border-green-100 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p className="text-white text-lg font-semibold">
                Project {index + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // closes on background click
          >
            <motion.img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border-2 border-green-400 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Soft Glow Accent */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-green-100 blur-3xl opacity-40"></div>
    </section>
  );
};

export default Gallery;
