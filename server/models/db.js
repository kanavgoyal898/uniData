const mongoose = require('mongoose')

mongo_url = 'mongodb://127.0.0.1:27017/unidata'

mongoose.connect(mongo_url)
    .then(() => {
    console.log('MongoDB connection successful')
    }).catch((err) => {
    console.log('MongoDB connection error:', err)
    })
