const { Dog } = require("../db");
const axios = require("axios")

const findById = async (id)=>{

   if(id.includes("-")){
    const getDogsDb = await Dog.findByPk(id)
    return getDogsDb
   }else if(!id.includes("-")){
    const getDogsApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data
    const filterDogs = getDogsApi.find((val) => val.id === Number(id))
    if(filterDogs === undefined) return "No se encontro un resultado con ese Id"
    return filterDogs;

}
   
    
   
   
   
}


module.exports = findById;