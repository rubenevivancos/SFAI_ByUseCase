import React from "react";
import Button from "@mui/material/Button";

interface ButtonSecondaryProps {
  href?: string;
  size?: "default" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  href,
  size = "default",
  children,
  onClick,
}) => {
  return (
    <Button
      variant="outlined"
      href={href}
      onClick={onClick}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        fontSize: size === "large" ? "1.125rem" : "1rem",
        px: size === "large" ? 4 : 3,
        py: size === "large" ? 2 : 1.5,
        borderWidth: 2,
        borderColor: "#DC9518",
        color: "#DC9518",
        borderRadius: "20px",
        transition: "all 0.2s ease-out",
        "&:hover": {
          bgcolor: "rgba(220, 149, 24, 0.05)",
          borderColor: "#B87610",
          color: "#B87610",
          transform: "translateY(-2px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonSecondary;
