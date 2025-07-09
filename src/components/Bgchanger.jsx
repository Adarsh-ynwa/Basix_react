import React from "react";

const Bgchanger = () => {
  const [color, setcolor] = useState("green");
  return (
    <div
      className="w-full h-screen justify-between items-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-4xl justify-center items-center"> bg changer</div>

      <button
        className="text-red-600 rounded-4xl border-2"
        onClick={() => setcolor("red")}
      >
        {" "}
        red
      </button>
      <button
        className="text-red-600 rounded-4xl border-2"
        onClick={() => setcolor("green")}
      >
        {" "}
        green
      </button>
      <button
        className="text-red-600 rounded-4xl border-2"
        onClick={() => setcolor("yellow")}
      >
        {" "}
        yellow
      </button>
    </div>
  );
};

export default Bgchanger;
