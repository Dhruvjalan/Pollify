import React, { useEffect, useRef } from "react";

const Counter = ({n, pre, post}) => {
  const counterRef = useRef(null);

  useEffect(() => {
    let count = 0;
    const target = n; // <final number>
    const duration = 2000;
    const steps = 100;

    const increment = target / steps;
    const intervalTime = duration / steps;

    const updateCounter = () => {
      count += increment;
      if (counterRef.current) {
        if (count < target) {
          counterRef.current.innerText = Math.ceil(count);
          setTimeout(updateCounter, intervalTime);
        } else {
          counterRef.current.innerText = target;
        }
      }
    };

    updateCounter();
  }, []);

  return (
    <div className='counter d-flex flex-row'>
      <div style={{fontSize:"2rem",color:'#1e90ff',alignSelf:'flex-start',margin:'0 0 1rem 1rem',}}>
      {''?!pre:pre}
    </div>
    <div
      ref={counterRef}
      className="counter"
      style={{ fontSize: "5rem", fontWeight: "bold" ,color: '#1e90ff' }}
    >
      0
    </div>
    <div style={{fontSize:"2rem",color:'#1e90ff',alignSelf:'flex-end',margin:'0 0 1rem 1rem',}}>
      {''?!post:post}
    </div>
    </div>
  );
};

export default Counter;
