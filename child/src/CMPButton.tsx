import React, { ReactNode, ButtonHTMLAttributes } from "react";

// Button Variant Types
export type ButtonType = "primary" | "outlined" | "bordered";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "primary" | "secondary" | "danger" | "warning";
export type IconPosition = "left" | "right";

// Extended Button Props Interface
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  typer?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  reverse?: boolean;
}

// Button Style Configuration Types
type ButtonStyleConfig = {
  [Key in ButtonType]: {
    [Color in ButtonColor]: string;
  };
};

type ButtonSizeConfig = {
  [Key in ButtonSize]: string;
};

// Button Styles Configuration
const buttonStyles: ButtonStyleConfig = {
  primary: {
    primary: "bg-[#1B748D] text-white hover:bg-[#155F73]",
    secondary: "bg-[#BAE8F5] text-[#1B748D] hover:bg-[#A0DFF0]",
    danger: "bg-[#FF8267] text-white hover:bg-[#FF6F4D]",
    warning: "bg-[#FFD067] text-black hover:bg-[#FFC94D]",
  },
  outlined: {
    primary:
      "border-2 border-[#1B748D] text-[#1B748D] bg-transparent hover:bg-[#1B748D] hover:text-white",
    secondary:
      "border-2 border-[#BAE8F5] text-[#BAE8F5] bg-transparent hover:bg-[#BAE8F5] hover:text-[#1B748D]",
    danger:
      "border-2 border-[#FF8267] text-[#FF8267] bg-transparent hover:bg-[#FF8267] hover:text-white",
    warning:
      "border-2 border-[#FFD067] text-[#FFD067] bg-transparent hover:bg-[#FFD067] hover:text-black",
  },
  bordered: {
    primary:
      "border border-[#1B748D] bg-white text-[#1B748D] hover:bg-[#F0F0F0]",
    secondary:
      "border border-[#BAE8F5] bg-white text-[#1B748D] hover:bg-[#F0F0F0]",
    danger:
      "border border-[#FF8267] bg-white text-[#FF8267] hover:bg-[#F0F0F0]",
    warning: "border border-[#FFD067] bg-white text-black hover:bg-[#F0F0F0]",
  },
};

// Button Size Configuration
const buttonSizes: ButtonSizeConfig = {
  small: "px-2 py-1 text-xs",
  medium: "px-3 py-1.5 text-sm",
  large: "px-4 py-2 text-base",
};

// Dynamic Button Component
const CMPButton: React.FC<ButtonProps> = ({
  children,
  typer = "primary",
  size = "medium",
  color = "primary",
  icon,
  iconPosition = "right",
  reverse = false,
  className,
  ...props
}) => {
  // Combine all button classes
  const buttonClasses = [
    "flex items-center justify-center rounded-md font-semibold shadow-sm",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    buttonStyles[typer][color],
    buttonSizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {/* Left Icon (Normal or Reversed) */}
      {icon && iconPosition === "left" && !reverse && (
        <span className="mr-2">{icon}</span>
      )}
      {icon && iconPosition === "right" && reverse && (
        <span className="ml-2">{icon}</span>
      )}

      {/* Button Text */}
      {children}

      {/* Right Icon (Normal or Reversed) */}
      {icon && iconPosition === "right" && !reverse && (
        <span className="ml-2">{icon}</span>
      )}
      {icon && iconPosition === "left" && reverse && (
        <span className="mr-2">{icon}</span>
      )}
    </button>
  );
};

export default CMPButton;
