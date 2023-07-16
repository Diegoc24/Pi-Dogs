import React from "react";
export const orderDogsWeight = (allDog, action) =>{
   
    let orderDogs = allDog;
                
    const dbLocal = orderDogs.filter(val=> val.database !== undefined);
    const api = orderDogs.filter(val => val.database === undefined);
    
    let ordDogs = [];
    
      
    let weightDogs = api.sort((x,y) => {
        x = Number(x.weight.imperial.split("-")[0])
        y = Number(y.weight.imperial.split("-")[0])
        
        return x - y
    })
    
    if(action.payload === "peso_asc") {
        ordDogs = [...weightDogs,...dbLocal]
        
      
    return ordDogs
   
    }else if(action.payload === "peso_desc"){
        weightDogs = weightDogs.reverse();
        ordDogs = [...weightDogs,...dbLocal];
        
            return ordDogs
        
       
    }else{
        return orderDogs;
    }
}          