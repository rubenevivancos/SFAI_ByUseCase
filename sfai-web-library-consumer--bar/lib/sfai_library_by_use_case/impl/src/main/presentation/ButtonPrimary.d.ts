import React from "react";
interface ButtonPrimaryProps {
    href?: string;
    size?: "default" | "large";
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<any>) => void;
}
declare const ButtonPrimary: React.FC<ButtonPrimaryProps>;
export default ButtonPrimary;
