import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CallToActionButton from '../../shared/buttons/PrimaryButton';

const HeroContentContainer = styled(motion.div)`
  text-align: left;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 5vw, 3.8rem);
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
`;

const HeroContent = () => {
  return (
    <HeroContentContainer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Partner With Us to Sell Your Designs</h1>
      <p>Turn your creative designs into profit with our global marketplace</p>
      <CallToActionButton>Start Selling Today</CallToActionButton>
    </HeroContentContainer>
  );
};

export default HeroContent;