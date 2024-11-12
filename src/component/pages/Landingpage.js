import React from 'react';
import '../css/LandingPage.css'
import Assets from '../assets/Assets';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const nav = useNavigate()
    function handleButton(){
      nav("/register")
    }
    return (
        <>
            <div className='landingPage'>
                <div className='imgs'>
                    <img src={Assets?.Top} alt='Loading...'></img>
                </div>
                <div className='row'>
                    <div className='col-lg-12 container'>
                        {/* <div className='header'>
                            <div className='header-body'>
                                <div>
                                    <img src={Assets?.LSmediaLOGO} alt='Loading...'></img>
                                </div>
                                <div className='buttons-info'>
                                    <button className='btn login'>Login</button>
                                    <button className='btn register' onClick={handleButton}>Register</button>
                                    <button className='btn c_register'>Company  Register</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-lg-12'>
                        <div className='info-body'>

                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='search_info'>
                                        <img alt='Loading...'></img>
                                        <input className='skills' placeholder='Enter skills / job title '></input>
                                        <input className='University' placeholder='University'></input>
                                        <input className='Locations' placeholder='Locations'></input>
                                        <button className='Search'>Search</button>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <h1>Find skilled professionals to</h1>
                                    <h1>boost your company’s</h1>
                                    <h1>success!</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
