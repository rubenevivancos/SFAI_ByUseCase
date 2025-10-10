import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Link,
  useTheme,
} from "@mui/material";
import { Moon, Sun } from "lucide-react";
import { useColorMode } from "../../main/presentation/MaterialUIThemeProvider/ModuleProvider";

const Footer: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: isDarkMode
          ? "#0F1419" // exactamente el color del fondo oscuro
          : "rgba(255,255,255,0.7)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 2, md: 5 },
          py: 6,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* Logo y derechos */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              textDecoration: "none",
              transition: "color 0.3s",
              "&:hover": { color: "primary.main" },
            }}
          >
            SFAI
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              transition: "color 0.3s",
            }}
          >
            © 2025 SFAI. Todos los derechos reservados.
          </Typography>
        </Box>

        {/* Navegación y modo oscuro */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
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
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
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

          {[
            { href: "#", label: "Términos" },
            { href: "#", label: "Privacidad" },
            { href: "#", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              underline="none"
              sx={{
                fontSize: "0.875rem",
                color: "text.secondary",
                transition: "color 0.3s",
                "&:hover": { color: "text.primary" },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
