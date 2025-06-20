import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import emailjs from 'emailjs-com';

const testimonials = [
  { name: 'Daniel K.', comment: 'Becoming a Growth Partner changed my life. The commission structure is generous and the process is smooth.' },
  { name: 'Linda A.', comment: 'I never imagined referring buyers could be this rewarding. Great support and easy payouts!' },
  { name: 'Samuel N.', comment: 'Flexible, profitable, and very professional. Highly recommend joining.' }
];

const faqs = [
  { question: 'How do I earn commissions?', answer: 'Get paid a commission for every pair of buyers you bring in who complete a purchase.' },
  { question: 'Is there any cost to join?', answer: 'No. Joining our referral program is completely free.' },
  { question: 'When do I get paid?', answer: 'You get paid daily for every successful purchase made by your referrals.' }
];

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const scrollMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const CTASection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(270deg, #f8f9ff, #f0f3ff, #e8ebff, #f0f3ff, #f8f9ff);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 30px;
  margin: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #6366f1, #a855f7);
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3.5rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: #4b5563;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const CTAButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-direction: column;
    align-items: stretch;
  }
`;

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

  &:hover {
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const WhatsAppLink = styled.a`
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  color: #25D366;
  text-decoration: none;

  svg {
    margin-right: 6px;
    vertical-align: middle;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const SectionContainer = styled(motion.div)`
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
`;

const HighlightBox = styled.div`
  background: #f3f4f6;
  border-left: 6px solid #6366f1;
  padding: 30px 25px;
  margin-top: -20px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #374151;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
  text-align: center;
`;

const Testimonial = styled(motion.div)`
  padding: 30px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
  background: #f9f9ff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  p {
    font-size: 1.2rem;
    font-style: italic;
    color: #4b5563;
    margin-bottom: 10px;
  }

  span {
    display: block;
    font-weight: 600;
    color: #1f2937;
    font-size: 1.1rem;
  }
`;

const PartnerCount = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  font-weight: 500;
`;

// The rest of the file remains unchanged.

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <FAQItemStyled open={open}>
      <div className="faq-summary" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      {open && <p>{answer}</p>}
    </FAQItemStyled>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FAQItemStyled = styled.div`
  background: none;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  transition: transform 0.3s ease;

  .faq-summary {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.3rem;
    color: #2d3436;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    flex-shrink: 0;
    margin-left: 12px;
    color: #a855f7;
    font-size: 1.4rem;
    transition: transform 0.3s ease;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
    margin-top: 10px;
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  padding: 14px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6366f1;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 14px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6366f1;
    outline: none;
  }
`;

export default function ApplicantsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);


  const emailServiceID = 'service_hqwez6r';
  const emailTemplateID = 'template_ywxfhul';
  const emailUserID = 'RARgA_cwPenH2Zs2r';

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  location: '',
  reason: '',
  });

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
  return emailjs.send(emailServiceID, emailTemplateID, formData, emailUserID);
  };

  const sendToGoogleSheet = () => {
  const sheetEndpoint = "https://script.google.com/macros/s/AKfycbyXWYyGSfMHjHlY9Noa7_Mo290pt_oEOoU6hwTN4LDWQ0Y2lrgvJvjRp2_eZz3sog-F3g/exec";

  return fetch(sheetEndpoint, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const url = "https://script.google.com/macros/s/AKfycbzyF0JBqstURDxTeBRQAWR08SOyPZ_gBKhe7as7lXVN41pyXjv8VViKiutYC9r_FrEk/exec";
  const form = e.target;
  const formEncoded = `Name=${encodeURIComponent(form.name.value)}&Email=${encodeURIComponent(form.email.value)}&Phone=${encodeURIComponent(form.phone.value)}&Location=${encodeURIComponent(form.location.value)}&Reason=${encodeURIComponent(form.reason.value)}`;

  try {
    // Send to both email and Google Sheet
    await Promise.all([
      sendEmail(),
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formEncoded,
      }).then(res => res.text())
    ]);

    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      reason: '',
    });
    
    setSuccessMessageVisible(true);
    setTimeout(() => setSuccessMessageVisible(false), 1000); // 1 minutes

  } catch (error) {
    console.error("Submission error:", error);
    alert("There was an error. Please try again. Or you can apply via WhatsApp.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="overflow-hidden">
      <PageContainer>
        <motion.div initial="hidden" whileInView="visible" variants={scrollMotion} transition={{ duration: 0.5 }}>
      <CTASection>
        <CTAContent>
          <motion.h2 initial="hidden" whileInView="visible" variants={scrollMotion} transition={{ duration: 0.6 }}>
            Become a Growth Partner
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={scrollMotion} transition={{ duration: 0.7 }}>
            Refer buyers, earn commissions, and grow with us. Join hundreds of successful partners!
          </motion.p>
          <CTAButtonGroup>
            <ScrollLink to="applicationForm" smooth={true} duration={600} offset={-60}>
              <PrimaryButton>Apply Now</PrimaryButton>
            </ScrollLink>
          </CTAButtonGroup>
        </CTAContent>
      </CTASection>

      <SectionContainer initial="hidden" whileInView="visible" variants={scrollMotion}>
        <SectionTitle>Why Join Our Referral Program?</SectionTitle>
        <HighlightBox>
          Earn money by connecting people to products they already need. No investment, no hassle. Just share and earn. Whether you’re a student, entrepreneur, or simply have a strong network, this is your opportunity to grow with us.
        </HighlightBox>
      </SectionContainer>

      <SectionContainer initial="hidden" whileInView="visible" variants={scrollMotion}>
        <SectionTitle>What Our Partners Say</SectionTitle>
        {testimonials.map((item, index) => (
          <Testimonial key={index} initial="hidden" whileInView="visible" variants={scrollMotion}>
            <p>“{item.comment}”</p>
            <span>- {item.name}</span>
          </Testimonial>
        ))}
        <PartnerCount>Trusted by <strong>85+</strong> partners</PartnerCount>
      </SectionContainer>

      <SectionContainer initial="hidden" whileInView="visible" variants={scrollMotion}>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </SectionContainer>

      <SectionContainer id="applicationForm" initial="hidden" whileInView="visible" variants={scrollMotion}>
        <SectionTitle>Apply to Become a Partner</SectionTitle>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', color: '#4b5563', textAlign: 'center', marginBottom: '30px' }}>
          Fill out the form below and we’ll get back to you shortly.
        </p>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Full Name" required />
            <Input type="email" name='email' value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            <Input type="tel" name='phone' value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
            <Input type="text" name='location' value={formData.location} onChange={handleChange} placeholder="Location (City, Country)" required />
            <TextArea rows="4" name='reason' value={formData.reason} onChange={handleChange} placeholder="Tell us briefly why you'd be a great Growth Partner (optional)"/>
            <PrimaryButton 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-lg text-white ${
                isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
            {isSubmitting ? "Submitting..." : "Submit"}
            </PrimaryButton>

            <AnimatePresence>
            {successMessageVisible && (
            <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              color: '#10B981', 
              textAlign: 'center', 
              marginTop: '15px', 
              fontWeight: '500', 
              fontSize: '1rem' 
            }}>
              ✅ Application submitted successfully! We’ll be in touch soon.
            </motion.p>
            )}
            </AnimatePresence>



            <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: '600', color: '#6b7280' }}>OR</p>
            <WhatsAppLink href="https://wa.me/233532518124?text=Hello!%20I'm%20interested%20in%20becoming%20a%20Growth%20Partner.%20Here%20are%20my%20details%3A%0A-Name%3A%20%0A-Email%3A%20%0APhone%3A%20%0ALocation%3A%20%0AReason%3A%20" target="_blank">
               Apply via WhatsApp
            </WhatsAppLink>
          </Form>
        </FormContainer>
      </SectionContainer>
      </motion.div>
    </PageContainer>
    </div>
  );
}
