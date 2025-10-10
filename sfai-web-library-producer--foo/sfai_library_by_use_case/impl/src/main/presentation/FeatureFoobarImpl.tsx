import React from 'react';
import './FeatureFoobarImpl.css';
import image from "@sfai-images-env/image.png";

const FeatureFoobarImpl: React.FC = () => {
  return (
    <div className="feature-foobar-container">
      <h1>Impl of Library as Foobar</h1>
      <img src={image} alt="Foobar" className="feature-foobar-image" />
    </div>
  );
};

export default FeatureFoobarImpl;
