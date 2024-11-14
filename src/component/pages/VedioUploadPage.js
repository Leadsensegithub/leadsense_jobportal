import { useState } from "react";
import Button from "../com/Button";
import { useNavigate } from "react-router-dom";
import Fotter from "../com/Fotter";

const VedioUploadPage = ({ onNext }) => {
  const nav = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a video file to upload.");
    }
  }

  function handleButton() {
    if (file) {
      nav("/lastpage");
      onNext();
    } else {
      setError("Please select a video file to upload.");
    }
  }

  return (
    <div>
    <div className="container">
      <div className="container d-flex mt-5">
        <div className="d-flex flex-column mt-5">
          <div className="d-flex">Please create a short,</div>
          <div className="d-flex">engaging video and upload it </div>
          <div className="d-flex">here for everyone to view</div>
        </div>
      </div>
      <div className="container d-flex mt-5">
        <input type="file" onChange={handleChange} />
      </div>
      {error && <div className=" d-flex text-danger mt-2">{error}</div>}
      <div className="d-flex justify-content-end mt-5">
        <Button onClick={handleButton}>Submit</Button>
      </div>
      </div>
      <Fotter/>
    </div>
  );
};

export default VedioUploadPage;
