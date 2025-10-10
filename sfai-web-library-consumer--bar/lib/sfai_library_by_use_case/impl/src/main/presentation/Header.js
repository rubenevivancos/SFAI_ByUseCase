import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Button, useTheme, } from "@mui/material";
import { Moon, Sun } from "lucide-react";
import ButtonPrimary from './ButtonPrimary.js';
import ButtonSecondary from './ButtonSecondary.js';
import { useColorMode } from '../../main/presentation/MaterialUIThemeProvider/ModuleProvider.js';
const Header = () => {
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();
    const isDarkMode = theme.palette.mode === "dark";
    const handleScrollToCasos = (e) => {
        e.preventDefault();
        const casosSection = document.getElementById("casos");
        if (casosSection) {
            casosSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (React.createElement(AppBar, { position: "fixed", sx: {
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            backgroundColor: isDarkMode
                ? "#0F1419"
                : "rgba(255, 255, 255, 0.6)", // mismo glass claro
            color: "text.primary",
            backdropFilter: "blur(16px)",
            borderBottom: isDarkMode
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 8px 40px rgba(16, 24, 40, 0.08)",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
        } },
        React.createElement(Toolbar, { sx: {
                maxWidth: "1440px",
                mx: "auto",
                width: "100%",
                px: { xs: 2, md: 5 },
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            } },
            React.createElement(Box, { sx: { display: "flex", alignItems: "center", gap: { xs: 2, lg: 4 } } },
                React.createElement(Typography, { variant: "h6", component: "a", href: "/", sx: {
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        color: "text.primary",
                        textDecoration: "none",
                        transition: "color 0.3s",
                        "&:hover": { color: "primary.main" },
                    } }, "SFAI"),
                React.createElement(Box, { sx: { display: { xs: "none", lg: "flex" }, gap: 3 } }, [
                    { id: "proyectos", label: "Proyectos" },
                    { id: "casos", label: "Casos de Uso" },
                    { id: "faq", label: "FAQ" },
                ].map((item) => (React.createElement(Button, { key: item.id, onClick: (e) => {
                        e.preventDefault();
                        const target = document.getElementById(item.id);
                        if (target) {
                            target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }, sx: {
                        color: "text.secondary",
                        textTransform: "none",
                        fontSize: "0.875rem",
                        "&:hover": { color: "text.primary" },
                    } }, item.label))))),
            React.createElement(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5 } },
                React.createElement(IconButton, { onClick: toggleColorMode, sx: {
                        p: 1,
                        border: "1px solid",
                        borderColor: isDarkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(255,255,255,0.6)",
                        backgroundColor: isDarkMode ? "#0F1419" : "rgba(255,255,255,0.7)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                            backgroundColor: isDarkMode ? "grey.800" : "grey.100",
                        },
                    }, "aria-label": isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro" }, isDarkMode ? (React.createElement(Sun, { size: 20, color: theme.palette.primary.main })) : (React.createElement(Moon, { size: 20, color: theme.palette.text.secondary }))),
                React.createElement(ButtonPrimary, { href: "#casos", onClick: handleScrollToCasos, size: "default" }, "Explorar Casos de Uso"),
                React.createElement(ButtonSecondary, { href: "{{link_contacto}}", size: "default" }, "Contactar especialista")))));
};
export default Header;
//# sourceMappingURL=Header.js.map