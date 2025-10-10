import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import ByUseCase from "sfai-library-by-use-case";

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Página de inicio del consumer</h1>
      <Link to="/by-use-case">
        <button   style={{
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  backgroundColor: '#3a2cbdff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
          Ver By Use Case
        </button>
      </Link>
    </div>
  );
};


const App: React.FC = () => {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/by-use-case/*" element={<ByUseCase/>} />
      </Routes>
    </Router>

  );
};

export default App;
