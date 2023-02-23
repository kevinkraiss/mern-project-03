const {Schema, model}=require('mongoose')

const restaurantSchema=new Schema({
    localizedName:{
       type: String,
       required:true
    }, 
    streetAddress:{
        type:String,
        required:true
    },
    latitude:{
        type: Number
    },
    longitude:{
        type:Number
    }
})

const Restaurants=model('Restaurants', restaurantSchema)
module.exports = Restaurants


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4ee0d901admshe3bebd1c2e64099p1f8863jsn503dab36a116',
// 		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
// 	}
// };

// fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=oshkosh', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));