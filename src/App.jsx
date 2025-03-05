import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-400">
          Frontend Developer | React & Tailwind Enthusiast
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default App;
