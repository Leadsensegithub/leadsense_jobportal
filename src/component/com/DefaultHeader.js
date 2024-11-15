import React from 'react';
import '../css/LandingPage.css'
import Assets from '../assets/Assets';
import { useNavigate } from 'react-router-dom';
const DefaultHeader = () => {
  const nav = useNavigate()
  function handleButton(){
    nav("/register")
  }
  function handleButtonLogin(){
    nav("/login")
  }
  return (
    <header className="landingPage">
      <div className="row">
        <div className="col-lg-12">
          <div className="header">
            <div className="header-body">
              <div>
                <img src={Assets?.LSmediaLOGO} alt="LS Media Logo" />
              </div>
              <div className="buttons-info">
                <button className="btn login" onClick={handleButtonLogin}>Login</button>
                <button className="btn register " onClick={handleButton}>Register</button>
                <button className="btn c_register">Company Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
