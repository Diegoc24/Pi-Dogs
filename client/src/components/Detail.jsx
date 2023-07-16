import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../actions/actions";
import { NavLink } from "react-router-dom";


const Detail = (props) =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const dogsId = useSelector((state) => state.dog)
    
    useEffect(()=>{
        dispatch(getById(id))
        
    },[dogsId.length])
   
   
    return(
        
        <div>
            <h3><NavLink to={"/home"}><button>Volver a Home</button></NavLink></h3>
          { 
          Object.keys(dogsId).length > 0 && typeof dogsId !== "string" ?
            <div>
            <h2>Id: {dogsId.id}</h2>
            <h1>Nombre: {dogsId.name}</h1>
            <img src={dogsId.image.url === undefined ? dogsId.image : dogsId.image.url} alt="imagen" width="400px"/>
             <h3>Temperamento: {dogsId.temperament}</h3>
            <h3>Peso Imperial {dogsId.weight.imperial} - Metrico {dogsId.weight.metric}</h3>
            <h3>Altura Imperial {dogsId.height.imperial} - Metrico {dogsId.height.metric}</h3>
            <h3>Años de vida: {dogsId.life_span}</h3>
            </div> :  <div><img src={dogsId} alt={"loading"} width="250px"/></div>
}
        </div> 
        

    )

}

export default Detail

