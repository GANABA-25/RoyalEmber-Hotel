import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const NumberCount = ({ maxValue, countInterval, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter <= maxValue) {
        setCount(counter);
        counter++;
      } else {
        clearInterval(interval);
      }
    }, countInterval);

    return () => clearInterval(interval);
  }, [inView, countInterval, maxValue]);

  return (
    <div ref={ref}>
      {inView && (
        <div>
          <h1 className="text-4xl font-bold my-4 opacity-80 md:text-5xl">
            {count}
          </h1>
          <p className="uppercase text-sm opacity-60 font-bold">{label}</p>
        </div>
      )}
    </div>
  );
};

export default NumberCount;
