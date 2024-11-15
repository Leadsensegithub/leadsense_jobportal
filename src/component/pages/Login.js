import React, { useState, useEffect, useRef } from "react";
import Assets from "../assets/Assets";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import Loader from "../com/Loader";

const Login = () => {
  const buttonRef = useRef(null);
  const [activeButton, setActiveButton] = useState("Student");
  const [formActive, setFormActive] = useState(false);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({ mail: "", password: "" });
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(null);
  const DummyData = {
    student: { mail: "hanish@", password: "123" },
    company: { mail: "harish@", password: "456" },
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    if (typeof data.mail === "string" && data.mail.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  }
  function handleActiveStudent() {
    setData((prevState) => ({
      mail: "",
      password: "",
    }));
    setActiveButton("Student");
    setLoader(true)
    setTimeout(()=>{
        setLoader(false)
    },3000)
  }
  function handleActiveCompany() {
    setData((prevState) => ({
      mail: "",
      password: "",
    }));
    setActiveButton("Company");
    setLoader(true)
    setTimeout(()=>{
        setLoader(false)
    },3000)
  }
  function handleValidation(e) {
    e.preventDefault();
    activeButton === "Company"
      ? handleLoginButtonCompany()
      : handleLoginButtonStudent();
  }
  function handleLoginButtonStudent() {
    console.log(data, DummyData);

    if (
      data.mail === DummyData.student.mail &&
      data.password === DummyData.student.password
    ) {
        console.log(data.mail === DummyData.student.mail &&
            data.password === DummyData.student.password)
      navigate("/");
    } else {
      setValidation(true);
    }
  }
  function handleLoginButtonCompany() {
    if (
      data.mail === DummyData.company.mail &&
      data.password === DummyData.company.password
    ) {
        console.log(data.mail === DummyData.student.mail &&
            data.password === DummyData.student.password)
      navigate("/");
    } else {
      setValidation(true);
    }
  }
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
        {loader&&<Loader/>}
      <div className="row w-100">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img
            src={Assets.Design}
            alt="Group Illustration"
            className="img-fluid images"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div
            className={`border w-75 rounded p-4 transition-all ${
              formActive ? "form-active" : "form-inactive"
            }`}
            onClick={() => setFormActive(true)}
          >
            <div className="button-container d-flex">
              <button
                className={`merged-button-left ${
                  activeButton === "Student" ? "merged-button-left-active" : ""
                } flex-grow-1`}
                ref={buttonRef}
                onClick={() => handleActiveStudent()}
              >
                Student
              </button>
              <button
                className={`merged-button-right ${
                  activeButton === "Company" ? "merged-button-left-active" : ""
                } flex-grow-1`}
                onClick={() => handleActiveCompany()}
              >
                Company
              </button>
            </div>
            <h2 className="text-center py-3">{activeButton} Login</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="mail"
                  value={data.mail}
                  onChange={(e) => handleChange(e)}
                />
                {error && (
                  <small className="d-flex ml-2 text-danger">
                    {" "}
                    Please enter a valid mail id
                  </small>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  value={data.password}
                />
              </div>
              {validation && (
                <small className="text-danger">Invalid Credentials</small>
              )}
              <div className="mb-3">
                <small>Forget password?</small>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={(e) => handleValidation(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
