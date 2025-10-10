import { createTheme, ThemeOptions } from "@mui/material/styles";

// Función que genera el tema según el modo (claro u oscuro)
export const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: { default: "#fafafa", paper: "#ffffff" },
          text: { primary: "#000000", secondary: "#555555" },
        }
      : {
          background: { default: "#121212", paper: "#1e1e1e" },
          text: { primary: "#ffffff", secondary: "#aaaaaa" },
        }),
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        } as any, // 👈 cast necesario por bug de tipado en MUI v7
      },
    },
  },
});

// Tema por defecto inicial (modo claro)
export const theme = createTheme(getDesignTokens("light"));
