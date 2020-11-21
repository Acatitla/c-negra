const express = require ('express');
const mongoose = require('mongoose');

const app = express ();
const PORT = 3006;
const MONGO_URI = ''
//mongodb+srv://cinta-negra:<rAnj3Rt8uHFl6kAL>@cluster0.dfwto.mongodb.net/<dbname>?retryWrites=true&w=majority

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(MONGO_URI, options)
.then(res => console.log('Connected to mongoDB'))
.catch(err => console.log(err.message))

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API');
})

app.listen('/', (PORT)=>{
    console.log(`Server initialized on port ${PORT}`)
})