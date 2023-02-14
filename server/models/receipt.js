const { Schema, model } = require('mongoose')

const receiptSchema = new Schema({
    spent: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    place: {
        type: SchemaTypes.ObjectId,
        ref:"place",
        required: true
    }
})


const Receipt = model("Receipt", receiptSchema)

module.exports = Receipt