const axios = require ('axios');

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