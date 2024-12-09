import React, { ReactNode, ButtonHTMLAttributes } from "react";
export type ButtonType = "primary" | "outlined" | "bordered";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "primary" | "secondary" | "danger" | "warning";
export type IconPosition = "left" | "right";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    typer?: ButtonType;
    size?: ButtonSize;
    color?: ButtonColor;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    reverse?: boolean;
}
declare const CMPButton: React.FC<ButtonProps>;
export default CMPButton;
