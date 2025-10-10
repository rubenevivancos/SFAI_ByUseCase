import React, { useMemo, useState, createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from './theme.js';
import "./global.css";
import "../styles/globals.css";
// ✅ Exportar el contexto para poder usarlo en otros componentes
export const ColorModeContext = createContext({ toggleColorMode: () => { } });
export const useColorMode = () => useContext(ColorModeContext);
export const ModuleProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }), []);
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (React.createElement(ColorModeContext.Provider, { value: colorMode },
        React.createElement(ThemeProvider, { theme: theme },
            React.createElement(CssBaseline, null),
            children)));
};
//# sourceMappingURL=ModuleProvider.js.map