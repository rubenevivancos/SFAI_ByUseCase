//export { default as ProductCatalog } from "../open/src/main/ProductCatalog";
import React from "react";
import { ModuleProvider } from "../impl/src/main/presentation/MaterialUIThemeProvider/ModuleProvider";
import ProductCatalog from "../open/src/main/ProductCatalog";


const ProductCatalogMaterialUI = () => {
    return (
      <ModuleProvider>
        <ProductCatalog />
      </ModuleProvider>
    );
};

export default ProductCatalogMaterialUI;