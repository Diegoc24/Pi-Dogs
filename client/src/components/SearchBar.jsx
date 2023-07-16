import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../actions/actions";
import { getDogs } from "../actions/actions";


const SearchBar = () =>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");



const handlerInput = (e) =>{
    e.preventDefault()
    setName(e.target.value)
    
}

const handlerSubmit = (e)=>{
    e.preventDefault();
    if(name.length !== 0){
        dispatch(searchDogs(name))
    }else if(name.length === 0){
        dispatch(getDogs())
    }
    
}
    return (
        <div>
            <div className="bar">
                <form>
                <input type="text" placeholder="Buscar..." onChange={(e) => handlerInput(e)}></input>
                <button type="submit" onClick={(e) => handlerSubmit(e)}>Buscar</button>
                </form> 
            </div>
        </div>
    )
}

export default SearchBar;