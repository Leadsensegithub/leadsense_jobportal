import React from "react";
import Fotter from "../com/Fotter";
import PageHeader from "../com/PageHeader";

function Last() {
  return (
    <>
    <PageHeader/>
      <div className="container">
        {/* Name and details section */}
        <div className="d-flex flex-column flex-md-row my-5">
          <div className="mr-md-4">
            <p>Name: Tina</p>
            <p>E-mail: tina@gmail.com</p>
            <p>Phone: 093284181</p>
            <p>Role: digital marketing</p>
          </div>
        </div>

        {/* Career objective section */}
        <div className="bg-dark text-white p-4 p-md-5 mt-3">
          <h1>Career Objective</h1>
          <p>
            Detail-oriented and data-driven Digital Marketing Analyst with a
            passion for leveraging analytical skills to optimize online marketing
            strategies. Seeking to contribute to a dynamic marketing team where
            I can utilize my expertise in data analysis, market research, and
            digital advertising to drive brand growth and improve campaign
            performance. Committed to staying ahead of industry trends and
            utilizing innovative techniques to enhance customer engagement and
            achieve business objectives.
          </p>
        </div>

        {/* Edit button - aligned to the right on larger screens */}
        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-dark p-2">Edit</button>
        </div>

        {/* Boxes section */}
        <div className="container mt-4" style={{ overflowX: "hidden" }}>
          <div className="row">
            {Array(4)
              .fill(1)
              .map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                >
                  <div
                    style={{
                      backgroundColor: "black",
                      padding: "20px",
                      width: "100%",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Last;
