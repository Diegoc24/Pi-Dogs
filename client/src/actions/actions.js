
import { GET_DOGS, GET_TEMP, FIL_TEM, ORD_DOGS, ORD_DB, ALFA_ORDER, SEARCH_DOG, GET_BY_ID } from "./actions-types";
import axios from "axios";

export function getDogs(){
    return async function(dispatch){
        const allDog = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: GET_DOGS,
            payload: allDog.data
        })
    }
}
export function getTemperament(){
    return async function(dispatch){
        const allTemperament = (await axios.get("http://localhost:3001/temperaments")).data
        return dispatch({
            type: GET_TEMP,
            payload: allTemperament
        })
    }
}

export const filterTemperament = (payload)=>{
   
    return{
        type: FIL_TEM,
        payload: payload
    }
}


export const orderDogsW = (payload) =>{
    return{
        type: ORD_DOGS,
        payload
    }
}

export const orderDb = (payload)=>{
    
    return {
        type: ORD_DB,
        payload
    }
}

export const orderDogsAlfa = (payload) =>{
    return {
        type: ALFA_ORDER,
        payload
    }
}

export const searchDogs = (name) =>{
   return async function (dispatch){
        try {
            let dog = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            console.log(dog.data);
        return dispatch({
            type: SEARCH_DOG,
            payload: dog.data
        })
        } catch (error) {
            console.log({error: error.message});
        }
        
    } 
}

export const getById = (id)=>{
    return async function (dispatch){
        try {
            const byIdDog = (await axios.get(`http://localhost:3001/dogs/${id}`)).data
            return dispatch({
                type: GET_BY_ID,
                payload: byIdDog
            }) 
        } catch (error) {
            console.log(`Error en el actions: ${error}`);
        }
    }
}