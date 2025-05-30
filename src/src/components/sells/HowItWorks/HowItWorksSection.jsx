import React from 'react';
import { motion } from 'framer-motion';
import Step from './Step';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Apply to Partner",
      description: "Submit your details and product info"
    },
    {
      number: 2,
      title: "We List & Promote",
      description: "Your products appear on our platforms and other social media platforms"
    },
    {
      number: 3,
      title: "We Handle Customer Flow",
      description: "We manage inquiries, orders, and support to ensure a seamless experience."
    },
    {
      number: 4,
      title: "You Get Paid Per Sale",
      description: "Payments are fast, secure, and sent directly to your account. Track every earning in real-time."
    }
  ];

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How It Works
      </motion.h2>
      <div>
        {steps.map((step, index) => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;