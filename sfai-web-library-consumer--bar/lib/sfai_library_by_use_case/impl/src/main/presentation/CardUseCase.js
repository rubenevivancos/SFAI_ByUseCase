import React from "react";
import { TrendingUp } from "lucide-react";
import { Box, Typography, useTheme } from "@mui/material";
export function CardUseCase({ icon: Icon, title, description, metric, badge, }) {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (React.createElement(Box, { sx: {
            position: "relative",
            p: 3,
            borderRadius: "20px",
            bgcolor: "var(--surface-glass)",
            border: "1px solid var(--surface-glass-border)",
            boxShadow: "var(--glass-shadow)",
            backdropFilter: "blur(16px)",
            transition: "all 0.25s ease",
            "&:hover": {
                boxShadow: "0 12px 48px rgba(16,24,40,0.12)",
                transform: "translateY(-4px)",
            },
            display: "flex",
            flexDirection: "column",
            gap: 3,
        } },
        badge && (React.createElement(Box, { sx: {
                position: "absolute",
                top: -12,
                left: 24,
                px: 1.5,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "var(--accent)",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            } }, badge)),
        React.createElement(Box, { sx: {
                width: 48,
                height: 48,
                borderRadius: "16px",
                bgcolor: "rgba(var(--accent-rgb), 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: 'linear-gradient(to bottom right, var(--accent)/20, var(--accent)/5)',
                background: (theme) => `linear-gradient(
                to bottom right,
                ${theme.palette.mode === 'dark' ? 'rgba(245,158,11,0.2)' : 'var(--accent)/20'},
                ${theme.palette.mode === 'dark' ? 'rgba(245,158,11,0.05)' : 'var(--accent)/5'}
            )`,
            } },
            React.createElement(Icon, { style: { width: 24, height: 24, color: "var(--accent)" } })),
        React.createElement(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 } },
            React.createElement(Typography, { variant: "h6", sx: {
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                    transition: "color 0.2s",
                } }, title),
            React.createElement(Typography, { variant: "body2", sx: {
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    transition: "color 0.2s",
                } }, description)),
        React.createElement(Box, { sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "var(--accent)",
                fontWeight: 600,
                fontSize: "0.875rem",
            } },
            React.createElement(TrendingUp, { style: { width: 16, height: 16 } }),
            React.createElement("span", null, metric))));
}
//# sourceMappingURL=CardUseCase.js.map