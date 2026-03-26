import React from "react";

interface BotaoProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
}

export function Botao({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = ""
}: BotaoProps) {

  const baseStyle = "w-full h-[45px] rounded-xl font-semibold transition";

  const variants = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-300",
    secondary: "bg-black text-white border border-[#6B6B6B] hover:bg-neutral-900"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}