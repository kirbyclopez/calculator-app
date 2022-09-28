import React from "react";

interface Props {
  className?: string;
  width?: string;
  align?: string;
  children: React.ReactNode;
}

const CalculatorKey: React.FC<Props> = ({
  className,
  width,
  align,
  children,
}: Props) => {
  return (
    <div
      className={
        (className ? className : "") +
        " cursor-pointer h-[80px] leading-[80px] border-gray-500 border-t border-r " +
        (width ? width : "w-[80px]") +
        (align ? " " + align : " text-center")
      }
    >
      {children}
    </div>
  );
};

export default CalculatorKey;
