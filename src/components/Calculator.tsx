import React, { KeyboardEvent, useEffect, useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<string>("0");
  const [secondOperand, setSecondOperand] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  const [lastOperation, setLastOperation] = useState<string>("");
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const handleInputDigit = (digit: number) => {
    let newDisplay: string;

    if (waitingForOperand) {
      newDisplay = String(digit);
      setWaitingForOperand(false);
    } else {
      newDisplay = display === "0" ? String(digit) : display + digit;
    }

    if (operator === "" || lastOperation === "=") setFirstOperand(newDisplay);
    else setSecondOperand(newDisplay);

    setDisplay(newDisplay);
  };

  const handleOperation = (nextOperator: string) => {
    if (
      (!waitingForOperand && operator !== "" && lastOperation !== "=") ||
      (lastOperation === "=" && nextOperator === "=" && operator !== "")
    ) {
      let result: number = 0;

      switch (operator) {
        case "/":
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
          break;
        case "*":
          result = parseFloat(firstOperand) * parseFloat(secondOperand);
          break;
        case "-":
          result = parseFloat(firstOperand) - parseFloat(secondOperand);
          break;
        case "+":
          result = parseFloat(firstOperand) + parseFloat(secondOperand);
          break;
      }

      result = parseFloat(result.toFixed(6));
      setDisplay(String(result));
      setFirstOperand(String(result));
    }

    if (nextOperator !== "=") setOperator(nextOperator);

    setWaitingForOperand(true);
    setLastOperation(nextOperator);
  };

  const handleClear = () => {
    if (!waitingForOperand && display === "0") {
      setDisplay("0");
      setFirstOperand("0");
      setSecondOperand("0");
      setOperator("");
      setLastOperation("");
      setWaitingForOperand(false);
    } else {
      setDisplay("0");
      setSecondOperand("0");
      setWaitingForOperand(false);
    }
  };

  const handleSign = () => {
    const newValue = parseFloat(display) * -1;

    setDisplay(String(newValue));
    setFirstOperand(String(newValue));
  };

  const handleDot = () => {
    if (!/\./.test(display)) {
      const newDisplay = display + ".";
      setDisplay(newDisplay);
      if (operator === "" || lastOperation === "=") setFirstOperand(newDisplay);
      else setSecondOperand(newDisplay);
      setWaitingForOperand(false);
    }
  };

  const handlePercent = () => {
    const currentValue = parseFloat(display);

    if (currentValue === 0) return;

    const newValue = String(parseFloat((currentValue / 100).toFixed(6)));

    if (operator === "" || lastOperation === "=") setFirstOperand(newValue);
    else setSecondOperand(newValue);

    setDisplay(newValue);
  };

  const handleBackspace = () => {
    const newValue = display.substring(0, display.length - 1) || "0";

    if (operator === "" || lastOperation === "=") setFirstOperand(newValue);
    else setSecondOperand(newValue);

    setDisplay(newValue);
  };

  const handleKeyPress: any = (event: KeyboardEvent) => {
    let key = event.key !== "Enter" ? event.key : "=";

    switch (key) {
      case "Backspace":
        handleBackspace();
        break;
      case "Escape":
        handleClear();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleInputDigit(parseInt(key));
        break;
      case ".":
        handleDot();
        break;
      case "%":
        handlePercent();
        break;
      case "/":
      case "*":
      case "-":
      case "+":
      case "=":
        handleOperation(key);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [display, lastOperation]);

  return (
    <div className="flex flex-col shadow-2xl transition-all">
      <CalculatorDisplay value={display} />
      <div className="flex flex-row h-[400px]">
        <div className="flex flex-col w-[240px]">
          <div className="flex flex-row">
            <CalculatorKey
              className="bg-gray-100/75 active:bg-gray-100"
              color="text-black"
              handleClick={() => handleClear()}
            >
              {!waitingForOperand && display === "0" ? "AC" : "C"}
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/75 active:bg-gray-100"
              color="text-black"
              handleClick={() => handleSign()}
            >
              ±
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/75 active:bg-gray-100"
              color="text-black"
              handleClick={() => handlePercent()}
            >
              %
            </CalculatorKey>
          </div>
          <div className="flex flex-row flex-wrap-reverse">
            <CalculatorKey
              width="w-[150px]"
              className="bg-gray-100/[0.2] pl-8 active:bg-gray-100/[0.4]"
              align="text-left"
              handleClick={() => handleInputDigit(0)}
            >
              0
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4] font-black"
              handleClick={() => handleDot()}
            >
              .
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(1)}
            >
              1
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(2)}
            >
              2
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(3)}
            >
              3
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(4)}
            >
              4
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(5)}
            >
              5
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(6)}
            >
              6
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(7)}
            >
              7
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(8)}
            >
              8
            </CalculatorKey>
            <CalculatorKey
              className="bg-gray-100/[0.2] active:bg-gray-100/[0.4]"
              handleClick={() => handleInputDigit(9)}
            >
              9
            </CalculatorKey>
          </div>
        </div>
        <div className="flex flex-col w-[120px]">
          <CalculatorKey
            className={
              (lastOperation === "/" ? "bg-amber-400" : "bg-amber-500") +
              " active:bg-amber-400"
            }
            handleClick={() => handleOperation("/")}
          >
            ÷
          </CalculatorKey>
          <CalculatorKey
            className={
              (lastOperation === "*" ? "bg-amber-400" : "bg-amber-500") +
              " active:bg-amber-400"
            }
            handleClick={() => handleOperation("*")}
          >
            ×
          </CalculatorKey>
          <CalculatorKey
            className={
              (lastOperation === "-" ? "bg-amber-400" : "bg-amber-500") +
              " active:bg-amber-400"
            }
            handleClick={() => handleOperation("-")}
          >
            -
          </CalculatorKey>
          <CalculatorKey
            className={
              (lastOperation === "+" ? "bg-amber-400" : "bg-amber-500") +
              " active:bg-amber-400"
            }
            handleClick={() => handleOperation("+")}
          >
            +
          </CalculatorKey>
          <CalculatorKey
            className="bg-amber-500 active:bg-amber-400"
            handleClick={() => handleOperation("=")}
          >
            =
          </CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
