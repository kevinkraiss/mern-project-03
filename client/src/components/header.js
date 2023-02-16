import React from 'react';
// import headerImage from "../assets/project-3-restaraunt-4.jpg"
import headerImage from "../assets/milwaukee-wide.jpg"



  function Header(props) {

    return (
        <div class="container" style={{backgroundImage:`url(${headerImage})`,height:"150px",backgroundSize:"contain"}}>
  
         {/* <div className="position-absolute top-0 end-0"> */}
  {/* <div class="container fixed-bottom text-center" style={{backgroundImage: `url(${headerImage})`}}> */}
  <div style={{display:"flex", justifyContent:"flex-start"}}>
                <h1 style={{padding:"20px"}}>
                    VITTILS
                {/* <img src={headerImage} style={{alignContent:"center" }}alt="restaraunt-background background"></img> */}
                </h1>

                <h2  style={{padding:"20px"}}>
                    WISCONSIN
                </h2>
  </div>

            <header>
                <div>

                {props.children}

                </div>
            </header>

         {/* </div> */}

        </div>
    );
  }
  
  export default Header;