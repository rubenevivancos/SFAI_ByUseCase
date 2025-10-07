import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProductCatalogMaterialUI from "../../../sfai_library_product_catalog/public";


const App: React.FC = () => {

  return (
    <Router>
      <div className="content-wrapper">

        <ProductCatalogMaterialUI/>
          
      </div>
    </Router>
  );
};

export default App;
