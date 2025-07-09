import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const handleclickdec = () => {
    setcount(count - 1);
  };

  const handleclick = () => {
    setcount(count + 1);
  
  };
  return (
    <div>
      count : {count}
      <button
        className="bg-green-500 rounded-4xl px-2 py-2 border-2"
        onClick={handleclick}
      >
        increase
      </button>
      <button
        className="bg-red-200 border-2 rounded-4xl px-2 py-2"
        onClick={handleclickdec}
      >
        decrease
      </button>
    </div>
  );
};

export default Counter;
