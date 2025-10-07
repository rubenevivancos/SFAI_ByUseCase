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

  const sizeStyles =
    size === "large"
      ? { px: 4, py: 2, fontSize: "1.125rem", fontWeight: 600 }
      : { px: 3, py: 1.5, fontSize: "1rem", fontWeight: 600 };

  // Colores originales respetados
  const baseColor = "#DC9518";
  const hoverColor = "#B87610";

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
