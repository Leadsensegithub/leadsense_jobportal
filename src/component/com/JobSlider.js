import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/JobSlider.css";

const JobSlider = () => {
  const sliderRef = useRef(null);

  const jobCards = [
    { title: "Full Stack Developer", experience: "2 years", locations: "Chennai, Delhi" },
    { title: "Front End Developer", experience: "3 years", locations: "Bangalore, Mumbai" },
    { title: "Backend Developer", experience: "1 year", locations: "Pune, Chennai" },
    { title: "DevOps Engineer", experience: "4 years", locations: "Hyderabad, Mumbai" },
    { title: "Data Scientist", experience: "2 years", locations: "Delhi, Bangalore" },
    { title: "AI Specialist", experience: "3 years", locations: "Chennai, Pune" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {jobCards.map((job, index) => (
          <div key={index} className="cards">
            <p>{job.title}</p>
            <p>
              <i className="fa-solid fa-briefcase" style={{ marginRight: "8px", color: "black" }}></i>
              {job.experience}
            </p>
            <p>
              <i className="fa-solid fa-location-dot" style={{ marginRight: "8px" }}></i>
              {job.locations}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobSlider;
