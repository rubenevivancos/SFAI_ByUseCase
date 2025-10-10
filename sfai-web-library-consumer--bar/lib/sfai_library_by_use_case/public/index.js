//export { default as ProductCatalog } from '../open/src/main/ProductCatalog.js';
import React from "react";
import { ModuleProvider } from '../impl/src/main/presentation/MaterialUIThemeProvider/ModuleProvider.js';
import ByUseCaseMUI from '../open/src/main/ByUseCaseMUI.js';
const ByUseCase = () => {
    return (React.createElement(ModuleProvider, null,
        React.createElement(ByUseCaseMUI, null)));
};
export default ByUseCase;
//# sourceMappingURL=index.js.map