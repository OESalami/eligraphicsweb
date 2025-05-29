import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';
import styled from 'styled-components';

const CTAStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(99, 102, 241, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
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

const CTAStats = () => {
  return (
    <CTAStatsContainer>
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
    </CTAStatsContainer>
  );
};

export default CTAStats;