import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../App.css';  // Import your CSS

const ScrollText = () => {
  // Setup IntersectionObserver hook with vertical scroll trigger
  const { ref, inView } = useInView({
    triggerOnce: false,   // Trigger only once when in view
    threshold: 0.1,      // Trigger when 10% of the element is in the viewport
  });

  return (
    <>
    
        <div
        ref={ref}
        className={`text-appear ${inView ? 'visible' : ''}`}  // Apply 'visible' class when in view
        >
        <p style={{fontWeight:'bold', fontsize: '24px', textAlign:'center'}}>Why work with VSDigital?</p>

        </div>

        <div
        ref={ref}
        className={`text-slide-right ${inView ? 'visible' : ''}`}  // Apply 'visible' class when in view
        >
        <p>Precision</p>
        
        </div>

        <div
        ref={ref}
        className={`text-slide-left ${inView ? 'visible' : ''}`}  // Apply 'visible' class when in view
        >
        <p>Accuracy</p>

        </div>

    
  
    </>
  );
};

export default ScrollText;
