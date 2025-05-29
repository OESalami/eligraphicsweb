import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // Set active tab to 'sellwithus' when on that route
    if (location.pathname === '/sellwithus') {
      setActiveTab('sellwithus');
    }
  }, [location]);

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return { activeTab, handleSetActiveTab };
};

export default useActiveTab;