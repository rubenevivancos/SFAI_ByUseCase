import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ButtonPrimaryProps {
  href?: string;
  size?: "default" | "large";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<any>) => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  href,
  size = "default",
  children,
  onClick,
}) => {
  const theme = useTheme();

  const baseColor = "#DC9518";
  const hoverColor = "#B87610";

  return (
    <Button
      href={href}
      onClick={onClick}
      variant="contained"
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: "auto" },
        textTransform: "none",
        borderRadius: "20px",
        backgroundColor: baseColor,
        color: "#fff",
        fontWeight: 600,
        textAlign: {
          xs: "left",
          sm: "center",
        },
        fontSize: {
          xs: size === "large" ? "0.95rem" : "0.9rem",
          sm: size === "large" ? "1rem" : "0.95rem",
          md: size === "large" ? "1.125rem" : "1rem",
        },
        pl: {
          xs: size === "large" ? 3.5 : 3, 
          sm: size === "large" ? 4 : 3.5,
          md: size === "large" ? 4 : 3.5,
        },
        pr: {
          xs: size === "large" ? 2 : 3, 
          sm: size === "large" ? 4 : 3.5,
          md: size === "large" ? 4 : 3.5,
        },
        py: {
          xs: size === "large" ? 1.25 : 1,
          sm: size === "large" ? 1.5 : 1.25,
          md: size === "large" ? 2 : 1.5,
        },
        transition: "all 0.2s ease-out",
        "&:hover": {
          backgroundColor: hoverColor,
          transform: "translateY(-2px)",
          boxShadow: theme.shadows[4],
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
