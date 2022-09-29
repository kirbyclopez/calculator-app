import React from "react";
import AutoScaleText from "./AutoScaleText";

interface Props {
  value: string;
}

const CalculatorDisplay: React.FC<Props> = ({ value }: Props) => {
  const formattedValue = value;

  return (
    <div className="bg-black text-white w-[320px] h-[120px] p-2 flex">
      <AutoScaleText>{formattedValue}</AutoScaleText>
    </div>
  );
};

export default CalculatorDisplay;
