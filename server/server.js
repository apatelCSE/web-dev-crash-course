const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../public'), {index: false}))

var apiKey = "904ecabe1bcaa06404f1c6fdc16861dc"

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get("/weather/:location", function(request, response) {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + request.params.location + "&appid=904ecabe1bcaa06404f1c6fdc16861dc")
    .then(data => {
        console.log(data)
        response.send({data: data.data})
    })

})

app.listen("5000", function() { 
    console.log("Server running on 5000")
})