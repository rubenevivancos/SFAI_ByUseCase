import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import Footer from "../Footer";

const ProductCatalogImpl: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header fijo con modo claro/oscuro */}
      <Header />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: 8, md: 10 }, // margen para compensar el AppBar fijo
          px: { xs: 2, md: 6 },
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 600 }}>
          Catálogo de Productos
        </h1>
        <p style={{ maxWidth: 600, color: "var(--mui-palette-text-secondary)" }}>
          Explora nuestros casos de uso y proyectos destacados dentro del
          ecosistema SFAI.
        </p>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ButtonPrimary onClick={() => alert("Explorar Casos de Uso")}>
            Explorar Casos de Uso
          </ButtonPrimary>
          <ButtonSecondary onClick={() => alert("Contactar especialista")}>
            Contactar especialista
          </ButtonSecondary>
        </Box>
      </Box>

      {/* Footer con modo claro/oscuro y navegación */}
      <Footer />
    </Box>
  );
};

export default ProductCatalogImpl;
