import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import heroImage from '../assets/hero-image.jpg'; // Adjust path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faHandshake, faChartLine, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Space+Grotesk:wght@700&display=swap');
`;

const SellWithUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleDragEnd = (event, info) => {
    if (info.velocity.y > 300 || info.offset.y > 200) {
      setIsPanelOpen(false);
    } else {
      panelRef.current?.style.setProperty('transform', 'translateY(0)');
    }
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        {/* Hero Section - Partner with us */}
        <HeroSection>
          <HeroImage />
          <HeroContent
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Partner With Us to Sell Your Products</h1>
            <p>Reach more buyers without spending on ads. Get paid for every successful sale.</p>
            <CallToActionButton>Start Selling Today</CallToActionButton>
          </HeroContent>
        </HeroSection>

        {/* Benefits Section - Why Sell With Us */}
        <BenefitsSection>
          <h2>Why Sell With Us?</h2>
          <BenefitsGrid>
            {benefitCards.map((card, index) => (
              <BenefitCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 8px 30px rgba(99, 102, 241, 0.2)'
                }}
              >
                <FontAwesomeIcon icon={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        {/* How It Works Section */}
        <HowItWorksSection
          as={motion.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <Steps
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                number: 1,
                title: "Apply to Partner",
                description: "Submit your details and product info"
              },
              {
                number: 2,
                title: "We List & Promote",
                description: "Your products appear on our platforms and other social media platforms"
              },
              {
                number: 3,
                title: "We Handle Customer Flow",
                description: "We manage inquiries, orders, and support to ensure a seamless experience."
              },
              {
                number: 4,
                title: "You Get Paid Per Sale",
                description: "Payments are fast, secure, and sent directly to your account. Track every earning in real-time."
              }
            ].map((step, index) => (
              <Step
                as={motion.div}
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <StepNumber>{step.number}</StepNumber>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Step>
            ))}
          </Steps>
        </HowItWorksSection>

        {/* FAQ Section */}
        <FAQSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <FAQGrid>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                isOpen={openFAQ === index}
              >
                <div className="question-header" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <FontAwesomeIcon icon={faChevronDown} size="sm" />
                </div>
                <div className="answer">
                  {faq.answer}
                </div>
              </FAQItem>
            ))}
          </FAQGrid>
        </FAQSection>

        {/* Call to Action Section - Ready to Start */}
        <CTASection
          as={motion.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >Ready to Sell Without Spending on Ads?
              
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our seller network and start making money. No upfront costs, no ad spend.
            </motion.p>
            <CTAButtonGroup>
              <PrimaryButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Selling Today
              </PrimaryButton>
              <SecondaryButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPanelOpen(true)}
              >
                Learn More
              </SecondaryButton>
            </CTAButtonGroup>
            <UpdatedCTAStats />
          </CTAContent>
        </CTASection>
      </PageContainer>

      <AnimatePresence>
        {isPanelOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPanelOpen(false)}
            />
            <SwipePanel
              ref={panelRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <SwipePanelHeader />
              <SwipePanelContent>
                <h3>Why This Works and Why Sellers Trust Us</h3>
                <p>We’ve built a simple, low-risk way to help you turn your products into profit — without spending on ads or setting up a full online store.</p>

                <h3>Here’s What You Get:</h3>
                <p>📢 <strong>Promotion that works</strong> - Start selling without any initial investment.</p>
                <p>🛒 <strong>Hassle-free operations</strong> - Access our existing customer base immediately.</p>
                <p>💰 <strong>Reliable payouts</strong> - Clear commission structure with no hidden fees.</p>
                <p>🎯 <strong>Targeted Marketing</strong> - We promote your products to interested buyers.</p>
                <p>🤝 <strong>Zero upfront costs</strong> - We handle customer service, payments, and promotion.</p>
                <p>⚡ <strong>Quick Setup</strong> - Start selling within 48 hours of approval.</p>
                <p>🌟 <strong>Growth Opportunities</strong> - Scale your business with our expanding platform.</p>

                <h3>What Our Sellers Are Saying:</h3>
                <p>🗣️ “I didn’t believe it at first, but I started making sales in the first week. They handled all the ads and payments. I just delivered the orders!”<strong>— Ama, Fashion Accessories Seller</strong></p>
                <p>🗣️  “No ad costs, no stress. I create my products, and once someone buys, I deliver and they pay me fast!”<strong>— Kwame, Custom Print Designer</strong></p>
                <p>🗣️  “They pay fast and keep you in the loop. I’ve already recommended this to two friends.”<strong>— Yaw, Digital Art Prints Seller</strong></p>
                <p>🗣️  “They promoted my products to the right audience. I only had to handle delivery everything else was sorted.”<strong>— Miriam, Skin Care Brand Owner</strong></p>
                <p>🗣️  “It’s like having a full team behind me. They get the customers, I just deliver. Simple and effective.”<strong>— Joseph, Handmade Furniture Maker</strong></p>
                <p>🗣️  “I used to struggle with online sales. Now I just send in my product details and wait for orders and they always pay on time.”<strong>— Esi, Natural Haircare Seller</strong></p>
                <p>🗣️  “I don’t have the time or money for ads. This platform helped me reach buyers I never could on my own.”<strong>— Kojo, Local Beverages Distributor</strong></p>
                <p>🗣️  “Everything is organized. I just receive the buyer info, deliver my item, and get paid. No back and forth.”<strong>— Linda, Jewelry Seller</strong></p>
                <p>🗣️  “It’s reliable. I was skeptical at first, but after a few deliveries and smooth payments, I was convinced.”<strong>— Fatima, Kids Clothing Vendor</strong></p>

                <h3>Note:</h3>
                <p><strong>📦 We handle marketing, customer communication, and payments. As a seller, you're responsible for delivering the product directly to the buyer.</strong></p>

              </SwipePanelContent>
            </SwipePanel>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 60px 20px;
  color: #2d3436;
  border-radius: 15px;
  margin-bottom: 60px;
  overflow: hidden;
  position: relative; // Added for parallax
  perspective: 1px; // Added for parallax
  transform-style: preserve-3d; // Added for parallax

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: left;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 5vw, 3.8rem); // Added responsive font sizing
    margin-bottom: 15px;
    line-height: 1.1;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    margin-bottom: 25px;
    line-height: 1.4;
    color: #4b5563;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 20px; // Reduced padding for mobile
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Update the shadowFloat keyframes animation
const shadowFloat = keyframes`
  0% {
    transform: translate(-50%, 0) scale(1);
    opacity: 0.45;
  }
  50% {
    transform: translate(-53%, 20px) scale(0.9);
    opacity: 0.25;
  }
  100% {
    transform: translate(-50%, 0) scale(1);
    opacity: 0.45;
  }
`;

const HeroImage = styled.div`
  background: url(${heroImage}) center/cover no-repeat;
  min-height: 400px;
  animation: ${float} 6s ease-in-out infinite;
  transform: scaleX(-1);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    background-attachment: fixed;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 49%; // Adjusted from 50% to move shadow slightly left
    width: 85%; // Slightly reduced width for better proportion
    height: 20px;
    background: #000000;
    border-radius: 50%;
    filter: blur(30px);
    opacity: 0.35; // Increased from 0.2
    transform: translateX(-50%);
    z-index: -2;
    animation: ${shadowFloat} 6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    min-height: 300px;

    &::after {
      width: 75%;
      bottom: -15px;
      left: 47%; // Adjusted for mobile
    }
  }
`;

const BenefitsSection = styled.section`
  padding: 80px 0;
  text-align: center;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 40px 0; // Reduced from 80px to 40px for mobile devices
  }

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 60px;
    font-size: clamp(2rem, 5vw, 3rem); // Added responsive font sizing
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      border-radius: 2px;
    }
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BenefitCard = styled(motion.div)`
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  svg {
    font-size: 2.8rem; // Increased from default size
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 25px; // Increased margin to maintain spacing
    filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2)); // Added subtle shadow
  }

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #2d3436;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #4b5563;
    line-height: 1.6;
  }
`;

const HowItWorksSection = styled.section`
  padding: 80px 0;
  background: #fafbff; // Changed from gradient to a subtle off-white
  text-align: center;
  border-radius: 20px;

  h2 {
    margin-bottom: 60px;
    font-size: clamp(2rem, 5vw, 3rem); // Added responsive font sizing
    font-family: 'Space Grotesk', sans-serif;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      border-radius: 2px;
    }
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Always show 2 cards per row
  gap: 20px; // Reduced gap for better fit on small screens
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); // 4 cards per row on large screens
    gap: 40px; // Larger gap for bigger screens
  }

  @media (max-width: 480px) {
    padding: 10px; // Smaller padding on very small devices
  }
`;

const Step = styled.div`
  background: white;
  padding: 25px 20px; // Reduced padding for mobile
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
  }

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem); // Responsive font size
    margin: 15px 0;
    color: #2d3436;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #4b5563;
    line-height: 1.6;
    font-size: clamp(0.9rem, 2vw, 1.1rem); // Responsive font size
  }

  @media (max-width: 480px) {
    padding: 20px 15px; // Even smaller padding on very small devices
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 1.4rem;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(
    270deg,
    #f8f9ff,
    #f0f3ff,
    #e8ebff,
    #f0f3ff,
    #f8f9ff
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 30px;
  margin: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #6366f1, #a855f7);
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3.5rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem; // Reduced font size for mobile
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: #4b5563;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 1.2rem; // Reduced font size for mobile
    }
  }
`;

const CTAButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-direction: column; // Changed to column for mobile
    align-items: stretch; // Makes buttons full width
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 14px 28px; // Reduced padding
    font-size: 1rem; // Smaller font size
    width: 100%; // Full width on mobile
    max-width: 300px; // Maximum width to maintain readability
    margin: 10px auto 0; // Center the button
  }

  &:hover {
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: white;
  color: #6366f1;
  border: 2px solid #6366f1;
  box-shadow: none;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    box-shadow: none;
  }
`;

const CTAStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(99, 102, 241, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // Keep 3 columns on mobile
    gap: 15px; // Reduced gap for mobile
  }
`;

const StatItem = styled(motion.div)`
  .number-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  span {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    color: #4b5563;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const AnimatedNumber = ({ value, format }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const formatNumber = (num) => {
    if (format === 'k') {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num;
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += value / steps;
        if (current > value) {
          setCount(value);
          clearInterval(timer);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, hasAnimated]);

  return <span ref={ref}>{formatNumber(count)}</span>;
};

const UpdatedCTAStats = () => {
  return (
    <CTAStats>
      <StatItem
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="number-container">
          <AnimatedNumber value={500} />
        </div>
        <p>Active Sellers</p>
      </StatItem>
      <StatItem
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="number-container">
          <AnimatedNumber value={5000} format="k" />
        </div>
        <p>Monthly Sales</p>
      </StatItem>
      <StatItem
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="number-container">
          <AnimatedNumber value={95} />
          <span>%</span>
        </div>
        <p>Satisfaction Rate</p>
      </StatItem>
    </CTAStats>
  );
};

const benefitCards = [
  {
    icon: faBullhorn,
    title: "No Ads Needed",
    description: "We promotes your products using our platforms and audience. You don't pay for marketing"
  },
  {
    icon: faHandshake, // Changed from faPercentage
    title: "Commission-Based Partnership",
    description: "Only pay a small agreed percentage per sale. No upfront fees"
  },
  {
    icon: faChartLine, // Changed from faPaintBrush
    title: "Earn More, Do Less",
    description: "Focus on creating, we focus on selling. You earn from every sale without the hassle"
  }
];

const faqData = [
  {
    question: "How much can I earn?",
    answer:  `You decide your product price. After we deduct our agreed commission, the rest goes directly to you. There's no limit, your earnings grow with your sales. For example, if you sell something for GHS 100 and we take just 10%, you keep GHS 90.
              Sell 10 of those in a week? That's GHS 900 straight to you.
              No limits. No hidden fees. Just real earnings for every sale.`
  },
  {
    question: "What type of products can I sell?",
    answer: `You can sell just about anything people want from fashion and beauty to digital products and handmade items.
            As long as it’s legal, safe, and in demand, we’re happy to help you reach buyers who are looking for it.
            Not sure if your product fits? Just reach out and we’ll let you know!`
  },
  {
    question: "How long does it take to get approved?",
    answer: `We usually review applications within 24 to 48 hours.
            If everything looks good, you’ll get a message from us (via WhatsApp or email) with the next steps.
            It’s quick, simple, and we’ll guide you through the process.`
  },
  {
    question: "When and how do I get paid?",
    answer: `We usually approve new sellers within 24 to 48 hours.
            Once you're approved:
            • We’ll message you to confirm your product details and commission.
            • We add your products to our system.
            • We start promoting for you.
            • When orders come in, we notify you and you get paid!
            You can choose to receive payments via Mobile Money or bank transfer whichever works best for you.`
  }
];

const FAQSection = styled(motion.section)`
  padding: 80px 0;
  background: #fafbff;
  border-radius: 20px;
  margin: 60px 0;
  max-width: 900px;
  margin: 60px auto;

  h2 {
    text-align: center;
    margin-bottom: 60px;
    font-size: clamp(2rem, 5vw, 3rem); // Added responsive font sizing
    font-family: 'Space Grotesk', sans-serif;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      border-radius: 2px;
    }
  }
`;

const FAQGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
`;

const FAQItem = styled(motion.div)`
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  padding: 20px 0;

  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;

    h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      color: #2d3436;
      margin: 0;
    }

    svg {
      transition: transform 0.3s ease;
      color: #6366f1;
      transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    }
  }

  .answer {
    font-family: 'Poppins', sans-serif;
    color: #4b5563;
    line-height: 1.6;
    font-size: 1rem;
    max-height: ${props => props.isOpen ? '500px' : '0'};
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: ${props => props.isOpen ? '1' : '0'};
    margin-top: ${props => props.isOpen ? '10px' : '0'};
    padding-left: 10px;
  }
`;

const CallToActionButton = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 14px 28px; // Reduced padding
    font-size: 1rem; // Smaller font size
    width: 100%; // Full width on mobile
    max-width: 300px; // Maximum width to maintain readability
    margin: 10px auto 0; // Center the button
  }

  &:hover {
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SwipePanel = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  touch-action: none;
`;

const SwipePanelHeader = styled.div`
  width: 40px;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin: 0 auto 20px;
`;

const SwipePanelContent = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  padding: 0 20px;

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default SellWithUs;