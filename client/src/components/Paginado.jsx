import React from "react";
//import { useSelector } from "react-redux";
const Paginado = ({allDogs, dogsPerPage, changePage}) =>{

      
    const numberPage = allDogs.length / dogsPerPage;
    const arrPage = [];
    for(let i = 1;Math.ceil(numberPage) >= i;i++){
        arrPage.push(i)
    }
   return(
    <div>
        {
            arrPage.map((val) =>{
                return(
                
                        
                        <div style={{display:"inline", margin:"7px"}} onClick={()=>changePage(val)}><button>{val}</button></div>
                        
                    
                    
                )
            })
        }
    </div>
   )
   

}

export default Paginado;