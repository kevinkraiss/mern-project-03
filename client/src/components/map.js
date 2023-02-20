import { useState,useEffect } from 'react'
import React from 'react';


import oshMap1 from '../assets/oshkosh-map-1.jpg';
import oshMap2 from '../assets/oshkosh-map-2.jpg'
    
   
function Maps(){
   
     const[map, setMap]=useState('RECENT VISITS')
     const[buttonText, setButtonText]=useState('SEE RECOMMENDED')

     const handleClick=event=>{ 
        if(map==='RECENT VISITS'){
            setMap('RECOMMENDED')
            setButtonText('SEE RECENT VISITS')
            }else{
            setMap('RECENT VISITS')
            setButtonText('SEE RECOMMENDED')
            }
           }

        
     return (
    <div className="card">
            <div className="card-header">VITTLES OSHKOSH</div>
                {map}
            <img src={map==='RECOMMENDED' ? oshMap2 : oshMap1} className="map" style={{height:"400px", width:"400px"}} />
           
            <button style={{border:"solid",borderRadius:"10px"}}onClick={handleClick}>{buttonText}</button>
  
    </div>



)
}

      export default Maps;
