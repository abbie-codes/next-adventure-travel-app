const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')

const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors()),
app.use(bodyParser.json())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(8081, listening)

function listening() {
    return "Listening on port 8081"
}

export {listening}
