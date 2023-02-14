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
        type: Schema.Types.ObjectId,
        ref:"place",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"user",
        required: true
    }
})


const Receipt = model("Receipt", receiptSchema)

module.exports = Receipt