import React from "react";


export const filtradoReducer = (action,allDogs) =>{
    
    const payload = action.payload;
    let filterDogs = [];
   
        for (let i = 0; allDogs.length > i;i++) {
            if(allDogs[i].temperament !== undefined){
                
                if(allDogs[i].temperament.includes(payload) === true) filterDogs.push(allDogs[i])

            }else if(action.payload === "all"){
                filterDogs = allDogs
            }
        }
       
   
           return filterDogs;
    
}

      
     
