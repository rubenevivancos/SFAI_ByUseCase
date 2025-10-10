import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import ProductCatalogMaterialUI from "../../../sfai_library_by_use_case/public";


const App: React.FC = () => {

  return (
    <Router>
      <div className="content-wrapper">
          Hello world to Producer module
          
          ---

        <ProductCatalogMaterialUI/>
          
      </div>
    </Router>
  );
};

export default App;
