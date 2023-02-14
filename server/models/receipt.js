const { Schema, model } = reqiore('mongoose')

const receiptSchema = new Schema({
    spent: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    }
})


const Receipt = model("Receipt", receiptSchema)

module.exports = Receipt