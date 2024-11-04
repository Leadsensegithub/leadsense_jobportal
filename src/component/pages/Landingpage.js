import React from 'react';
import '../css/LandingPage.css'
import Assets from '../assets/Assets';

function LandingPage() {
    return (
        <>
            <div className='landingPage'>
                <div className='imgs'>
                    <img src={Assets?.Top}></img>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='header'>
                            <div className='header-body'>
                                <div>
                                    <img src={Assets?.LSmediaLOGO}></img>
                                </div>
                                <div className='buttons-info'>
                                    <button className='btn login'>Login</button>
                                    <button className='btn register'>Register</button>
                                    <button className='btn c_register'>Company  Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='info-body'>

                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='search_info'>
                                        <img></img>
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
