import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedNumber = ({ value, format }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const formatNumber = (num) => {
    if (format === 'k') {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num;
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += value / steps;
        if (current > value) {
          setCount(value);
          clearInterval(timer);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, hasAnimated]);

  return <span ref={ref}>{formatNumber(count)}</span>;
};

export default AnimatedNumber;