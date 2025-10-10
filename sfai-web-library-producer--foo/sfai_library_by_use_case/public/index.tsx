//export { default as ProductCatalog } from "../open/src/main/ProductCatalog";
import React from "react";
import { ModuleProvider } from "../impl/src/main/presentation/MaterialUIThemeProvider/ModuleProvider";
import ByUseCaseMUI from "../open/src/main/ByUseCaseMUI";


const ByUseCase = () => {
    return (
      <ModuleProvider>
        <ByUseCaseMUI />
      </ModuleProvider>
    );
};

export default ByUseCase;