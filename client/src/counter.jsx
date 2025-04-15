import React, { useEffect, useRef } from "react";

const Counter = ({n}) => {
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
    <div
      ref={counterRef}
      className="counter"
      style={{ fontSize: "3rem", fontWeight: "bold" }}
    >
      0
    </div>
  );
};

export default Counter;
