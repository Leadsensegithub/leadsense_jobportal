/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../css/LandingPage.css'
import Assets from '../assets/Assets';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../com/DefaultLayout (1)';
import SlideButtons from '../com/SlideButtons';
// import DefaultLayout from '../defaultLayout/DefaultLayout';
 

function LandingPage() {

 const nav = useNavigate()

 const handlebtn =()=>{
    nav("/companyRegister")
 }
const list = [["Java Developer","Technical Lead","Cyber Security"],["Full Stack Developer","Front End Developer","Business Analyst"]]
    return (
        <>
            <div className='landingPage'>
              <DefaultLayout />
                <div className='imgs'>
                    <img src={Assets?.Top}></img>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='header'>
                        </div>
                    </div>
                    <div className='col-12'>
    <div className='info-body'>
    <div className='col-12'>
    <div className='info-body'>
        <div className='row'>
         
        
            <div className='col-12'>
                <div className='search_info' style={{display:"flex"}}>
                    <input className='skills p-2' placeholder='Enter skills / job title'></input>
                    <input className='University p-2' placeholder='University'></input>
                    <input className='Locations p-2' placeholder='Locations'></input>
                    <button className='Search btn btn-primary'>Search</button>
                </div>
            </div>
 
      
            <div className='col-12 text-center  h1-contant'>
                <h1>Find skilled professionals to</h1>
                <h1>boost your company’s</h1>
                <h1>success!</h1>
            </div>
 
        </div>
    </div>
</div>

    </div>
</div>


                </div>
             

            </div>
            
            

        

<div className="head_card">
    <div>
        <p>Provide experienced talent for simplified employee placement.</p>
        <p style={{fontSize:"15px"}}>Streamlining process for efficient workforce integration.</p>
    </div>
    <div>
        <button className="text-white btn btn-danger pr-5 pl-5 trynow_btn">Try now</button>
    </div>
</div>

                

<div className='job_intern'>
  <h1>Job</h1>
  <h1>Internship</h1>
</div>

<div className='d-flex justify-content-around flex-wrap'>
  <div className='cards'>
    <p>Full stack Developer</p>
    <p style={{ marginRight: "69px" }}>
      <i style={{ marginRight: "8px" }} className="fa-solid fa-briefcase"></i>2 years.
    </p>
    <p style={{ marginRight: "30px" }}>
      <i style={{ marginRight: "8px" }} className="fa-solid fa-location-dot"></i>Chennai,Delhi
    </p>
  </div>

  <div className='cards'>
    <p>Full stack Developer</p>
    <p style={{ marginRight: "69px" }}>
      <i style={{ marginRight: "8px" }} className="fa-solid fa-briefcase"></i>2 years.
    </p>
    <p style={{ marginRight: "30px" }}>
      <i style={{ marginRight: "8px" }} className="fa-solid fa-location-dot"></i>Chennai,Delhi
    </p>
  </div>

  <div className='cards'>
    <p>Full stack Developer</p>
    <p style={{ marginRight: "69px" }}>
      <i style={{ marginRight: "8px" }} className="fa-solid fa-briefcase"></i>2 years.
    </p>
    <p style={{ marginRight: "30px" }}>
      <i style={{ marginRight: "8px" }} className="fa-solid fa-location-dot"></i>Chennai,Delhi
    </p>
  </div>
</div>



<div className="container-fluid box_card px-3 px-md-5 py-4">
    <div className="text-center mb-4">
        <h2 className="h4 mb-3">Upcoming Events <br /> and Challenges</h2>
    </div>
    <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mb-3">
            <div className="bg-dark text-white p-4 rounded shadow-sm">
                <h3 className="event_card h6"></h3>
                <p className="mt-2"></p>
            </div>
        </div>
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mb-3">
            <div className="bg-dark text-white p-4 rounded shadow-sm">
                <h3 className="event_card h6"> </h3>
                <p className="mt-2"></p>
            </div>
        </div>
        {/* <!-- Add more events if needed --> */}
    </div>
</div>



                  <div className='career-container'>
  <div className='career'>
    <span>Explore Business Listing</span> <span>Across Key Career Paths</span>
    <img className='career_img' src={Assets.Career_img} alt="Career" />
  </div>

  <div className='career_btn'>
    <div>
    <div>
      <SlideButtons list={list}/>
  </div>
    </div>

  </div>
</div>





                  <div className='empty-box'>

                  
                  </div>

                     

                 
                  <div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-md-4 mb-4">
      <div className="buy_card">
        <p>Silver</p>
        <button>Buy now</button>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="buy_card buy_card_gold">
        <p>Gold</p>
        <button>Buy now</button>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="buy_card">
        <p>Platinum</p>
        <button>Buy now</button>
      </div>
    </div>
  </div>
</div>


               
        





                  <footer style={{marginTop:"30px"}}>
        &copy; <span id="year"></span> Leaadsense. All rights reserved.
    </footer>


              
           
        </>


    )
}

export default LandingPage; 