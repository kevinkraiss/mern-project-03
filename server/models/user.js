const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: 'A username is required',
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: 'An email is required',
        unique: true,
        match: [/.+@.+\..+/, "Must match an email format"]
    },
    password: {
        type: String,
        required: 'A password is required',
        minLength: 8
    },
    receipts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Receipt'
        }
    ]
   
})

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
})

userSchema.methods.isCorrectPassword = function(password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

module.exports = User