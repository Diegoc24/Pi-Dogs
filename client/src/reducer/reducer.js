import {GET_DOGS, GET_TEMP, FIL_TEM, ORD_DB,ORD_DOGS, ALFA_ORDER, SEARCH_DOG, GET_BY_ID} from "../actions/actions-types"
import { filtradoReducer } from "./filtradoReducer"
import { orderDogsAlfa } from "./orderDogsAlfa"
import { orderDogsWeight } from "./orderDogsWeight"

const initialState = {
    dogs: [],
    temperament: [],
    filterDogs: [],
    dog: []
}
const reducer = (state = initialState, action) =>{
    
    switch (action.type){
        case GET_DOGS:

            return {
                ...state,
                dogs: action.payload,
                filterDogs: action.payload,
                dog: "https://i.gifer.com/ZKZg.gif"
            }
            
        case GET_TEMP:
            return {
                ...state,
                temperament: action.payload
            }
        case FIL_TEM:
            const allDogs = state.filterDogs;

            return {
                ...state,
                dogs: filtradoReducer(action, allDogs),
                

            }
        case ORD_DB:
            state.dogs = state.filterDogs
            
            let localBd = state.dogs.filter(val=> val.database !== undefined);
            let apiBd = state.dogs.filter(val => val.database === undefined);
            
            if(action.payload === "created"){
                
                return{
                    ...state,
                    dogs: localBd
                }
            }else if(action.payload === "all"){
                return{
                    ...state,
                    dogs: state.filterDogs
                }
            }else{
                return{
                    ...state,
                    dogs: apiBd
                }
            }
            case ORD_DOGS:
                const allDog = state.filterDogs
                return{
                    ...state,
                    dogs: orderDogsWeight(allDog,action)
                }
            case SEARCH_DOG:
               if(action.payload === "No hubo coincidencias"){
                window.alert(action.payload)
               }else{
                return{
                    ...state,
                    dogs: action.payload
                }  
               }
                  
            case ALFA_ORDER:
                let dogsAlf = state.dogs;
                const ascendente = dogsAlf.sort((x,y)=> x.name.localeCompare(y.name))
                const descendente = ascendente.reverse();
                return {
                    ...state,
                    dogs: orderDogsAlfa(ascendente, descendente, state,action)
                }
            
            case GET_BY_ID:
                
                return{
                    ...state,
                    dog: action.payload
                }
        default: return state;
    }
}

export default reducer;