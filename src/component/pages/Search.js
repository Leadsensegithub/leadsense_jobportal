import React from 'react';
import "../css/Search.css";
import Assets from '../assets/Assets';

function Search() {
  return (
    <>
    <div className='ls_img '>
                    <img style={{marginRight:"1200px"}} src={Assets.LSmediaLOGO}></img>
                    <button className='btn btn-dark'>LogOut</button>
                </div>
      <div className="input d-flex align-items-center mt-5" >
        <div className="search_info d-flex gap-2 w-100">
          <input placeholder="Enter skills / job title" />
          <input  placeholder="University" />
          <input  placeholder="Locations" />
        </div>
        <div className='d-flex'>
        <span className=" btn_search">Search</span>
        <button style={{marginLeft:"500px ", alignItems:"center", width:"150px" }} className='btn btn-danger '>LogOut</button>
      </div>
   
    
      </div>

      <div style={{height:"500px", border:"solid 3px grey", marginTop:"50px", margin:"10px", height:"500px"}}> 
                     <div style={{display:"flex", justifyContent:"space-between"}} className='boxs'>
                        <div style={{backgroundColor:"black ", padding:"20px", width:"200px"}}>1</div>
                        <div style={{backgroundColor:"black ", padding:"20px", width:"200px"}}>1</div>
                        <div style={{backgroundColor:"black ", padding:"20px", width:"200px"}}>1</div>
                        <div style={{backgroundColor:"black ", padding:"20px", width:"200px"}}>1</div>  
                        <div style={{backgroundColor:"black ", padding:"20px", width:"200px"}}>1</div>   
                        <div style={{backgroundColor:"black ", padding:"20px", width:"200px"}}>1</div>                  
                        <div style={{backgroundColor:"black ", padding:"20px", width:"100px"}}>1</div>
                        

                        
                    
                        </div>
                    </div>








      {/* <div>
      <i className='left_arr ' class="fa-solid fa-arrow-left-long"></i> <i class="fa-solid fa-arrow-right"></i>
      </div> */}
    </>
  );
}

export default Search;
