import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import { Moon, Sun } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { useColorMode } from "../../main/presentation/MaterialUIThemeProvider/ModuleProvider";

const Header: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  const isDarkMode = theme.palette.mode === "dark";

  const handleScrollToCasos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const casosSection = document.getElementById("casos");
    if (casosSection) {
      casosSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
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
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          width: "100%",
          px: { xs: 2, md: 5 },
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + navegación */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, lg: 4 } }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              color: "text.primary",
              textDecoration: "none",
              transition: "color 0.3s",
              "&:hover": { color: "primary.main" },
            }}
          >
            SFAI
          </Typography>

          {/* Menú solo visible en escritorio */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
            {[
                { id: "proyectos", label: "Proyectos" },
                { id: "casos", label: "Casos de Uso" },
                { id: "faq", label: "FAQ" },
            ].map((item) => (
              <Button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                sx={{
                  color: "text.secondary",
                  textTransform: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "text.primary" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Acciones: modo oscuro + botones */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Toggle de modo oscuro */}
          <IconButton
            onClick={toggleColorMode}
            sx={{
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
            }}
            aria-label={
              isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            }
          >
            {isDarkMode ? (
              <Sun size={20} color={theme.palette.primary.main} />
            ) : (
              <Moon size={20} color={theme.palette.text.secondary} />
            )}
          </IconButton>

          {/* Botón principal (siempre visible) */}
          <ButtonPrimary
            href="#casos"
            onClick={handleScrollToCasos}
            size="default"
          >
            Explorar Casos de Uso
          </ButtonPrimary>

          {/* Botón secundario */}
            <ButtonSecondary href="{{link_contacto}}" size="default">
              Contactar especialista
            </ButtonSecondary>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
