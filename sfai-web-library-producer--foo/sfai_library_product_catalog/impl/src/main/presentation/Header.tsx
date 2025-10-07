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
      enableColorOnDark
      sx={{
        backgroundColor: isDarkMode
          ? theme.palette.background.default // exactamente el color del fondo oscuro
          : "rgba(255,255,255,0.7)",
        color: "text.primary",
        backdropFilter: isDarkMode ? "none" : "blur(16px)",
        borderBottom: isDarkMode
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.1)",
        boxShadow: "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          width: "100%",
          px: { xs: 2, md: 5 },
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo y navegación */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              color: "text.primary",
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 0.3s",
              "&:hover": { color: "primary.main" },
            }}
          >
            SFAI
          </Typography>

          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
            {[
              { href: "#proyectos", label: "Proyectos" },
              { href: "#casos", label: "Casos de Uso" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <Button
                key={item.href}
                href={item.href}
                onClick={item.href === "#casos" ? handleScrollToCasos : undefined}
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

        {/* Botones y modo oscuro */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <IconButton
            onClick={toggleColorMode}
            sx={{
              p: 1,
              border: "1px solid",
              borderColor: isDarkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              backgroundColor: "background.paper",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: isDarkMode ? "grey.800" : "grey.100",
              },
            }}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDarkMode ? (
              <Sun size={20} color={theme.palette.primary.main} />
            ) : (
              <Moon size={20} color={theme.palette.text.secondary} />
            )}
          </IconButton>

          <ButtonPrimary href="#casos" onClick={handleScrollToCasos} size="default">
            Explorar Casos de Uso
          </ButtonPrimary>

          <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
            <ButtonSecondary href="{{link_contacto}}" size="default">
              Contactar especialista
            </ButtonSecondary>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
