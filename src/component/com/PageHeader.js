import React from "react";
import { useNavigate } from "react-router-dom";
import Assests from "../assets/Assets"
import "../css/Pageheader.css" 
const PageHeader = () => {
  const nav = useNavigate();

  function handleClick() {
    nav(-1);
  }

  return (
    <>
    
        <div className="pagehead ">
        <div style={{alignItems:"center", marginTop:"10px"}} className="container">
     
     <div style={{marginTop:"20px"}} className="d-flex align-items-center">
       <i
         className="fa-solid fa-circle-chevron-left fa-2xl"
         style={{ color: "#c3c6d1", cursor: "pointer", marginRight: "8px", }}
         onClick={handleClick}
       ></i>
       <span>Back</span>
     </div>
   </div>
      <img src={Assests.LSmediaLOGO} alt="Logo" className="pageheader_logo" />
    </div>
  
    </>
 
  );
};

export default PageHeader;
