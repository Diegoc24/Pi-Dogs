import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () =>{
    return (
        <div>
            <h1>Bienvenidos a Dogs!</h1>
            <Link to="/home">
                <button>Ingresar a Home</button>
            </Link>
        </div>

    )
}

export default LandingPage;