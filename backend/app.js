const express = require('express');

const port = process.env.port || 3000

const authRoute = require('./routes/auth-route');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require ('cors');

mongoose.connect('mongodb://localhost:27017/billing',
(err)=>{

if(err){
    console.log("failed conn db");
}else{
    console.log("conn succ db...");
}

});

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())




app.use('/auth',authRoute);

app.get('/', (req, res)=>{

    res.send("hello server")
})

app.listen(port, ()=>{

    console.log("conn" ,port)
})

