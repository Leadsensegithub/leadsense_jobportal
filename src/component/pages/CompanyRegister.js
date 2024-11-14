import React, { useEffect, useState } from "react";
import "../css/CompanyRegister.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Loader from "../com/Loader";
import DefaultLayout from '../com/DefaultLayout (1)';

const CompanyRegister = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        nav("/companyotp");
      }, 3000);
    }
  }, [loading]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [data, setData] = useState({
    companyName: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    flavor: null,
  });

  const [errors, setErrors] = useState({
    companyNameError: false,
    nameError: false,
    phoneError: false,
    emailError: false,
    passwordError: false,
    flavorError: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevData) => ({
      ...prevData,
      nameError:
        name === "name" && (!value || value[0] !== value[0].toUpperCase()),
      companyNameError: name === "companyName" && !value,
      emailError: name === "email" && (!value.includes("@")),
      phoneError: name === "phone" && value.length !== 10,
      passwordError: name === "password" && value.length < 6,
    }));
  }

  function handleSelectChange(name, selectedOption) {
    setData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedErrors = {
      nameError: !data.name || data.name[0] !== data.name[0].toUpperCase(),
      companyNameError: !data.companyName,
      emailError: !data.email.includes("@"),
      phoneError: data.phone.length !== 10,
      passwordError: data.password.length < 6,
      flavorError: !data.flavor,
    };
    setErrors(updatedErrors);

    const isFormValid = Object.values(updatedErrors).every((error) => !error);
    if (isFormValid) {
      setLoading(true);
    }
  }

  return (
    <div>
      <DefaultLayout />
      {loading ? <Loader /> : <></>}
      <div className="BoxModel shadow-bottom">
        <form onSubmit={handleSubmit}>
          <p className="text-danger text-center pt-4 headername">Company registration</p>

          <div className="row mt-5 pt-3">
            <div className="col d-flex justify-content-around">
              <input
                name="companyName"
                placeholder="Company Name"
                type="text"
                className="form-control w-25 inputStyle"
                value={data.companyName}
                onChange={handleChange}
              />
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="form-control w-25 inputStyle"
                value={data.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-between">
              {errors.companyNameError ? (
                <p className="paraStyleleft text-danger">Please Enter a valid Company Name</p>
              ) : (
                <p></p>
              )}
              {errors.nameError ? (
                <p className="paraStyleRight text-danger">Please Enter a valid Name</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-around">
              <input
                name="phone"
                placeholder="Phone"
                type="text"
                className="form-control w-25 inputStyle"
                value={data.phone}
                onChange={handleChange}
              />
              <Select
                options={options}
                className="dropDown"
                value={data.flavor}
                onChange={(selectedOption) => handleSelectChange("flavor", selectedOption)}
              />
            </div>
          </div>

          <div className="row pt-0">
            <div className="col d-flex justify-content-between">
              {errors.phoneError ? (
                <p className="paraStyleleft text-danger">Please Enter a valid phone number</p>
              ) : (
                <p></p>
              )}
              {errors.flavorError ? (
                <p className="paraStyleRight text-danger">Please select a valid option</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-around">
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="form-control w-25 inputStyle"
                value={data.email}
                onChange={handleChange}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                className="form-control w-25 inputStyle"
                value={data.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-between">
              {errors.emailError ? (
                <p className="paraStyleleft text-danger">Please Enter a valid email</p>
              ) : (
                <p></p>
              )}
              {errors.passwordError ? (
                <p className="paraStyleRight text-danger">Password must be at least 6 characters</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-danger btn-lg buttonMargin px-5">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegister;
