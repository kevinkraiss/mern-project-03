// const fetch = require('node-fetch')
// const { type } = require('os')
const connection = require('../config/connection')
const {User, Place, Receipt} = require('../models')
// const {moment} = require('moment')
//////////brian brian brian brian///////////
const{Restaurants}= require('../models')
//////////brian brian brian brian///////////

connection.once('open', async () => {
    await User.deleteMany()
    await Place.deleteMany()
    await Receipt.deleteMany()
    //////////brian brian brian brian///////////
    await Restaurants.deleteMany()
    //////////brian brian brian brian///////////
    
    // seed pokemon
    const newPlace = await Place.create(
        {
            name: 'Test' ,
            formatted_address: '1234 W TEST ST 01234, TEST-CITY, TEST-STATE',
            editorial_summary: 'BIRFOJRF PORFJRG[RWEP[FIPRHRVJPOE.IURHFIORGHPRI PGJPEROJGRF, IORNGIR OENGEERING ORIRNG, EFKFN LWIFIWR 1213  GGINRGNR. RIGNOPERGN GPOERJGER PIOGHIF.PROGJ ORIGPRJPGORG.FIJOPIRJGPOJRWEG.OEIJORP.ORG  JREGPO IORGR RIHGH ',
        }
    )


    const newUser = await User.create(
        {
            username: 'user',
            email: 'test@gmail.com',
            password: 'test1234'
        },
        // {
        //     username: 'user2',
        //     email: 'test2@gmail.com',
        //     password: 'test1234'
        // }
    )

    const newReceipt = await Receipt.create({
        spent: 25.00,
        purchaseDate: "02/02/2023",
        place: 'Tesstaurant',
        user: newUser._id

    })

    const newUser2 = await User.create(
        {
            username: 'user2',
            email: 'test2@gmail.com',
            password: 'test1234',
            receipts: newReceipt._id
        },
    )
    //////////brian brian brian brian///////////
        //seed restaurants
      for (const data of [0,1,2,3,4])  {
        const response = await fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=madison', options)  //${cityName}
        // const response = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${cityName}`), options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

console.log(response)
      }

    //////////brian brian brian brian///////////


    console.log('database seeded')
    process.exit(0)
})