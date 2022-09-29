import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center min-h-[520px] text-3xl font-light">
      <div className="w-[330px] h-[530px] p-[5px] relative bg-black">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
