import React, { useState,useEffect } from "react";
import "../css/LandingPage.css";
import Assets from "../assets/Assets";
import DefaultHeader from "../com/DefaultHeader";
import JobSlider from "../com/JobSlider"; 
import SliderComponent from "./SliderComponent";  
import BuyCards from "../com/BuyCards";  
import Fotter from "../com/Fotter";   


const LandingPage = () => {


     // Scroll to top on component load
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const [input, setInput] = useState({
    skills: "",
    university: "",
    locations: "",
  });

  // State to manage filtered suggestions for each field
  const [filteredSuggestions, setFilteredSuggestions] = useState({
    skills: [],
    universities: [],
    locations: [],
  });

  // Lists of possible suggestions
  const skillsList = [
    "JavaScript", "React", "Node.js", "CSS", "HTML", "Python", 
    "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle DB", "Firebase"
  ];

  const universitiesList = [
    "MIT", "Harvard", "Stanford", "Bharathidasan University", 
    "Indian Institute of Technology (IIT) Bombay", 
    "Indian Institute of Technology (IIT) Delhi", 
    "Indian Institute of Technology (IIT) Kanpur", 
    "Indian Institute of Technology (IIT) Madras", 
    "Indian Institute of Technology (IIT) Kharagpur", 
    "Indian Institute of Science (IISc), Bangalore", 
    "Jawaharlal Nehru University (JNU), New Delhi", 
    "University of Delhi (DU)", 
    "University of Pune (SPPU)", 
    "Banasthali Vidyapith, Rajasthan", 
    "Banaras Hindu University (BHU), Varanasi", 
    "Bharathidasan University, Tamil Nadu", 
    "Anna University, Chennai", 
    "Jadavpur University, Kolkata"
  ];

  const locationsList = [
    "Tiruchirappalli", "Chennai", "Bangalore", "Mumbai", 
    "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Jaipur", 
    "Chandigarh", "Kochi", "Lucknow", "Mysore", "Goa"
  ];

  // Handle input change and filter suggestions
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setInput({
      ...input,
      [field]: value,
    });

    let updatedSuggestions = { ...filteredSuggestions };

    if (field === "skills") {
      updatedSuggestions.skills = skillsList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (field === "university") {
      updatedSuggestions.universities = universitiesList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (field === "locations") {
      updatedSuggestions.locations = locationsList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredSuggestions(updatedSuggestions);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion, type) => {
    setInput((prevInput) => ({
      ...prevInput,
      [type]: suggestion,
    }));

    setFilteredSuggestions((prev) => ({
      ...prev,
      [type]: [], // Clear suggestions after selection
    }));
  };
  return (
    <>
    <div>
      <div className="landingPage">
        <DefaultHeader />
        <div className="imgs" style={{marginTop:"50px"}}>
          <img src={Assets?.Top} alt="top" />
        </div>
       

        <div style={{ marginLeft: "30px", marginTop: "50px" }} className="container">
      <div className="row">
        <div className="col-12">
          <div className="row bg-white p-2 rounded-3 shadow-sm align-items-center position-relative">
            
            {/* Skills Input */}
            <div className="col-12 col-sm-4 col-md-3">
              <div className="form-floating">
                <input
                  style={{ width: "100%", fontSize: "1.3rem" }}
                  type="text"
                  className="form-control form-control-sm"
                  id="skillsInput"
                  placeholder="Skills / Job Title"
                  value={input.skills}
                  onChange={(e) => handleInputChange(e, "skills")}
                />
                <label htmlFor="skillsInput">Skills / Job Title</label>
                {filteredSuggestions.skills.length > 0 && (
                  <ul className="suggestion-list mt-2 position-absolute w-100">
                    {filteredSuggestions.skills.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSuggestionClick(suggestion, "skills")}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* University Input */}
            <div className="col-12 col-sm-4 col-md-3">
              <div className="form-floating">
                <input
                  style={{ width: "100%", fontSize: "1.3rem" }}
                  type="text"
                  className="form-control form-control-sm"
                  id="universityInput"
                  placeholder="University"
                  value={input.university}
                  onChange={(e) => handleInputChange(e, "university")}
                />
                <label htmlFor="universityInput">University</label>
                {filteredSuggestions.universities.length > 0 &&   (
                  <ul
                    className="suggestion-list mt-2 position-absolute w-100"
                    style={{
                     
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  >
                    {filteredSuggestions.universities.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSuggestionClick(suggestion, "university")}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Location Input */}
            <div className="col-12 col-sm-4 col-md-3">
              <div className="form-floating">
                <input
                  style={{ width: "100%", fontSize: "1.3rem" }}
                  type="text"
                  className="form-control form-control-sm"
                  id="locationInput"
                  placeholder="Locations"
                  value={input.locations}
                  onChange={(e) => handleInputChange(e, "locations")}
                />
                <label htmlFor="locationInput">Locations</label>
                {filteredSuggestions.locations.length > 0 && (
                  <ul className="suggestion-list mt-2 position-absolute w-100">
                    {filteredSuggestions.locations.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSuggestionClick(suggestion, "locations")}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="col-12 col-sm-4 col-md-2">
              <button className="btn btn-danger btn-sm w-100" style={{ padding: "10px", fontSize: "larger" }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>




      </div>
    </div>
 


<div className="media" style={{marginTop:"50px"}}>
<div className="header-content">
  <h1>Find Your Next Career Opportunity</h1>
  <p className="tagline">Your gateway to top jobs and opportunities</p>
  <span>Discover new roles that match your skills and ambitions.</span>
  <span>Apply effortlessly and take the next step in your career journey.</span>
  <button style={{backgroundColor:" #AFC9F3"}} className="btn btn-primary text-dark">Join Us Today!</button>
</div>
</div>
   


      <div className="head_card">
        <div>
          <p>Provide experienced talent for simplified employee placement.</p>
          <p style={{ fontSize: "15px" }}>
            Streamlining process for efficient workforce integration.
          </p>
        </div>
        <div>
          <button className="text-white btn btn-danger pr-5 pl-5 trynow_btn">
            Try now
          </button>
        </div>
      </div>

      <div className="job_intern">
        <h1>Job</h1>
        <h1>Internship</h1>
      </div>

      <div className="">
          <JobSlider />
      </div>

      <div>
        <h1
          style={{
            fontSize: "18px",
            color: "#707070",
            fontWeight: "normal",
            marginTop: "50px",
          }}
        >
          We're the lead generation agency that can help you grow your business,
          <br /> that covers all your verticles.
        </h1>
      </div>

      <div className="container-fluid mt-5 bg-light p-5 rounded">
        <div className="row text-center">
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Edu}
                alt="Education"
              />
              <h1 className="h5 mt-2">Education</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Heath}
                alt="Healthcare"
              />
              <h1 className="h5 mt-2">Healthcare</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Reality}
                alt="Realty"
              />
              <h1 className="h5 mt-2">Realty</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Gadgets}
                alt="Gadgets"
              />
              <h1 className="h5 mt-2">Gadgets</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Sports}
                alt="Sports"
              />
              <h1 className="h5 mt-2">Sports</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Hospitality}
                alt="Hospitality"
              />
              <h1 className="h5 mt-2">Hospitality</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginTop: "50px" }}>
          <SliderComponent />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "whitesmoke",
          padding: "30px 40px",
          borderRadius: "20px",
          marginTop: "40px",
        }}
        className="container-fluid"
      >
        <div
          style={{
            padding: "0 15px",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
          className="row section"
        >
          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Digital Marketing</h1>
                <p className="text-left">
                  We help businesses grow their online presence and reach their
                  target audience through a variety of digital marketing
                  channels, including search engine optimization (SEO),
                  pay-per-click (PPC) advertising, social media marketing, and
                  email marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Grow your business</h1>
                <p className="text-left">
                  We provide the strategies and tools you need to grow your
                  business, from increasing brand awareness to generating leads
                  and sales. We work with you to understand your goals and
                  develop a customized marketing plan that will help you achieve
                  them.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Branding</h1>
                <p className="text-left">
                  We help businesses create a strong and memorable brand that
                  will resonate with their target audience. We develop branding
                  strategies that include logo design, website development, and
                  social media marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div>
        <BuyCards />
       </div>

<Fotter/>
 
    </>
  );
}

export default LandingPage;
