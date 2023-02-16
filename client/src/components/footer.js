import React from 'react';
import footerImage from "../assets/wide-angle.jpg"

function Footer(props) {

    return (


<div class="container fixed-bottom text-center" style={{backgroundImage: `url(${footerImage})`}}>

  <div class="row">
    <div class="col">
     <h1 style={{color:"white", fontSize:"40px"}}>
     VITTELS 2023
        </h1> 
    </div>
    
  </div>
  <div class="row">

    <div class="col-3">
      1 
    </div>
    <div class="col-6">
      2 



      <div className="col" style={{
                display:"flex",
                justifyContent:"space-around"
            }}>
                <a 
                className="nav-link" 
                // href="https://github.com/bjbci?tab=repositories"

                href="https://github.com/kevinkraiss/mern-project-03.git"
                >
                <i className="bi bi-github"
                style={{
                    color:'white',
                    fontSize:'40px'
                }}></i>
                </a> 
    
                <a 
                className="nav-link"
                href="mailto:bajebi.bb@gmail.com"
                >
                <i className="bi bi-envelope"
                style={{
                    color:'white',
                    fontSize:'40px'
                }} ></i>
                </a>
            </div>

    </div>
    <div class="col-3">
      3 
    </div>

  </div>


</div>
    )
}
  export default Footer;