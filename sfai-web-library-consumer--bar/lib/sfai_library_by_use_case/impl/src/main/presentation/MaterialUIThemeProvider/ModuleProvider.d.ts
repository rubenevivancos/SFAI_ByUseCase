import React from "react";
import "./global.css";
import "../styles/globals.css";
export declare const ColorModeContext: React.Context<{
    toggleColorMode: () => void;
}>;
export declare const useColorMode: () => {
    toggleColorMode: () => void;
};
type Props = {
    children: React.ReactNode;
};
export declare const ModuleProvider: ({ children }: Props) => React.JSX.Element;
export {};
