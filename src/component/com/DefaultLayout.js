import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Assets from '../assets/Assets';

function DefaultLayout() {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlebtn = () => {
    nav("/register");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landingPage">
      <div className="row">
        <div className="col-12">
          <div className="header">
            <div className="header-body">
              <div className="logo">
                <img src={Assets?.LSmediaLOGO} alt="Logo" />
              </div>
              <div className="menu-icon" onClick={toggleMenu}>
                <span className={isMenuOpen ? 'menu-line open' : 'menu-line'}></span>
                <span className={isMenuOpen ? 'menu-line open' : 'menu-line'}></span>
                <span className={isMenuOpen ? 'menu-line open' : 'menu-line'}></span>
              </div>
              <div className="hamburger-icon">
                <i className={`fa fa-bars ${isMenuOpen ? 'open' : ''}`}></i>
              </div>

              <div className={`buttons-info ${isMenuOpen ? 'open' : ''} d-none d-md-flex`}>
                <button className="btn login">Login</button>
                <button className="btn register" onClick={handlebtn}>Register</button>
                <button className="btn c_register" >
                  Company Register
                </button>
              </div>
            </div>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} d-md-none mt-3`}>
            <button className="btn  btn-outline-secondary login">Login</button>
            <button className="btn btn-danger ml-3 register" onClick={handlebtn}>Register</button>
            <button className="btn btn-danger ml-3 mt-2c_register">
              Company Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
