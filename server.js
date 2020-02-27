const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

// setting up express
const app = express();
const uri = "mongodb+srv://aaron:aaron@esc-mongo-4dgm3.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true });

// serve simple html
app.use(express.static('public'))

//middleware
app.use(bodyParser.json());

// route setup
app.use('/api', require('./routes/api'));

//error handling
app.use(function(err,req,res,next){
    console.log(err.message);
    res.status(422).send({error: err.message})
});

// listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

