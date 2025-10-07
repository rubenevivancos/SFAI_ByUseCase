import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import Header from "../Header";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import Footer from "../Footer";
import { Users, Clock, Target } from "lucide-react";
import '../styles/globals.css';

const ProductCatalogImpl: React.FC = () => {
  const handleScrollToCasos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const casosSection = document.getElementById("casos");
    if (casosSection) {
      casosSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        minHeight: "100vh",
        bgcolor: theme.palette.mode === "dark"
            ? "#0F1419" // fondo dark exacto
            : "#FFFFFF", // fondo light
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      })}
    >
      {/* Header fijo con modo claro/oscuro */}
      <Header />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: 8, md: 10 },
          px: { xs: 2, md: 20 },
          py: 6,
        }}
      >
        {/* Breadcrumb */}
        <Box sx={{ mb: 4 }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              color: "var(--mui-palette-text-secondary)",
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              Inicio
            </Link>
            <span>/</span>
            <Link href="#" underline="hover" color="inherit">
              Soluciones
            </Link>
            <span>/</span>
            <Typography color="text.primary">Por Casos de Uso</Typography>
          </nav>
        </Box>

        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          {/* Texto Hero */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Soluciones de IA por Caso de Uso
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                mb: 4,
                color: "text.secondary",
                maxWidth: 500,
              }}
            >
              Explorá nuestros proyectos y servicios y descubrí cómo SFAI impacta
              en ventas, soporte y operaciones.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              <ButtonPrimary href="#casos" onClick={handleScrollToCasos}>
                Explorar Casos de Uso
              </ButtonPrimary>
              <ButtonSecondary href="{{link_contacto}}">
                Contactar con un especialista
              </ButtonSecondary>
            </Box>

            <Typography variant="caption" color="text.secondary">
              Demo guiada en 15 min
            </Typography>
          </Grid>

          {/* Bloques informativos tipo glass */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={(theme) => ({
                position: "relative",
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                border: theme.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.15)", // borde claro
                background: theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)" // fondo más suave que el borde
                  : "rgba(255,255,255,0.05)", // fondo claro
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              })}
            >
              <Grid container spacing={2}>
                {[
                  { icon: <Users color="#fff" size={20} />, title: "Leads calificados", desc: "Scoring automático" },
                  { icon: <Clock color="#fff" size={20} />, title: "Respuestas 24/7", desc: "En segundos" },
                  { icon: <Target color="#fff" size={20} />, title: "Seguimiento y cobros", desc: "Automatizado" },
                ].map((item, i) => (
                  <Grid key={i} size={{ xs: 12 }}>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: "16px",
                        transition: "0.3s",
                        border: theme.palette.mode === "dark"
                          ? "1px solid rgba(220, 149, 24, 0.2)" // borde naranja dark
                          : "1px solid rgba(255,255,255,0.2)", // borde claro
                        background: theme.palette.mode === "dark"
                          ? "linear-gradient(to bottom right, rgba(220,149,24,0.1), rgba(220,149,24,0.05))" // fondo naranja dark
                          : "rgba(255,255,255,0.05)", // fondo claro
                        backdropFilter: "blur(4px)",
                        "&:hover": {
                          transform: "scale(1.03)",
                          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        },
                      })}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          bgcolor: "#F59E0B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ProductCatalogImpl;
