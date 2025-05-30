// filepath: src/pages/SellWithUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlobalStyles from '../components/shared/styles/GlobalStyles';
import HeroSection from '../components/sells/Hero/HeroSection';
import HeroContent from '../components/sells/Hero/HeroContent';
import BenefitsSection from '../components/sells/Benefits/BenefitsSection';
import HowItWorksSection from '../components/sells/HowItWorks/HowItWorksSection';
import FAQSection from '../components/sells/FAQ/FAQSection';
import CTASection from '../components/sells/CTA/CTASection';
import CTAStats from '../components/sells/CTA/CTAStats';

const SellWithUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <GlobalStyles />
      <HeroSection>
        <HeroContent />
      </HeroSection>
      <BenefitsSection />
      <HowItWorksSection />
      <FAQSection openFAQ={openFAQ} toggleFAQ={toggleFAQ} />
      <CTASection />
      <CTAStats />
    </>
  );
};

export default SellWithUs;