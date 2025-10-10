import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
const ButtonSecondary = ({ href, size = "default", children, onClick, }) => {
    const theme = useTheme();
    const baseColor = "#DC9518";
    const hoverColor = "#B87610";
    return (React.createElement(Button, { variant: "outlined", href: href, onClick: onClick, sx: {
            textTransform: "none",
            fontWeight: 600,
            borderWidth: 2,
            borderColor: baseColor,
            color: baseColor,
            borderRadius: "20px",
            width: { xs: "100%", sm: "auto" },
            fontSize: {
                xs: size === "large" ? "0.95rem" : "0.9rem",
                sm: size === "large" ? "1rem" : "0.95rem",
                md: size === "large" ? "1.125rem" : "1rem",
            },
            px: {
                xs: size === "large" ? 2.5 : 2,
                sm: size === "large" ? 3 : 2.5,
                md: size === "large" ? 4 : 3,
            },
            py: {
                xs: size === "large" ? 1.25 : 1,
                sm: size === "large" ? 1.5 : 1.25,
                md: size === "large" ? 2 : 1.5,
            },
            transition: "all 0.2s ease-out",
            "&:hover": {
                bgcolor: "rgba(220, 149, 24, 0.05)",
                borderColor: hoverColor,
                color: hoverColor,
                transform: "translateY(-2px)",
                boxShadow: theme.shadows[4],
            },
        } }, children));
};
export default ButtonSecondary;
//# sourceMappingURL=ButtonSecondary.js.map