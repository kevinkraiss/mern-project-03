// const fetch = require('node-fetch')
const { type } = require('os')
const connection = require('../config/connection')
const {User, Place} = require('../models')

connection.once('open', async () => {
    await User.deleteMany()
    await Place.deleteMany()
    // seed pokemon
    await Place.create({
        name: 'Test' ,
        formatted_address: '1234 W TEST ST 01234, TEST-CITY, TEST-STATE',
        editorial_summary: 'BIRFOJRF PORFJRG[RWEP[FIPRHRVJPOE.IURHFIORGHPRI PGJPEROJGRF, IORNGIR OENGEERING ORIRNG, EFKFN LWIFIWR 1213  GGINRGNR. RIGNOPERGN GPOERJGER PIOGHIF.PROGJ ORIGPRJPGORG.FIJOPIRJGPOJRWEG.OEIJORP.ORG  JREGPO IORGR RIHGH ',
    })
    await User.create({
        username: 'user',
        email: 'test@gmail.com',
        password: 'test1234'
    })
    console.log('database seeded')
    process.exit(0)
})