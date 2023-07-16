const { default: axios } = require("axios");
const {Dog, Temperament} = require("../db");

const watchDogs = async ()=>{
    
    let dogs = [];
    const arrDogs = [];
    const showDogs = await Dog.findAll({
        include :{
            model: Temperament,
            attributes: ["name"],
            through:{
                attributes: [],
            },
        }
});
    const apiDogs = (await axios.get("https://api.thedogapi.com/v1/breeds")).data
   
    apiDogs.map(val => arrDogs.push({id: val.id,name: val.name, image: val.image, temperament: val.temperament, weight: val.weight, height: val.height}))
   
    for (let i = 0;showDogs.length > i;i++) {
        if(showDogs[i].dataValues.temperaments[0] !== undefined){
            for(let f = 0;showDogs[i].dataValues.temperaments.length > f;f++){
            dogs.push(showDogs[i].dataValues.temperaments[f].dataValues.name)
            }
        }else{
            dogs = undefined;
        }
        arrDogs.push({id: showDogs[i].id, database: showDogs[i].createDb, name: showDogs[i].name, image: {url: showDogs[i].image}, temperament: dogs, weight: showDogs[i].weight, height: showDogs[i].height})
    }
    return arrDogs;
}

module.exports = watchDogs;