import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import { ColorModeContext } from "../../presentation/MaterialUIThemeProvider/ModuleProvider";

const ProductCatalogImpl: React.FC = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Botones personalizados */}
      <ButtonPrimary onClick={() => alert("Primary clicked")}>
        Botón Primario
      </ButtonPrimary>

      <ButtonSecondary onClick={() => alert("Secondary clicked")}>
        Botón Secundario
      </ButtonSecondary>

      {/* Botón para cambiar modo claro/oscuro */}
      <Button
        variant="outlined"
        onClick={colorMode.toggleColorMode}
        sx={{ mt: 3 }}
      >
        Cambiar modo
      </Button>
    </Box>
  );
};

export default ProductCatalogImpl;
