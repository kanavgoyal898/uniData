const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

require('dotenv').config();
require('./models/db')

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/user'))
app.use('/test', require('./routes/test'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
