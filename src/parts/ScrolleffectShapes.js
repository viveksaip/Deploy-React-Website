import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../App.css';  // Import your CSS

const ScrollText = () => {
  // Setup IntersectionObserver hook with vertical scroll trigger

  /*
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,   // Trigger only once when in view
    threshold: 0.1,      // Trigger when 10% of the element is in the viewport
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  */

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  return (
    <>

      {/* Cylinder 3 */}
      <div
        ref={ref3}
        className={`text-slide-left ${inView3 ? 'visible' : ''}`}
      >
        <div className="horizontal-cylinder">
          <p style={{ color: 'white', fontWeight: 'bold' }}>Why work with VSDigital?</p>
        </div>
      </div>

      {/* Cylinder 4 */}
      <div
        ref={ref4}
        className={`text-slide-left ${inView4 ? 'visible' : ''}`}
      >
        <div className="horizontal_cylinder_medium">
          <p style={{ color: 'white', fontWeight: 'bold' }}>Quality of Service</p>
        </div>
      </div>

      {/* Cylinder 5 */}
      <div
        ref={ref5}
        className={`text-slide-left ${inView5 ? 'visible' : ''}`}
      >
        <div className="horizontal_cylinder_small">
          <p style={{ color: 'white', fontWeight: 'bold' }}>On time delivery</p>
        </div>
      </div>
    </>
  );
};

export default ScrollText;
