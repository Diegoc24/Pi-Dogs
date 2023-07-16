
export const orderDogsAlfa = (ascendente,descendente, state, action) =>{
   
    const allDogs = state.dogs
   


    if(action.payload === "alfa_asc"){
      
        return ascendente
    }
    if(action.payload === "alfa_desc"){
     
        return descendente
    }
    else{
        return allDogs;
    }

   
}