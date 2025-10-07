import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import ProductCatalogMaterialUI from "sfai-library-product-catalog";

const App: React.FC = () => {
    
  console.log("Hello world to Consumer module");

  return (
    <Router>
      <div className="content-wrapper">
          
        <ProductCatalogMaterialUI/>
          
      </div>
    </Router>
  );
};

export default App;
