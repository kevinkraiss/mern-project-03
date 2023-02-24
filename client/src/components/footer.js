import React from 'react';
// import footerImage from "../assets/views-panorama.jpg"
import footerImage from "../assets/farm-wide.jpg"

function Footer(props) {

    return (



<div className="container fixed-bottom text-center" style={{ display: 'flex', position: 'fixed',  backgroundImage: `url(${footerImage})`,height:"150px", backgroundSize:'100% 100%'}}>


  <div className="row"  style={{paddingTop:'10px'}}>
    <div className="col">
     <h1 style={{color:"white", fontSize:"25px",paddingTop:"5px"}}>
     VITTLES 2023
      </h1> 
    </div>
  </div>
  <div className="row">


    <div className="col-3">
       
    </div>

    <div className="col-6">
      

  <div className="col" style={{
      display:"flex",
      justifyContent:"space-around",
      paddingBottom:'10px'
    }}>
    <a 
      className="nav-link" 
      href="https://github.com/kevinkraiss/mern-project-03.git"
     >
    <i className="bi bi-github"
      style={{
        color:'white',
        fontSize:'25px',
        // paddingBottom:'100px'
    }}></i>
     </a> 
    
     <a 
        className="nav-link"
        href="mailto:bajebi.bb@gmail.com"
      >
       <i className="bi bi-envelope"
          style={{
            color:'white',
            fontSize:'25px',
            // paddingBottom:'100px'
      }} ></i>
      </a>
    </div>
</div>
    <div className="col-3">
       
    </div>

  </div>


</div>
    )
}
  export default Footer;