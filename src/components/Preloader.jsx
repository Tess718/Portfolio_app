import React, { useState, useEffect } from 'react';
import './Preloader.css';


const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null; 
  }

  return (
    <div>
      <div className="loader">
        <h1 className="text-white loadertxt ms-lg-5 text-uppercase" data-aos="fade-right" data-aos-duration="3000">Liasu</h1>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="text-white loadertxt1 me-lg-5 text-uppercase" data-aos="fade-left" data-aos-duration="3000">Teslim</h1>
      </div>
    </div>
  );
};


export default Preloader
