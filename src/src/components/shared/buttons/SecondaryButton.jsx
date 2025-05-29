import styled from 'styled-components';

const SecondaryButton = styled.button`
  background: white;
  color: #6366f1;
  border: 2px solid #6366f1;
  padding: 18px 36px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 14px 28px; // Reduced padding
    font-size: 1rem; // Smaller font size
    width: 100%; // Full width on mobile
    max-width: 300px; // Maximum width to maintain readability
    margin: 10px auto 0; // Center the button
  }
`;

export default SecondaryButton;