import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ButtonPrimaryProps {
  href?: string;
  size?: "default" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  href,
  size = "default",
  children,
  onClick,
}) => {
  const theme = useTheme();

  const sizeStyles =
    size === "large"
      ? { px: 4, py: 2, fontSize: "1.125rem", fontWeight: 600 } // text-lg
      : { px: 3, py: 1.5, fontSize: "1rem", fontWeight: 600 }; // text-base

  const baseColor =
    theme.palette.mode === "light" ? "#DC9518" : "#F0A93E";
  const hoverColor =
    theme.palette.mode === "light" ? "#B87610" : "#D4881F";

  return (
    <Button
      href={href}
      onClick={onClick}
      variant="contained"
      sx={{
        ...sizeStyles,
        textTransform: "none",
        borderRadius: "20px",
        backgroundColor: baseColor,
        color: "#fff",
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
