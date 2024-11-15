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
            maxLength: 512,
        },
        socials: {
            googleScholar: {
                type: String,
            },
            github: {
                type: String,
            },
            linkedIn: {
                type: String,
            },
            universityDomain: {
                type: String,
            },
            portfolio: {
                type: String,
            },
        }
    },
})

const User = mongoose.model('user', userSchema)
module.exports = User
