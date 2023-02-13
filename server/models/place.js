const { Schema, model} = require('mongoose')

const placeSchema = new Schema({
    place_id: String,
    name: String,
    formatted_addres: String,
    editorial_summary: String,

})

const Place = model('Place', placeSchema)

module.exports = Place