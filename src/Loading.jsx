import { useState, useEffect } from "react";

export default function Loading() {
  const [dots, setDots] = useState("");
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIncreasing) {
        setDots((prev) => {
          if (prev.length >= 3) {
            setIsIncreasing(false);
            return prev.slice(0, -1);
          }
          return prev + ".";
        });
      } else {
        setDots((prev) => {
          if (prev.length <= 0) {
            setIsIncreasing(true);
            return prev + ".";
          }
          return prev.slice(0, -1);
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isIncreasing]);

  return (
    <div className="flex flex-1 items-center justify-center">
      <h3 className="text-[#111418] tracking-light text-4xl font-black leading-tight text-left">
        Generating your letter{dots}
      </h3>
    </div>
  );
}
