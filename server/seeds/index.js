// const fetch = require('node-fetch')
const { type } = require('os')
const connection = require('../config/connection')
const {User} = require('../models')

connection.once('open', async () => {
    await User.deleteMany()
    await User.create({
        username: 'user',
        email: 'test@gmail.com',
        password: 'test1234'
    })
    console.log('database seeded')
    process.exit(0)
})