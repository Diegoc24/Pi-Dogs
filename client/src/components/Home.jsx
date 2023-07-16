import React from "react";

import CardDogs from "./CardDogs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Paginado from "./Paginado";
import {getDogs, getTemperament, filterTemperament, orderDb, orderDogsW, orderDogsAlfa } from "../actions/actions";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";


const Home = () =>{
   const dispatch = useDispatch();
   
   useEffect(()=>{
    dispatch(getDogs())
    dispatch(getTemperament())
    
 },[dispatch])
    
    const allDogs = useSelector((state) => state.dogs);
    const allTemperament = useSelector((state) => state.temperament);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexLastDog = currentPage * dogsPerPage;

    const indexOfFirstDog = indexLastDog - dogsPerPage;
 
    const currentDogs = allDogs.length > 8 ? allDogs.slice(indexOfFirstDog, indexLastDog) : allDogs
    
    
    const changePage = (number) =>{
        setCurrentPage(number)
    }
    const handlerTemperament = (e)=>{
        dispatch(filterTemperament(e.target.value));
        
    }
    const handlerCreate = (e)=>{
        dispatch(orderDb(e.target.value))
    }
    const handlerOrder = (e) =>{
        e.preventDefault()
        dispatch(orderDogsW(e.target.value))
    }
   
    const handlerOrderAlf = (e)=>{
        
        e.preventDefault()
        dispatch(orderDogsAlfa(e.target.value))
    }
    const handlerReset = ()=>{
        dispatch(getDogs())
    }
    const handlerCards = (currentDogs) =>{
        if(currentDogs.length === undefined){
            return(
                <div>
                    
                    <Link to={`/detail/${currentDogs.id}`}>
                    <CardDogs name={currentDogs.name} 
                         image= {currentDogs.image.url === undefined ? currentDogs.image : currentDogs.image.url} temperament={currentDogs.temperament} weight= {currentDogs.weight}/>
                    </Link>
                </div>
            )
        }else{
            return(
                <div>
                   {  currentDogs.map((val) =>{
                    
                    return(
                        <div>
                        <Link to={`/detail/${val.id}`}>
                        <CardDogs name={val.name} 
                         image= {val.image.url} temperament={val.temperament} weight= {val.weight} key={val.id}/>
                         </Link>
                        </div>
                    )
                })
                }
                </div>

            )
        }
    }
    return(
        <div>
           
    <div>
               
        <SearchBar />
           
    </div>

    <div>

        <select onChange={e=>handlerTemperament(e)}>
            <option value="all">Todos</option>
        {
            allTemperament.map((val) => {
                return <option value={val.name}>{val.name}</option>
            })
        }
                     
        </select>

        <select onChange={(e)=>handlerCreate(e)}>
        <option value="created">Creados por mi</option> 
        <option value="no_created">De la app</option> 
        <option value="all">Todos</option> 
        </select>

        <select onClick={(e) => handlerOrder(e)}>
            <option value="default">Por defecto</option>
            <option value="peso_asc">Por peso: Ascendente</option>
            <option value="peso_desc">Por peso: Decendente</option>
            
        </select>
        <select onClick={(e) => handlerOrderAlf(e)}>
            <option value="default">Por defecto</option>
            <option value="alfa_asc">Alfabeticamente: Ascendente</option>
            <option value="alfa_desc">Alfabeticamente: Decendente</option>
        </select>
        <br></br>
        <div>
            <button type="submit" onClick={handlerReset}>Cargar de nuevo los perros</button>
        </div>
    </div>
           
            {
                handlerCards(currentDogs)
                }
                
                <div>
                <Paginado allDogs={allDogs} dogsPerPage={dogsPerPage} changePage={changePage}/>
                </div>

        </div>
    )
}

export default Home;