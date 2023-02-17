import React from 'react';
// import headerImage from "../assets/project-3-restaraunt-4.jpg"
import headerImage from "../assets/milwaukee-wide.jpg"



  function Header(props) {

    return (
        <div className="container" style={{backgroundImage:`url(${headerImage})`,height:"150px",backgroundSize:"contain"}}>
  
        
  <div style={{
      display:"flex",
      justifyContent:"flex-start",
      paddingTop:"10px"
    }}>
            

    <h1 style={{
        fontWeight:"bold",
        borderLeft:"solid 5px",
        borderRight:"solid 5px",
        color:"#0d6efd",
        padding:"20px 20px 20px 20px"
        }}>
         VITTLES
        </h1>
           
    <h1  style={{
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