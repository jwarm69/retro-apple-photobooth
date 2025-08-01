import React from "react";
import { AppleTheme } from "@/lib/types";

interface CountdownOverlayProps {
  count: number;
  theme: AppleTheme;
}

const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ count, theme }) => {
  const getCountdownStyle = () => {
    switch (theme) {
      case "classic":
        return "font-chicago text-black text-9xl";
      case "imac":
        return "text-imac-bondi-blue text-9xl font-bold";
      case "aqua":
        return "text-aqua-blue text-9xl font-bold text-shadow-lg";
      default:
        return "text-9xl font-bold";
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div
        className={`${getCountdownStyle()} animate-pulse transform scale-150`}
        style={{
          textShadow: theme === "aqua" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : undefined,
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default CountdownOverlay;