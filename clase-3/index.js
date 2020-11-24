require('dotenv').config()
const express = require('express')
const { connect } = require('mongoose')
const Router = require('./routers/index.js')


const app = express ();
const PORT = 3006;

const options = {useNewUrlParser: true, useUnifiedTopology: true};

connect(process.env.MONGO_URI, options)
.then(res => console.log('Connected to mongoDB'))
.catch(err => console.log(`Error: ${err.message}`))

app.use('/api/v1/',Router)

app.use (express.json({ extended: true}))

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API');
})

app.listen('/', (PORT)=>{
    console.log(`Server initialized on port ${PORT}`)
})

//const MONGO_URI = 'mongodb+srv://cinta-negra:1234@cluster0.dfwto.mongodb.net/CintaNegra-47?retryWrites=true&w=majority'