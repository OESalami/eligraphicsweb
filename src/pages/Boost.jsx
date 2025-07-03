import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #e5e7eb 60%, #c7d2fe 100%);
  /* Changed from #f9fafb and #e0f2fe to slightly dimmer grays/blues */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  @media (max-width: 600px) {
    min-height: unset;
    padding: 24px 8px 24px 8px;
    /* Add extra space at top and bottom */
  }
`;

const FormCard = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: #f3f4f6; /* Slightly dimmer than #fff */
  padding: 32px 24px;
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(30, 41, 59, 0.10), 0 1.5px 0 #a5b4fc inset;
  border: 2.5px solid #dbeafe;
  @media (max-width: 600px) {
    padding: 35px 35px;
    max-width: 98vw;
    min-width: 0;
    border-radius: 14px;
    margin: 24px 0;
    box-shadow: 0 2px 10px rgba(30,41,59,0.08);
  }
`;

const Heading = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.3;
  background: linear-gradient(90deg, #007bff, #00c6ff 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
`;

const SubHeading = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  color: gray;
  margin-bottom: 28px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 18px;
    padding: 0 2px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 600px) {
    align-items: stretch;
    width: 100%;
    gap: 10px;
  }
`;

const Label = styled.label`
  font-weight: 700;
  color: #007bff;
  margin: 10px 0 5px;
  background: linear-gradient(90deg, #007bff, #00c6ff 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin: 8px 0 3px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  border: 1.5px solid #b6e0ff;
  background: #f8f8fa;
  font-size: 1rem;
  margin-bottom: 2px;
  transition: border 0.2s;
  &:focus {
    border: 2px solid #007bff;
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  border: 1.5px solid #b6e0ff;
  background: #f8f8fa;
  font-size: 1rem;
  margin-bottom: 2px;
  transition: border 0.2s;
  &:focus {
    border: 2px solid #007bff;
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 8px;
  }
`;

const PriceBox = styled.div`
  margin: 18px 0 10px 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: #16a34a;
  text-align: center;
  background: linear-gradient(90deg, #eaffea 60%, #d1fae5 100%);
  border-radius: 8px;
  padding: 10px 0;
  border: 1.5px solid #16a34a;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 7px 0;
    margin: 12px 0 7px 0;
  }
`;

const TimeBox = styled.div`
  margin: 0 0 10px 0;
  font-size: 1rem;
  color: #007bff;
  text-align: center;
  background: #f0f7ff;
  border-radius: 8px;
  padding: 8px 0;
  border: 1px solid #b6e0ff;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 6px 0;
    margin-bottom: 7px;
  }
`;

const NoteBox = styled.div`
  margin: 0 0 10px 0;
  font-size: 0.98rem;
  color: #b45309;
  background: #fffbe8;
  border-radius: 8px;
  padding: 10px 12px;
  border-left: 4px solid #fbbf24;
  @media (max-width: 600px) {
    font-size: 0.93rem;
    padding: 7px 8px;
    margin-bottom: 7px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #007bff 60%, #00c6ff 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,123,255,0.08);
  transition: background 0.2s, transform 0.1s;
  &:hover {
    background: linear-gradient(90deg, #0056b3 60%, #00aaff 100%);
    transform: translateY(-2px) scale(1.01);
  }
  position: relative;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 10px;
    margin-top: 7px;
  }
`;

const SpinnerAnim = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Spinner = styled.div`
  border: 3px solid #e0e0e0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  animation: ${SpinnerAnim} 0.7s linear infinite;
  margin: 0 auto;
  margin-top: 10px;
`;

const StartedMsg = styled.div`
  margin-top: 14px;
  color: #16a34a;
  font-weight: 600;
  text-align: center;
  font-size: 1.08rem;
`;

// 1. Update platforms structure
const platforms = [
  {
    name: "Instagram",
    services: [
      { 
        name: "Followers🚀Best Working🚀♻️", 
        quantities: [
          { value: 500, price: 17 },
          { value: 600, price: 20 },
          { value: 700, price: 23 },
          { value: 800, price: 26 },
          { value: 900, price: 29 },
          { value: 1000, price: 33 },
          { value: 1500, price: 48 },
          { value: 2000, price: 63 },
        ]
      },
      { 
        name: "Post Likes", 
        quantities: [
          { value: 500, price: 5 },
          { value: 1000, price: 10 },
          { value: 2000, price: 15 }
        ]
      },
      { 
        name: "Video/Reel Views", 
        quantities: [
          { value: 500, price: 3 },
          { value: 1000, price: 5 },
          { value: 2000, price: 10 }
        ]
      },
      { 
        name: "Story Views", 
        quantities: [
          { value: 500, price: 3 },
          { value: 1000, price: 5 },
          { value: 2000, price: 10 }
        ]
      }
    ]
  },
  {
    name: "Tiktok",
    services: [
      { 
        name: "Followers |NEW UPDATE | ♻️♻️🚀🚀", 
        quantities: [
          { value: 100, price: 5 },
          { value: 200, price: 10 },
          { value: 300, price: 15 },
          { value: 400, price: 20},
          { value: 500, price: 25 },
          { value: 600, price: 28 },
          { value: 700, price: 33 },
          { value: 800, price: 36 },
          { value: 900, price:  40},
          { value: 1000, price: 45 },
        ]
      },
      { 
        name: "Post Likes", 
        quantities: [
          { value: 500, price: 5 },
          { value: 1000, price: 9 },
          { value: 2000, price: 12 },
          { value: 3000, price: 15 },
          { value: 4000, price: 16 },
          { value: 5000, price: 17 },
        ]
      },
      { 
        name: "Video Views", 
        quantities: [
          { value: 500, price: 3 },
          { value: 600, price: 4 },
          { value: 700, price: 5 },
          { value: 800, price: 6 },
          { value: 900, price: 7 },
          { value: 1000, price: 8 },
          { value: 5000, price: 13 },
          { value: 7000, price: 15 },
          { value: 20000, price: 19 },
        ]
      },
      { 
        name: "Video Saves", 
        quantities: [
          { value: 500, price: 3 },
          { value: 1000, price: 5 },
          { value: 1500, price: 7 }
        ]
      },
      { 
        name: "Video Shares", 
        quantities: [
          { value: 500, price: 3 },
          { value: 1000, price: 5 },
          { value: 1500, price: 7 },
          { value: 2000, price: 9 },
        ]
      },
      { 
        name: "Livestream Likes", 
        quantities: [
          { value: 500, price: 2 },
          { value: 1000, price: 4 },
          { value: 1500, price: 6 },
          { value: 2000, price: 8 },
        ]
      },
      { 
        name: "Livestream Viewers (120min)", 
        quantities: [
          { value: 150, price: 15 },
          { value: 300, price: 25 },
          { value: 300, price: 37 }
        ]
      },
    ]
  },
  {
    name: "Audiomack",
    services: [
      { 
        name: "Followers | Non Drop ", 
        quantities: [
          { value: 500, price: 30 },
          { value: 700, price: 40 },
          { value: 1000, price: 55 }
        ]
      },
      { 
        name: "Direct Plays | Non Drop |", 
        quantities: [
          { value: 500, price: 7 },
          { value: 700, price: 10 },
          { value: 1000, price: 15 }
        ]
      },
      { 
        name: "Global Plays | Non Drop |", 
        quantities: [
          { value: 500, price: 8 },
          { value: 700, price: 11 },
          { value: 1000, price: 16 }
        ]
      },
      { 
        name: "Audiomack Plays | Non Drop|", 
        quantities: [
          { value: 300, price: 5 },
          { value: 500, price: 7 },
          { value: 700, price: 9 },
          { value: 1000, price: 11 },
        ]
      },
      { 
        name: "Album Plays | Non Drop|", 
        quantities: [
          { value: 500, price: 18 },
          { value: 700, price: 24 },
          { value: 1000, price: 34 },
        ]
      },
      { 
        name: "Audiomack Likes", 
        quantities: [
          { value: 100, price: 6 },
          { value: 300, price: 17 },
          { value: 500, price: 28 },
        ]
      },
    ]
  },
  {
    name: "YouTube",
    services: [
      { 
        name: "Subscribers | ♻️ | Non Drop | New Update📡💎 ", 
        quantities: [
          { value: 100, price: 18 },
          { value: 200, price: 33 },
          { value: 300, price: 48 },
          { value: 500, price: 78 },
          { value: 700, price: 108 },
          { value: 1000, price: 155 }
        ]
      },
      { 
        name: "Views HQ", 
        quantities: [
          { value: 500, price: 20 },
          { value: 700, price: 25 },
          { value: 1000, price: 35 }
        ]
      },
    ]
  },
  {
    name: "Facbook",
    services: [
      { 
        name: "Profile/Followers | Non Drop | High Quality 🚀| ", 
        quantities: [
          { value: 100, price:  5},
          { value: 200, price: 8 },
          { value: 300, price: 12 },
          { value: 500, price: 19 },
          { value: 700, price: 25 },
          { value: 1000, price: 35 }
        ]
      },
      { 
        name: "Post Likes (NEW)♻️☀️", 
        quantities: [
          { value: 100, price: 3 },
          { value: 200, price: 6 },
          { value: 300, price: 9 },
          { value: 400, price: 12 },
          { value: 500, price: 13 },
          { value: 700, price: 15 },
          { value: 1000, price: 23 }
        ]
      },
      { 
        name: "Comments 👉 [Random 👩] | Non Drop|", 
        quantities: [
          { value: 10, price: 9 },
          { value: 20, price: 15 },
          { value: 30, price: 23 },
          { value: 40, price: 28 },
          { value: 50, price: 35 }
        ]
      },
    ]
  },
  {
    name: "Snapchat",
    services: [
      { 
        name: "Followers | Non Drop |", 
        quantities: [
          { value: 50, price: 33 },
          { value: 70, price: 45 },
          { value: 100, price: 65 },
        ]
      },
    ]
  },
  {
    name: "WhatsApp",
    services: [
        { 
          name: "Channel Post Emoji Reactions [Random❤️‍🔥👏🤯👀🙏💯]", 
          quantities: [
            { value: 100, price: 8.29 },
            { value: 200, price: 15.58 },
            { value: 300, price: 22.87 },
            { value: 400, price: 31.16 },
            { value: 500, price: 38.45 },
          ]
        },
      {
        name: "Channel Post Emoji Reactions [👍]", 
        quantities: [
          { value: 100, price: 9 },
          { value: 200, price: 15.60 },
          { value: 300, price: 23 },
          { value: 400, price: 31.16 },
          { value: 500, price: 67.45 },
        ]
      },
    ]
  },
  {
    name: "Spotify",
    services: [
      { 
        name: "Spotify Plays 👉Global |Non Drop |", 
        quantities: [
          { value: 50, price: 2.50 },
          { value: 70, price: 3.50 },
          { value: 100, price: 4 },
          { value: 200, price: 7 },
          { value: 300, price: 9 },
          { value: 400, price: 12.50 },
          { value: 500, price: 14 }
        ]
      },
    ]
  },
  {
    name: "Telegram",
    services: [
      { 
        name: "Members👉High Quality👉Non Drop", 
        quantities: [
          { value: 50, price: 5 },
          { value: 70, price: 7 },
          { value: 100, price: 11 },
          { value: 500, price: 30 },
        ]
      },
      { 
        name: "Post Views👉Fast & Real👉Last 5 Post", 
        quantities: [
          { value: 100, price: 0.60 },
          { value: 200, price: 1.30 },
          { value: 300, price: 2 },
          { value: 400, price: 2.60 },
          { value: 500, price: 3 }
        ]
      },
      { 
        name: "Post Views👉Fast & Real👉Last 10 Post", 
        quantities: [
          { value: 100, price: 1.50 },
          { value: 200, price: 2 },
          { value: 300, price: 2.50 },
          { value: 400, price: 3 },
          { value: 500, price: 3.50 },
        ]
      },
      { 
        name: "Post Views👉Fast & Real👉Last 15 Post", 
        quantities: [
          { value: 100, price: 1.50 },
          { value: 200, price: 2.50 },
          { value: 300, price: 3.50 },
          { value: 400, price: 4.50 },
          { value: 500, price: 5.50 },
        ]
      },
      { 
        name: "Reactions 💯👻👀⚡😊🎊👍- Lifetime Guaranteed", 
        quantities: [
          { value: 100, price: 1 },
          { value: 200, price: 1.50 },
          { value: 300, price: 2 },
          { value: 400, price: 2.50 },
          { value: 500, price: 3 },
        ]
      },
      { 
        name: "Premium Reactions + Views 👉Random Positive Reaction[💯👏❤️‍🔥🔥🥰😊🎊]", 
        quantities: [
          { value: 100, price: 2.50 },
          { value: 200, price: 3.50 },
          { value: 300, price: 4.50 },
          { value: 400, price: 5.50 },
          { value: 500, price: 6.50 },
        ]
      },
      { 
        name: "Premium Reactions + Views 👉Random Negative Reaction[🙅‍♂️👎🤯😳🤮🤧]", 
        quantities: [
          { value: 100, price: 2.50 },
          { value: 200, price: 3.50 },
          { value: 300, price: 4.50 },
          { value: 400, price: 5.50 },
          { value: 500, price: 6.50 },
        ]
      },
    ]
  },
];

// Helper: Dynamic time estimate
function getAverageTime(platform, service, quantity) {
  if (platform === "Instagram") {
    if (service === "Followers") return quantity <= 500 ? "1-3 hours" : "3-6 hours";
    if (service === "Likes") return quantity <= 500 ? "30-90 mins" : "2-4 hours";
    if (service === "Views") return quantity <= 500 ? "15-60 mins" : "1-2 hours";
  }
  if (platform === "Twitter") {
    if (service === "Followers") return quantity <= 200 ? "2-4 hours" : "6-12 hours";
    if (service === "Retweets") return quantity <= 200 ? "1-2 hours" : "3-6 hours";
    if (service === "Likes") return quantity <= 200 ? "1-2 hours" : "3-6 hours";
  }
  if (platform === "YouTube") {
    if (service === "Subscribers") return quantity <= 1000 ? "6-12 hours" : "1-2 days";
    if (service === "Views") return quantity <= 1000 ? "2-6 hours" : "1-2 days";
    if (service === "Likes") return quantity <= 1000 ? "2-6 hours" : "1-2 days";
  }
  return "Varies";
}

// Helper: Dynamic note
function getNote(platform, service, quantity) {
  if (platform === "Instagram" && service === "Followers")
    return "Note: Please ensure your Instagram account is public during the boost.";
  if (platform === "Twitter" && service === "Followers")
    return "Note: Twitter boosts may take longer if your account is new or private.";
  if (platform === "YouTube" && service === "Subscribers")
    return "Note: YouTube subscriber boosts may reflect gradually over 24 hours.";
  return "Note: Please do not change your username or make your account private during the boost.";
}

// Helper to determine if service is account-based or post-based
const isAccountBased = (serviceName) => {
  const accountKeywords = ["Followers", "Subscribers", "Members"];
  return accountKeywords.some(keyword => serviceName.toLowerCase().includes(keyword.toLowerCase()));
};

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  pointer-events: auto;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  padding: 22px 20px 18px 20px;
  min-width: 290px;
  max-width: 95vw;
  margin: 32px 32px 32px 32px;
  position: relative;
  z-index: 1001;
  @media (max-width: 600px) {
    margin: 18px 8px 8px 8px;
    min-width: 0;
    width: 90vw;
    max-width: 340px;
    padding: 12px 6px 10px 10px;
    border-radius: 12px;
    /* Add more space around the modal */
    box-sizing: border-box;
  }
`;

const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 1.13rem;
  margin-bottom: 8px;
  color: #007bff;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 8px; right: 12px;
  background: none;
  border: none;
  font-size: 1.3rem;
  color: #888;
  cursor: pointer;
`;

const CopyBtn = styled.button`
  margin-left: 8px;
  padding: 2px 8px;
  font-size: 0.98rem;
  border-radius: 5px;
  border: 1px solid #b6e0ff;
  background: #f0f7ff;
  color: #007bff;
  cursor: pointer;
  &:active { background: #e0f2fe; }
`;

const SendProofBtn = styled.a`
  display: inline-block;
  margin-top: 14px;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  border-radius: 7px;
  padding: 9px 18px;
  text-decoration: none;
  font-size: 1.04rem;
  box-shadow: 0 2px 8px rgba(37,211,102,0.08);
  transition: background 0.2s;
  &:hover { background: #128c7e; }
`;

function PaymentModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef();

  const momoNumber = "0532518124";
  const momoName = "Salami Malachi";
  const whatsappMsg = encodeURIComponent(
    `Hi, I just sent: \nMoMo Name: \nPlease send a screenshot of your payment.`
  );
  const whatsappUrl = `https://wa.me/233532518124?text=${whatsappMsg}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(momoNumber);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1200);
  };

  if (!open) return null;
  return (
    <ModalOverlay>
      <ModalBox>
        <ModalClose onClick={onClose} title="Close">&times;</ModalClose>
        <ModalTitle>Send Payment Proof</ModalTitle>
        <div style={{marginBottom: 8}}>
          <b>After payment, send a screenshot of your payment.</b>
        </div>
        <div style={{marginBottom: 7}}>
          <span style={{fontWeight: 600}}>Momo Number:</span> {momoNumber}
          <CopyBtn onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</CopyBtn>
        </div>
        <div style={{marginBottom: 7}}>
          <span style={{fontWeight: 600}}>Account Name:</span> {momoName}
        </div>
        <SendProofBtn
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send Proof
        </SendProofBtn>
      </ModalBox>
    </ModalOverlay>
  );
}

const Boost = () => {
  // Set initial state using the new structure
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [service, setService] = useState(platforms[0].services[0]);
  const [quantity, setQuantity] = useState(platforms[0].services[0].quantities[0]);
  const [accountLink, setAccountLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Price is now based on the selected quantity object
  const price = quantity.price.toFixed(2);

  const handlePlatformChange = (e) => {
    const platform = platforms.find(p => p.name === e.target.value);
    setSelectedPlatform(platform);
    setService(platform.services[0]);
    setQuantity(platform.services[0].quantities[0]);
  };

  const handleServiceChange = (e) => {
    const selectedService = selectedPlatform.services.find(s => s.name === e.target.value);
    setService(selectedService);
    setQuantity(selectedService.quantities[0]);
  };

  const handleQuantityChange = (e) => {
    const selectedQuantity = service.quantities.find(q => q.value === Number(e.target.value));
    setQuantity(selectedQuantity);
  };

  // EmailJS integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStarted(false);

    // Replace with your EmailJS service, template, and user IDs
    const serviceId = 'service_6pmjkum';
    const templateId = 'template_6lu8zh8';
    const publicKey = 'MZdBz-jfKEoH95YCq';

    const templateParams = {
      platform: selectedPlatform.name,
      time: getAverageTime(selectedPlatform.name, service.name, quantity),
      service: service.name,
      quantity: quantity.value, // This sends just the number
      accountLink: accountLink,
      price: `₵${price}`,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStarted(true);
    } catch (err) {
      alert("Failed to start boost. Please try again.");
    }
    setLoading(false);
  };

  // Show modal every 2 minutes
  useEffect(() => {
    let interval;
    let timeout;
    function showModal() {
      setModalOpen(true);
      // Optionally auto-close after X seconds:
      // timeout = setTimeout(() => setModalOpen(false), 20000);
    }
    showModal(); // Show on first load
    interval = setInterval(showModal, 20000); // Every 2 min
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PageContainer>
      <PaymentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <FormCard
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <Heading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Boost Your Social Media
        </Heading>
        <SubHeading
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          🚀 Select your platform, pick a service, choose quantity and watch your social media grow 📈✨
        </SubHeading>
        <Form onSubmit={handleSubmit}>
          <Label as={motion.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Select Platform:</Label>
          <Select value={selectedPlatform.name} onChange={handlePlatformChange}>
            {platforms.map(platform => (
              <option key={platform.name} value={platform.name}>{platform.name}</option>
            ))}
          </Select>

          <Label as={motion.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>Select Service:</Label>
          <Select value={service.name} onChange={handleServiceChange}>
            {selectedPlatform.services.map(s => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </Select>

          {/* 5. Dynamic label and placeholder */}
          <Label as={motion.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {isAccountBased(service.name) ? `${selectedPlatform.name} Account Link:` : `${selectedPlatform.name} Post Link:`}
          </Label>
          <Input
            type="text"
            placeholder={
              isAccountBased(service.name)
                ? `Enter your ${selectedPlatform.name} account link`
                : `Enter your ${selectedPlatform.name} post link`
            }
            value={accountLink}
            onChange={e => setAccountLink(e.target.value)}
            required
          />

          <Label as={motion.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>Quantity:</Label>
          <Select value={quantity.value} onChange={handleQuantityChange}>
            {service.quantities.map(q => (
              <option key={q.value} value={q.value}>
                {q.value} 
              </option>
            ))}
          </Select>

          <PriceBox as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Price: <span style={{fontWeight: 900}}>₵{price}</span>
          </PriceBox>

          <TimeBox as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            Average time to complete: <b>{getAverageTime(selectedPlatform.name, service.name, quantity)}</b>
          </TimeBox>

          <NoteBox as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {getNote(selectedPlatform.name, service.name, quantity)}
          </NoteBox>

          <Button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Boost"}
          </Button>
          {loading && <Spinner />}
          {started && <StartedMsg>Boost started! You will receive updates soon.</StartedMsg>}
        </Form>
      </FormCard>
    </PageContainer>
  )
}

export default Boost
