const {Dog,Temperament} = require("../db");


const createDogs = async ({name, image, weight, height, life_span, temperament})=>{
    let newDogs = await Dog.create({
        name, image, weight, height, life_span
    })
   
    
  

  
   
        
        await newDogs.addTemperaments(temperament)
    

   
   
    return newDogs;
}

module.exports = createDogs;