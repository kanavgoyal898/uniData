const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    public: {
        profile: {
            type: String,
        },
        name: {
            type: String,
        },
        bio: {
            type: String,
        },
        socials: {
            type: Object,
        }
    },
    publications: {
        type: Array,
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User
