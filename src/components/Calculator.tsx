import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");

  return (
    <div className="flex flex-col shadow-2xl">
      <CalculatorDisplay value={display} />
      <div className="flex flex-row h-[400px]">
        <div className="flex flex-col w-[240px]">
          <div className="flex flex-row">
            <CalculatorKey className="bg-gray-400/75">AC</CalculatorKey>
            <CalculatorKey className="bg-gray-400/75">±</CalculatorKey>
            <CalculatorKey className="bg-gray-400/75">%</CalculatorKey>
          </div>
          <div className="flex flex-row flex-wrap-reverse">
            <CalculatorKey
              width="w-[160px]"
              className="bg-gray-200 pl-8"
              align="text-left"
            >
              0
            </CalculatorKey>
            <CalculatorKey className="bg-gray-200 font-black">.</CalculatorKey>
            <CalculatorKey className="bg-gray-200">1</CalculatorKey>
            <CalculatorKey className="bg-gray-200">2</CalculatorKey>
            <CalculatorKey className="bg-gray-200">3</CalculatorKey>
            <CalculatorKey className="bg-gray-200">4</CalculatorKey>
            <CalculatorKey className="bg-gray-200">5</CalculatorKey>
            <CalculatorKey className="bg-gray-200">6</CalculatorKey>
            <CalculatorKey className="bg-gray-200">7</CalculatorKey>
            <CalculatorKey className="bg-gray-200">8</CalculatorKey>
            <CalculatorKey className="bg-gray-200">9</CalculatorKey>
          </div>
        </div>
        <div className="flex flex-col w-[120px]">
          <CalculatorKey className="border-r-0 bg-gradient-to-t from-orange-500/[0.8] to-orange-500/[0.75]">
            ÷
          </CalculatorKey>
          <CalculatorKey className="border-r-0 bg-gradient-to-t from-orange-500/[0.85] to-orange-500/[0.8]">
            ×
          </CalculatorKey>
          <CalculatorKey className="border-r-0 bg-gradient-to-t from-orange-500/[0.9] to-orange-500/[0.85]">
            -
          </CalculatorKey>
          <CalculatorKey className="border-r-0 bg-gradient-to-t from-orange-500/[0.95] to-orange-500/[0.9]">
            +
          </CalculatorKey>
          <CalculatorKey className="border-r-0 bg-gradient-to-t from-orange-500 to-orange-500/[0.95]">
            =
          </CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
