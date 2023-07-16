const watchDogs = require("../controllers/watchDogs")
const findById = require('../controllers/findById');
const createDogs = require("../controllers/createDogs")
const findByQuery = require("../controllers/findByQuery")

const handlerGetDogs = async (req,res)=>{
    const {name} = req.query;
    try {
        if(name !== undefined){
            const dogByquery = await findByQuery(name)
           
            res.status(200).json(dogByquery)
        }else{
            const showDogs = await watchDogs();
            res.status(200).send(showDogs)
        }
    } catch (error) {
        res.status(404).json({error : error.message})
    }
    
}

const handlerById = async (req,res)=>{
   try {
    const {idRaza} = req.params
    const raza = await findById(idRaza);
    res.status(200).json(raza)
   } catch (error) {
    res.status(404).json(error)
   }
    
}

const handlerPostDogs = async (req,res)=>{
    
    try {
        const newDogs = await createDogs(req.body)
        console.log(req.body);
        res.status(200).send(newDogs)
    } catch (error) {
        res.status(404).send({error : error.message})
    }
  
}

module.exports = {
    handlerGetDogs, handlerById, handlerPostDogs
};
