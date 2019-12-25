import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: {
        type: String,
        enum: ['USER', 'DIRECTOR', 'PRODUCER'],
        default: 'USER'
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHER'],
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
})

const user = mongoose.model('User', userSchema);
module.exports = user