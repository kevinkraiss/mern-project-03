import {useState} from 'react';
import footerImage from "../assets/views-panorama.jpg"
// import Api from "../components/api"


function DropDown(props) {
  console.log(props)
  
const [cityName,setCityName]=useState('')

  const handleClick= event=>{
   let cityName 
    if(event.target.innerText==="Milwaukee"){
      console.log('Restaurants in MKE')
     return 'Milwaukee'
    
    }else if(event.target.innerText==="Madison"){
      console.log('Restaurants in Madison')
    cityName = "Madison"
}else if(event.target.innerText==="Green Bay"){
  console.log('Restaurants in Green Bay')
  cityName ='Green Bay'
}else if(event.target.innerText==="Kenosha"){
  console.log('Restaurants in Kenosha')
  cityName ='Kenosha'
}else if(event.target.innerText==="Racine"){
  console.log('Restaurants in Racine')
  cityName ='Racine'
}else if(event.target.innerText==="Appleton"){
  console.log('Restaurants in Appleton')
  cityName ='Appleton'
}else if(event.target.innerText==="Sheboygan"){
  console.log('Restaurants in Sheboygan')
  cityName ='Sheboygan'
}else if(event.target.innerText==="Eau Claire"){
  console.log('Restaurants in Eau Claire')
  cityName ='Eau Claire'
}else if(event.target.innerText==="Oshkosh"){
  console.log('Restaurants in Oshkosh')
  cityName ='Oshkosh'
}else if(event.target.innerText==="Wauwatosa"){
  console.log('Restaurants in Wauwatosa')
  cityName ='Wauwatosa'
}else if(event.target.innerText==="Greenfield"){
  console.log('Restaurants in Greenfield')
  cityName ='Greenfield'
}else if(event.target.innerText==="West Bend"){
  console.log('West of What?!?!')
  cityName ='West Bend'
}else if(event.target.innerText==="Neenah"){
  console.log('Neenah Foundry')
  cityName ='Neenah'
}else if(event.target.innerText==="Superior"){
  console.log('Just Fish Boils and taffy')
  cityName ='Superior'
}else if(event.target.innerText==="Stevens Point"){
  console.log('Erberts and Gerberts and Taco Bell')
  cityName ='Stevens Point'
}else{
  console.log('Restaurant in Chippewa Falls- one')
  cityName ='Chippewa Falls'
  }
}
console.log('console.log:',)

return (

 

<div className="container mt-3">
  <div className="dropdown">
    <div className ="row">
        <div className="col-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select City
          </button>
        {/* <Api
        cityName={cityName}
        setCityName={setCityName}
      /> */}
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item" value="Milwaukee" href="#" onClick={handleClick}>Milwaukee</a></li>
            <li><a className="dropdown-item" value="Madison" href="#" onClick={handleClick}>Madison</a></li>
            <li><a className="dropdown-item" value="Green Bay" href="#" onClick={handleClick}>Green Bay</a></li>
            <li><a className="dropdown-item" value="Kenosha" href="#" onClick={handleClick}>Kenosha</a></li>
            <li><a className="dropdown-item" value="Racine" href="#" onClick={handleClick}>Racine</a></li>
            <li><a className="dropdown-item" value="Appleton" href="#" onClick={handleClick}>Appleton</a></li>
            <li><a className="dropdown-item" value="Sheboygan" href="#" onClick={handleClick}>Sheboygan</a></li>
            <li><a className="dropdown-item" value="Eau Claire" href="#" onClick={handleClick}>Eau Claire</a></li>
            <li><a className="dropdown-item" value="Oshkosh" href="#" onClick={handleClick}>Oshkosh</a></li>
            <li><a className="dropdown-item" value="Wauwatosa" href="#" onClick={handleClick}>Wauwatosa</a></li>
            <li><a className="dropdown-item" value="Greenfield" href="#" onClick={handleClick}>Greenfield</a></li>
            <li><a className="dropdown-item" value="West Bend" href="#" onClick={handleClick}>West Bend</a></li>
            <li><a className="dropdown-item" value="Neenah" href="#" onClick={handleClick}>Neenah</a></li>
            <li><a className="dropdown-item" value="Superior" href="#" onClick={handleClick}>Superior</a></li>
            <li><a className="dropdown-item" value="Stevens Point" href="#" onClick={handleClick}>Stevens Point</a></li>
            <li><a className="dropdown-item" value="Chippewa Falls" href="#"onClick={handleClick} >Chippewa Falls</a></li>
          </ul>
        </div>              
    </div>
  </div>                   
</div>
)
}

   
  export default DropDown;