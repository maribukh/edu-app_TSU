import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-semibold tracking-wide transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]";

  const variantStyles = {
    primary: "btn-accent text-white shadow-neon",
    secondary:
      "bg-white/10 border border-white/20 text-white hover:bg-white/20",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}