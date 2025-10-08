import React, { useEffect } from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { ChevronDown } from "lucide-react";
import "./styles/globals.css";

interface FAQItemProps {
  question: string;
  answer?: string;
}

export function FAQItem({ question }: FAQItemProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

    useEffect(() => {
    if (isDark) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    }, [isDark]);

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "20px",
        bgcolor: isDark ? "rgba(255,255,255,0.05)" : "var(--surface-glass)",
        backdropFilter: "blur(16px)",
        border: "1px solid var(--surface-glass-border)",
        boxShadow: "0 8px 40px rgba(16,24,40,0.08)",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 12px 48px rgba(16,24,40,0.12)",
        },
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          color: "var(--text-primary)",
          fontSize: "1rem",
        }}
      >
        {question}
      </Typography>

      <IconButton
        size="small"
        sx={{
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}
      >
        <ChevronDown size={20} />
      </IconButton>
    </Box>
  );
}
