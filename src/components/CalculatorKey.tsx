import React from "react";

interface Props {
  className?: string;
  width?: string;
  align?: string;
  color?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const CalculatorKey: React.FC<Props> = ({
  className,
  width,
  align,
  color,
  handleClick,
  children,
}: Props) => {
  return (
    <div
      className={
        (className ? className : "") +
        " cursor-pointer h-[70px] leading-[70px] m-[5px] border-0 rounded-full ease-out duration-200 " +
        (width ? width : "w-[70px]") +
        (align ? " " + align : " text-center") +
        (color ? " " + color : " text-white")
      }
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default CalculatorKey;
