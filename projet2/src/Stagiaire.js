import React from "react";

export default class Stagiaire extends React.Component{
    constructor(){
        super()
         this.Stagiaire={Code:"15789",Nom:"Achraf",Age:23};
    }
    render(){
        return(
            <div>
                <h1  style={{color:"red"}}>Informaion Stagiaire:</h1>
                <span>Code:{this.Stagiaire.Code} </span>&nbsp; &nbsp;
                <span>Nom:{this.Stagiaire.Nom}</span>&nbsp; &nbsp;
                <span>Age:<i style={{color:"green"}}>{this.Stagiaire.Age}</i></span>
            </div>
        )
    }
}