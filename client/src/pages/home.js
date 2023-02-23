import React from 'react';
import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';
import Map from '../components/map'
// import DropDown from '../components/dropDown'
// import Api from '../components/api'
// import ApiInput from '../components/apiInput'
import Container from '../components/Container/index.js'
// import { QUERY_PROFILES } from '../utils/queries';
///////////////////////////////////
import {useState} from 'react'
import ApiFormInput from '../components/apiFormInput'
import API from '../utils/api'
import ApiList from '../components/apiList'
import ApiListItem from '../components/apiListItem'

//////////////////////////////////

const Home = props => {
  const [searchCity, setSearchCity]= useState('search for restaurants near you!')
  const [loading,setLoading]=useState(false)
  const [restaurantResults,setRestaurantResults]=useState([])
  
  const searchRestaurants = async()=>{
    if(searchCity){
      try{
        setLoading(true)
        console.log('searching restaurants...', searchCity)
        const restaurants=await API.searchRestaurants(searchCity)
         
         setRestaurantResults(restaurants)

      }catch(err){
        console.log(err)

      }finally{
        setLoading(false)
      }
      
    }
}

  return (
    <Container className="mt-2">

    <div className="container">
      <div className ="row">
        <div className ="col-6">
          <Map />
        </div>
        {/* <div className="col-2">
          <DropDown />
        </div> */}
        <div className="col-6">
          {/* <ApiInput /> */}
          {/* <h1>SEARCH WISCONSIN CITIES <span className="badge bg-secondary">{searchCity}</span></h1> */}
          <ApiFormInput
          searchCity={searchCity}
          setSearchCity={setSearchCity} 
          handleSubmit={searchRestaurants}/>
          {/* <API /> */}
          {/* <pre>{JSON.stringify(searchCity, null,2)}</pre> */}
          <ApiList>
            {restaurantResults.map(restaurantResult=> (
              <ApiListItem 
              restaurantResult={restaurantResult}
              />
            ))}
          </ApiList>
        </div>
      </div>
    </div>

    </Container>

  );
};

export default Home;
