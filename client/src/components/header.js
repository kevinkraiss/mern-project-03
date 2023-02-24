import React from 'react';
// import headerImage from "../assets/project-3-restaraunt-4.jpg"
 import headerImage from "../assets/very-wide-milwaukee.png"
 //import headerImage from "../assets/3-milwaukee-skyline-panorama.jpg"
//import headerImage from "../assets/betterMilwaukeeImage.jpg"



  function Header(props) {

    return (
        <div className="container" style={{backgroundImage:`url(${headerImage})`,height:"150px",backgroundSize:"100% 100%"}}>
  
        
  <div style={{
      display:"flex",
      justifyContent:"flex-start",
      paddingTop:"10px"
    }}>
            

    <h1 style={{
        fontSize:"25px",
        fontWeight:"bold",
        // borderLeft:"solid 5px",
        // borderRight:"solid 5px",
        color:"#851818",
        padding:"20px 0px 20px 20px"
        }}>
         VITTLES 
        </h1>

        <h1 style={{
        fontSize:"25px",
        fontWeight:"bold",
        // borderLeft:"solid 5px",
        // borderRight:"solid 5px",
        color:"#851818",
        padding:"20px 0px 20px 20px"
        }}>
         |
        </h1>    
           
    <h1  style={{
        fontSize:"25px",
        fontWeight:"bold",
        padding:"20px"
        }}>
        WISCONSIN
        </h1>
    </div>

        {/* <header>
           <div>

         {props.children}

        </div>
    </header> */}

         

        </div>
    );
  }
  
  export default Header;