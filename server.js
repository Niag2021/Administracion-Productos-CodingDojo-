const express = require('express');
const cors = require('express')
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./server/routes/person.routes')(app); 

app.listen(8000, () =>{
    console.log("Your are now listening at port 8000");
})