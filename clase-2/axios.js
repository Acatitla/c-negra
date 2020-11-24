const axios = require('axios')
const { response } = require('express')

// const getPokemonById = (pokemon) => {
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(response => {
//       console.log(response.data.name);
//     })
//     .catch(err => console.log(err.message))
// }

// getPokemonById('adsrflgahsdofj')


const getPokemonById = async (pokemon) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response.data.name)
  } catch (error) {
    console.log(error.message)
  }
}
// getPokemonById('mewtwfxvcbsdo')

const getPeopleAndPlanet = async(people) => {
  try {
    const responsePeople = await axios.get(`https://swapi.dev/api/people/${people}`)
    const planetURI = responsePeople.data.homeworld
    const responsePlanet = await axios.get(planetURI)
    const character = responsePeople.data.name
    const planet = responsePlanet.data.name
    console.log(`persona: ${character}, planeta: ${planet}`)
  } catch (error) {
    console.log(error.message)
  }
}

getPeopleAndPlanet(1)

// SWAPI Pidan a una personaje y a su planeta de nacimiento.

const getDataPeopleById =(id)=>{
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(response =>{
        console.log('Nombre: '+response.data.name);
    })
    .catch(err=> console.log(err.message));

    setTimeout(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/`)
    .then(response =>{
        console.log('planeta: '+response.data.name);
        console.log('población: '+response.data.population);
    })
    .catch(err => console.log(err.message));
    },2000)
}

getDataPeopleById(1);

const getAsteroidByDate = (startDate, endDate) =>{
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=Ss6ywNLIXDSzbhxE3mhfnjNdpuSdxCSLIgoXQb51`)
    .then((response)=>{
        //date AAAA-MM-DD	
        console.log(response.data.near_earth_objects);
    })
    .catch(err=> console.log(err.message))
}

getAsteroidByDate('2020-10-10','2020-10-15');

// NASA: Los asteroides potencialmente peligrosos para la tierra, de hoy en 5 días