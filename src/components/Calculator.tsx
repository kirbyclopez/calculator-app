import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<string>("0");
  const [secondOperand, setSecondOperand] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  const [clearKey, setClearKey] = useState<string>("AC");

  return (
    <div className="flex flex-col shadow-2xl">
      <CalculatorDisplay value={display} />
      <div className="flex flex-row h-[400px]">
        <div className="flex flex-col w-[240px]">
          <div className="flex flex-row">
            <CalculatorKey className="bg-gray-100/75" color="text-black">
              AC
            </CalculatorKey>
            <CalculatorKey className="bg-gray-100/75" color="text-black">
              ±
            </CalculatorKey>
            <CalculatorKey className="bg-gray-100/75" color="text-black">
              %
            </CalculatorKey>
          </div>
          <div className="flex flex-row flex-wrap-reverse">
            <CalculatorKey
              width="w-[150px]"
              className="bg-gray-100/[0.2] pl-8"
              align="text-left"
            >
              0
            </CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2] font-black">
              .
            </CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">1</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">2</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">3</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">4</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">5</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">6</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">7</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">8</CalculatorKey>
            <CalculatorKey className="bg-gray-100/[0.2]">9</CalculatorKey>
          </div>
        </div>
        <div className="flex flex-col w-[120px]">
          <CalculatorKey className="bg-amber-500">÷</CalculatorKey>
          <CalculatorKey className="bg-amber-500">×</CalculatorKey>
          <CalculatorKey className="bg-amber-500">-</CalculatorKey>
          <CalculatorKey className="bg-amber-500">+</CalculatorKey>
          <CalculatorKey className="bg-amber-500">=</CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
