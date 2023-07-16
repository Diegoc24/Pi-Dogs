const axios = require("axios")
const {Temperament} = require("../db")

const getTemperaments = async ()=>{
    const allApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data
    
    let allTemperament = [];
    let temperament = []
    
    
    allApi.forEach((dogs) => allTemperament.push(dogs.temperament))
    
    for(let i = 0; i < allTemperament.length;i++){
        if(allTemperament[i]) temperament += allTemperament[i]
    }
    
   temperament = temperament.split(",")
   
   
   
   temperament.forEach( (temp) => Temperament.findOrCreate({where: {name: temp}}))
   
   const temp =await Temperament.findAll()
   return temp;
    
}


module.exports = getTemperaments;
