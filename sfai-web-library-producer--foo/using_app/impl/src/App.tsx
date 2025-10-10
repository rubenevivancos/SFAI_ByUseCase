import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {FeatureFoobar} from "../../../sfai_library_by_use_case/public";
// import {FeatureFoobar} from "../../../sfai_library_foo/public";
// import {FeatureFoobar} from "sfai-web-module-producer--foo";

const App: React.FC = () => {
    
  console.log("Hello world to Consumer module");

  return (
    <Router>
      <div className="content-wrapper">
          Hello world to Producer module
          
          ---
          
          {/*<FeatureFoobar/>*/}
        <FeatureFoobar/>
          
      </div>
    </Router>
  );
};

export default App;
