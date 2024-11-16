const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    authors: {
        type: Array,
        required: true,
    }, 
    link: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

const Publication = mongoose.model('publication', publicationSchema)
module.exports = Publication
