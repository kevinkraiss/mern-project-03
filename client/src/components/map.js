import { useState,useEffect } from 'react'
import React from 'react';


import oshMap1 from '../assets/oshkosh-map-1.jpg';
import oshMap2 from '../assets/oshkosh-map-2.jpg'
    
   
function Maps(){
    // const[map, setMap]=useState(`(${oshMap1})`)
     const[map, setMap]=useState('popular')

    //     const dataSource = [
    //         \client\src\assets\oshkosh-map-1.jpg
    
    //         client\src\assets\oshkosh-map-2.jpg
    
    //         /////OR???
    //         {oshMap1} {oshMap2}
    // ];
    // const [allMaps]=useState([

    //     {
    //         id:0,
    //         mapName: "Oshkosh Places Visited ",
    //         image: oshMap1,
    //         alt:"city map of oshkosh",
    //         text:"ESTABLISMENTS YOU'VE VISITED",
    //         },
    //     {
    //         id:1,
    //         appName: "Oshkosh places recommended",
    //         image: oshMap2,
    //         alt:"city map of oshkosh",
    //         text:"ESTABLISHMENTS RECOMMENDED FOR YOU",
    //        },
    //     ])
        
        const handleClick=event=>{ 
                if(map==='popular'){
                    setMap('recommended')
                }else{
                    setMap('popular')
                }
            {console.log('clicked')}
            // let file=event.target.files[0]
            // setMap(`(${oshMap2})`)

        }
        
     return (
    <div className="card">
            <div className="card-header">VITTLES OSHKOSH</div>
                {map}
            <img src={map==='popular' ? oshMap2 : oshMap1} className="map" style={{height:"250px", width:"250px"}} />
                {/* <img src={map} className="map" style={{height:"250px", width:"250px"}} /> */}
           
                {/* <div className="image" style={{backgroundImage:`url(${oshMap1})`}}></div> */}
                {/* <img map></img> */}



            <button onClick={handleClick}>CHANGE MAP VIEW</button>
  
    </div>



)
}

      export default Maps;
