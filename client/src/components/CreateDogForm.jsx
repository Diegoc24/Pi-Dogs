
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTemperament } from "../actions/actions";
const CreateDog = ()=>{
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperament)

    useEffect(()=>{
        dispatch(getTemperament())
    },[dispatch])
    const [dogs, setDogs] = useState({
        name: "",
        weigth: {},
        height: {},
        life_span: {},
        temperament: []
    })

    const handlerTemperament = (e)=>{
        e.preventDefault()
         
         let comprobacion =  dogs.temperament.find((elem) => elem === e.target.value)
                 
            if(typeof comprobacion !== "string" && e.target.value !== "all"){
                setDogs({
                    ...dogs,
                    temperament: [...dogs.temperament, e.target.value]
                })
            }
                          
    }
    const handlerDelete =(e)=>{
        
       let temper =  dogs.temperament.filter((element) =>{
        return element !== e
       })
       setDogs({
        ...dogs,
        temperament: temper
       })
       return(<div>
        <option>Temperamentos</option>
       </div>)
    }
    
    const handlerForm = (e)=> {
       e.preventDefault()
        setDogs({
            ...dogs,
            name: e.target.name === "name" ? e.target.value : dogs.name,
            weigth: {imperial: e.target.name === "imperial" ? e.target.value : dogs.weigth.imperial, metric: e.target.name === "metric" ? e.target.value : dogs.weigth.metric},
            height: {imperial: e.target.name === "imperial_height" ? e.target.value : dogs.height.imperial, metric: e.target.name === "metric_height" ? e.target.value : dogs.height.metric},
            life_span: {min: e.target.name === "year_min" ? e.target.value : dogs.life_span.min, max: e.target.name === "year_max" ? e.target.value : dogs.life_span.max},
            
        })
        console.log(dogs);
        
    }
    return(
        <div>
            <h2>Crea un perro!!</h2>
            <br></br>
            <NavLink to={"/home"}>Ir a home</NavLink>
            <br></br>
            <form onChange={(e)=>handlerForm(e)}>
            <label>Nombre: </label> 
            <input type="text" name="name"></input>
            <br></br>
            <label>Altura: </label>
            <input name="imperial_height" type={"text"} placeholder="altura minima"></input>
            <label> - </label>
            <input name="metric_height" type={"text"} placeholder="altura maxima"></input>
            
            <h5>Peso:</h5>
            <label>Imperial: </label>
            <input name="imperial" type={"text"} placeholder="peso imperial"></input>
            <label> Metric: </label>
            <input name="metric" type={"text"} placeholder="peso metric"></input>
           
            <h5>Años de vida: </h5>

            <input name="year_min" type="number" placeholder="años minimo"></input>
            <label> - </label>
            <input name="year_max" type="number" placeholder="años max"></input>
            <br></br>
            <select onClick={(e) => handlerTemperament(e)}>
            <option value="all">Temperamentos</option>
            {
                temperaments.map((val) => {
                    return(
                        <option value={val.name}>{val.name}</option>
                    )
                })
            }
            </select>
            {

                dogs.temperament.map((tem) =>{
                    return(
                        <div>
                        <div><h5>{tem}</h5> <div onClick={() => handlerDelete(tem)}>X</div></div>
                       
                        </div>
                    )
                    
                })
            }
            <br></br>
            <button type="submit">Crear Perro</button>
            </form>
        </div>
    )
}

export default CreateDog;