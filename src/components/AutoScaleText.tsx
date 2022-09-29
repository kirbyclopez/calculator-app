import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const AutoScaleText: React.FC<Props> = ({ children }: Props) => {
  const [scale, setScale] = useState<number>(1);
  const ref = useRef<any>(null);

  useEffect(() => {
    const actualScale = 320 / ref.current.offsetWidth;
    setScale(actualScale > 1 ? 1 : actualScale);
  }, [children]);

  return (
    <div
      className="h-fit text-right text-8xl self-center absolute right-0 origin-right px-[20px] transition-none"
      style={{ transform: `scale(${scale},${scale})` }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default AutoScaleText;
