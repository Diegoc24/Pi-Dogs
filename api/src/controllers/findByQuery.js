const { default: axios } = require("axios")

const clearArray = require("../controllers/clearArray")
const {Dog, Temperament} = require("../db")


const findByQuery = async (query) =>{
    try {
        const dogsApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data
        const dogsBd = await Dog.findAll({
            include :{
                model: Temperament,
                attributes: ["name"],
                through:{
                    attributes: [],
                },
            }
        })
        const newDog = clearArray(dogsApi)
        
        const dogsAll = [...newDog, ...dogsBd]
        
        const dogsByQuery = dogsAll.find((val) => val.name.toLowerCase() === query.toLowerCase())
        console.log(dogsByQuery);
        if(dogsByQuery !== undefined) return dogsByQuery;
        else return "No hubo coincidencias"
       
       
        
        
        
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = findByQuery;
