import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const CardContainer = styled(motion.div)`
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
  }

  svg {
    font-size: 2.8rem;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 25px;
    filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2));
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

const BenefitCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  );
};

export default BenefitCard;