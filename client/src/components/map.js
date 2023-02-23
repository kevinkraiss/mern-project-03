import { useState,useEffect } from 'react'
import React from 'react';

import oshMap1 from '../assets/oshkosh-map-1.jpg';
import oshMap2 from '../assets/oshkosh-map-2.jpg'

const Maps =({cityName, setCityName})=>{
    // console.log()
    
    const[map, setMap]=useState('RECENTLY VISITED')
    const[buttonText, setButtonText]=useState('SEE RECOMMENDED')
    ///////////////////////////////
    const [data,setData]=useState('')

    const childToParent=()=>{
        
    }
//////////////////////////////////////////
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

<>

    <div className="card mb-2">
         {cityName}
        <div className="card-header">VITTLES WISCONSIN</div>
        {map}
        <img src={map==='RECOMMENDED' ? oshMap2 : oshMap1} className="map" style={{height:"auto"}} />
        <button style={{marginBottom: "5px", border:"solid",borderRadius:"10px"}}onClick={handleClick}>{buttonText}</button>
    </div>
</>
       
)
}

      export default Maps;
