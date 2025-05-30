import styled from 'styled-components';

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

export default PrimaryButton;