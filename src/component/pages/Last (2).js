import React from "react";
function Last() {
  return (
    <>
      <div className="d-flex">
        <div>
          <p>Name</p>
          <p>E-mail</p>
          <p>Phone</p>
          <p>Role</p>
        </div>
        <div className="text-center">
          <p className="text-center"> :Tina</p>
          <p>:tina@gmail.com</p>
          <p>:093284181</p>
          <p>:digital marketic</p>
        </div>
      </div>

      <div>
        <div className="bg-dark text-white p-5 mt-3">
          <h1> Career Objective</h1>
          <p>
            Detail-oriented and data-driven Digital Marketing Analyst with a
            passion for leveraging analytical skills to optimize online
            marketing strategies. Seeking to contribute to a dynamic marketing
            team where I can utilize my expertise in data analysis, market
            research, and digital advertising to drive brand growth and improve
            campaign performance. Committed to staying ahead of industry trends
            and utilizing innovative techniques to enhance customer engagement
            and achieve business objectives.
          </p>
        </div>
      </div>

      <div style={{ marginLeft: "1400px" }}>
        <button className="btn btn-dark p-2 mt-2">Edit</button>
      </div>

      <div
        style={{
          height: "500px",
          border: "solid 3px grey",
          margin: "10px",
          height: "500px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="boxs"
        >
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "200px",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "200px",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "200px",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "200px",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "200px",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "200px",
            }}
          >
            1
          </div>{" "}
          <div
            style={{
              backgroundColor: "black ",
              padding: "20px",
              width: "100px",
            }}
          >
            1
          </div>
        </div>
      </div>
    </>
  );
}

export default Last;
