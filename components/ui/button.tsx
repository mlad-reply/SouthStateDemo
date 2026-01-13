import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors";

  const variantClass =
    variant === "outline"
      ? "border border-gray-900 text-gray-900 hover:bg-gray-900/10"
      : "bg-gray-900 text-white hover:bg-gray-800";

  const sizeClass =
    size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm";

  return (
    <button
      className={`${base} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    />
  );
}
