import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../shared/buttons/PrimaryButton';
import SecondaryButton from '../../shared/buttons/SecondaryButton';

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
  border-radius: 30px;
  margin: 80px 0;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3.5rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: #4b5563;
    margin-bottom: 40px;
  }
`;

const CTAButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
`;

const CallToAction = () => {
  return (
    <CTASection>
      <CTAContent>
        <h2>Ready to Transform Your Designs into Profit?</h2>
        <p>Join our creative community and start earning from your designs today</p>
        <CTAButtonGroup>
          <PrimaryButton>Start Selling Today</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </CTAButtonGroup>
      </CTAContent>
    </CTASection>
  );
};

export default CallToAction;