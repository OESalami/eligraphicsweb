import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FAQItemContainer = styled(motion.div)`
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
    }
  }

  .answer {
    font-family: 'Poppins', sans-serif;
    color: #4b5563;
    line-height: 1.6;
    font-size: 1rem;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0;
    margin-top: 0;
    padding-left: 10px;
  }

  &.open .answer {
    max-height: 500px;
    opacity: 1;
    margin-top: 10px;
  }
`;

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <FAQItemContainer className={isOpen ? 'open' : ''}>
      <div className="question-header" onClick={onToggle}>
        <h3>{question}</h3>
        <svg /* Icon here */ />
      </div>
      <div className="answer">{answer}</div>
    </FAQItemContainer>
  );
};

export default FAQItem;