const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://dbuser:db1234@cluster0.n2hpfcb.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected' ,()=>{
    console.log('Mongo DB Connection successful')
})


module.exports = mongoose