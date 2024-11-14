import React, { useState } from "react";
import "../css/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assets from "../assets/Assets";
import SliderComponent from "../com/SliderComponent";

const images = [Assets.GroupImg, Assets.LaptopUse, Assets.passPort];

function AboutUs() {
  const [para, setPara] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      imgSrc: Assets.RoundImg,
      name: "John Doe",
      description:
        "I recently had the pleasure of working with this team, and my experience was outstanding. The project was handled with a high level of professionalism and attention to detail.",
    },
    {
      imgSrc: Assets.RoundImg,
      name: "Jane Doe",
      description:
        "The team was fantastic, delivering beyond expectations. They kept everything well-organized and maintained clear communication throughout.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    imgSrc: Assets.RoundImg,
    name: "",
    description: "",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePopUP = () => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({ imgSrc: Assets.RoundImg, name: "", description: "" });
    toggleModal();
  };

  function handleclick() {
    setPara(!para);
  }

  return (
    <div>
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control mb-3"
                  name="name"
                  value={newReview.name}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Your review"
                  className="form-control mb-3"
                  name="description"
                  value={newReview.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePopUP}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <SliderComponent images={images} />

      <section className="stats-section text-center my-5">
        <div>
          <div className="row">
            <div className="col-md-4 d-flex flex-column align-items-center pt-5 mt-3">
              <h1>20.5k</h1>
              <p>Successfully Trained</p>
              <h1>450+</h1>
              <p>Students Community</p>
              <h1>20.5k</h1>
              <p>Successfully Trained</p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src={Assets.LaptopUse}
                alt="Loading...."
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-5">
              <h1>Creative agency and their best solutions</h1>
              <p>Ultrices gravida dictum fusce ut placerat orci nulla</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section text-black py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-12 d-flex flex-column align-items-center custom-gap mb-4">
              <h1 className="text-start">Create an Effective Web Interior Design</h1>
              <p className="text-start">
                You can accept or decline this invitation. You can also head
                over to https://github.com/Leadsensegithub/hanish to check out
                the repository or visit @Leadsensegithub to learn a bit more
                about them.
              </p>
              <button className="btn btn-primary mb-4">Contact us</button>
            </div>
            <div className="col-md-4 col-12 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              {para && (
                <div className="text-start w-100 pl-4">
                  <small>
                    In this fast-paced party game based on the hit TV game show,
                    two clue-givers bet on how few words they'll need to have
                    their teammate(s) guess five secret answers, starting at 25.
                    The lowest bidder takes the card and must beat the challenge
                    within their limited clues–and time!
                  </small>
                </div>
              )}
              <hr className="w-100" />

              <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <hr className="w-100" />

              <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <hr className="w-100" />

              <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section my-5">
        <div className="container">
          <h1 className="text-center mb-4">Our awarded speakers & Team mentors</h1>
          <div className="row justify-content-evenly">
            {reviews.map((rev, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-5 card1">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={rev.imgSrc} alt="team member" className="img-fluid re-img" />
                  <h5>{rev.name}</h5>
                </div>
                <div className="text-center">
                  <p>{rev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reviewButton">
          <button className="btn btn-primary btn-lg" onClick={toggleModal}>
            Review us
          </button>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-start">LeadSense</h5>
              <p className="text-start">
                To envision LeadSense as a trusted global leader in the digital
                landscape, providing online solutions for individuals and
                businesses.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@leadsense.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
