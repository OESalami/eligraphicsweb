import React from 'react';
import styled from 'styled-components';
import BenefitCard from './BenefitCard';

const BenefitsSectionContainer = styled.section`
  padding: 80px 0;
  text-align: center;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  border-radius: 20px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BenefitsSection = () => {
  const benefitCards = [
    {
      icon: 'faBullhorn',
      title: "No Ads Needed",
      description: "We promote your products using our platforms and audience. You don't pay for marketing"
    },
    {
      icon: 'faHandshake',
      title: "Commission-Based Partnership",
      description: "Only pay a small agreed percentage per sale. No upfront fees"
    },
    {
      icon: 'faChartLine',
      title: "Earn More, Do Less",
      description: "Focus on creating, we focus on selling. You earn from every sale without the hassle"
    }
  ];

  return (
    <BenefitsSectionContainer>
      <h2>Why Sell With Us?</h2>
      <BenefitsGrid>
        {benefitCards.map((card, index) => (
          <BenefitCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </BenefitsGrid>
    </BenefitsSectionContainer>
  );
};

export default BenefitsSection;