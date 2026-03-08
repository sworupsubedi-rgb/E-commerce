import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
   
    <div className="fixed top-2 right-4 z-[1000] pointer-events-none">
      <div className="flex gap-4">
     
        <b className="mix-blend-difference text-white cursor-pointer uppercase tracking-widest text-sm">
          {now.toLocaleDateString()}
        </b>
        <b className="mix-blend-difference text-white cursor-pointer uppercase tracking-widest text-sm">
          {now.toLocaleTimeString()}
        </b>
      </div>
    </div>
  );
};

export default Clock;