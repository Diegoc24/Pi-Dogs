import React from "react";
import { Link } from "react-router-dom";

const CardDogs = ({name, image, temperament, weight})=>{

    return (
        <div>
            <h1>Nombre: {name}</h1>
            <img src={image} alt="imagen" width="400px"/>
            <h3>Temperamento: {temperament}</h3>
            <h3>Peso Imperial: {weight.imperial} Metric: {weight.metric}</h3>
        </div>
    )

}

export default CardDogs;