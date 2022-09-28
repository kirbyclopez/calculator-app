import React from "react";

interface Props {
  children: React.ReactNode;
}

const AutoScaleText: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full h-fit text-right text-8xl self-center">
      {children}
    </div>
  );
};

export default AutoScaleText;
