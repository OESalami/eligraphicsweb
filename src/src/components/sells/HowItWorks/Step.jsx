import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
  background: white;
  padding: 25px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
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

const StepTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  margin: 15px 0;
  color: #2d3436;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #4b5563;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
`;

const Step = ({ number, title, description }) => {
  return (
    <StepContainer>
      <StepNumber>{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </StepContainer>
  );
};

export default Step;