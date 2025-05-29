import React from 'react';
import styled from 'styled-components';
import heroImage from '../../../assets/hero-image.jpg';

const HeroSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 60px 20px;
  color: #2d3436;
  border-radius: 15px;
  margin-bottom: 60px;
  overflow: hidden;
  position: relative;
  perspective: 1px;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroImage = styled.div`
  background: url(${heroImage}) center/cover no-repeat;
  min-height: 400px;
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
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroImage />
      {/* HeroContent component will be added here */}
    </HeroSectionContainer>
  );
};

export default HeroSection;