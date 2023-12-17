import React from "react";
import {Info} from "./Etudiant";
export function PlusInfo22(){
    let p1={nom:"Ahmed",prenom:"ahmed",age:21}
    let p2={nom:"saiid",prenom:"saiid",age:23}
    return(
        <div>
            <Info personne={p1} nombre="33"/>
            <Info personne={p2} nombre="50"/>
            <Info personne={{nom:"kamal",prenom:"rami",age:33}} nombre="44"/>
        </div>
    )
    
}
