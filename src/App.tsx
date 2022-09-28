import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center min-h-[520px] text-3xl font-extralight">
      <div className="w-[320px] h-[520px] relative">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
