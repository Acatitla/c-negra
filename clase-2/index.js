const { default: Axios } = require('axios');
const express = require ('express');

const app = express()

app.get('/', (request, response)=> {
    //console.log('Hola');
    //response.send('Hola');
    //response.json({Message: 'Hola'});
    response.send(`user, phone, age, \n Billy, 554741, 6`);
    // response.json({
    //     message: 'Hola'
})

    app.get('/pokemon.id', (req, res)=> {
        const id = req.params.id;
//        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        res.status(200).send(id)    
//        res.send(response.data.name)

//        console.log(id);

//        res.send({ pokemon: id });
})

// app.get('/pokemon.id', (req, res)=> {
//     const queries = req.query;

//     Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res)=>{
//         res.send(res.data.moves);
//         next();
//     })
//     .catch((err)=>{
//         res.send(err);
//         next();
//     })
//})
   // console.log(queries.start);

    //res.send(queries);


// app.get('/pokemon', (req, res)=>{
//     const queries = req.query;
// // url?start=1&end=2
//     console.log(queries.start);

//     res.send(queries);

// })
//  app.get('/posts', (req, res)=>{
//      const body = req.body;
//      res.send(body);
//  })
app.listen(3000, ()=>{
    console.log('Server iniciado');
})