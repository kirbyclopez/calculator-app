import React from "react";
import AutoScaleText from "./AutoScaleText";

interface Props {
  value: string;
}

const CalculatorDisplay: React.FC<Props> = ({ value }: Props) => {
  const numberWithCommas = (number: string) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-black text-white w-[320px] h-[120px] p-2 flex">
      <AutoScaleText>{numberWithCommas(value)}</AutoScaleText>
    </div>
  );
};

export default CalculatorDisplay;
