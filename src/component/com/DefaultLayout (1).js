import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LandingPage.css'; // Your custom CSS
import Assets from '../assets/Assets';

function DefaultLayout() {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlebtn = () => {
    nav("/companyRegister");
  };
  function handleRegister(){
    nav("/register")
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landingPage">
      <div className="row">
        <div className="col-lg-12">
          <div style={{marginLeft:"20px"}} className="header">
            <div className="header-body">
              <div className="logo">
                <img src={Assets?.LSmediaLOGO} alt="Logo" />
              </div>

            

             

              {/* Navbar Links */}
              <div style={{marginTop:"30px"}} className={`buttons-info ${isMenuOpen ? 'open' : ''}`}>
                <button className="btn login">Login</button>
                <button className="btn register" onClick={handleRegister}>Register</button>
                <button className="btn c_register" onClick={handlebtn}>
                  Company Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
