import React, { Children } from "react";

interface ButtonProps {
  name: string;
  variants?: "Primary" | "Secondary" | "Ghosted";
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  name,
  variants,
  onClick,
  children,
  className,
}: ButtonProps) {
  const btnVariant =
    variants === "Primary"
      ? "bg-main text-white"
      : variants === "Secondary"
      ? "bg-white border-main text-main"
      : "bg-gray-500 text-white";
  return (
    <button
      id={name}
      onClick={onClick}
      className={`py-2.5 px-7 rounded-[10px] transition-all duration-150 hover:brightness-75 cursor-pointer ${btnVariant} ${className}`}
    >
      {children}
    </button>
  );
}
