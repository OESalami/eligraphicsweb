import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';
import { faqData } from '../../../data/faqData'; // Adjust the import path as necessary

const FAQSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '80px 0', background: '#fafbff', borderRadius: '20px', margin: '60px 0', maxWidth: '900px', margin: '60px auto' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '60px', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative' }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 20px' }}>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;