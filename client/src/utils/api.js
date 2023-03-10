import axios from "axios";


//  const TRIPADVISOR_API_KEY="4ee0d901admshe3bebd1c2e64099p1f8863jsn503dab36a116"
const APIKey=process.env.React_APP_TRIPADVISOR_API_KEY
console.log(APIKey)

const API = {
  async searchRestaurants(citySearch) {
    const options = {
      method: "GET",
     
      headers: {
        "X-RapidAPI-Key": "4ee0d901admshe3bebd1c2e64099p1f8863jsn503dab36a116",
        
         //process.env.TRIPADVISOR_API_KEY
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    try{
      const response=  await axios.request({
        ...options,
          url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation",
          params: { query: `${citySearch}`},

        
      })
      
      let restaurants=[]
      
      for (const loc of response.data.data){
        
        
        
        
        const locResponse=await axios({
          ...options,
          url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
          params:{
            
            locationId: loc.locationId
          }
        })
        
        for(const restaurant of locResponse.data.data.data){
          restaurants.push(restaurant)
          
        }
      }
      restaurants.splice(4)//limit results shown
     return restaurants
    }catch(err){
      console.log(err)
    }
  },
};

export default API;

