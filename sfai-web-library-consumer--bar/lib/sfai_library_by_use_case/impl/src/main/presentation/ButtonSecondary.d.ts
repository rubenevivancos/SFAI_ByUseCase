import React from "react";
interface ButtonSecondaryProps {
    href?: string;
    size?: "default" | "large";
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<any>) => void;
}
declare const ButtonSecondary: React.FC<ButtonSecondaryProps>;
export default ButtonSecondary;
