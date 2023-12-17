import React from "react";
/*
function Message(){
    const nom='rami';
    const prenom="mohmed";
    return <h1>Bonjour {nom} {prenom} !!!</h1>;
  
  }
export {Message};

class Message2 extends React.Component{
    reder(){
        return <h1>Bonjour Class React !!!</h1>;
    }
}  
export default Message2;

function Message3(){
    let remise=0; 
    let nbArticle=15;
    if(nbArticle>10){
        remise=15;
    }
    return (
        <p>
            <h1>Taux Remis:{remise} %</h1>
        </p>
    )
}
export  {Message3};*/

function getSurface(rayon){
    return rayon*rayon*3.14;
}
function Affichage(){
    return (
        <p>
            <h1>Resultat :<i>{getSurface(2)}</i></h1>
            
        </p>
    )
}
class affichage2 extends React.Component{
    constructor(){
        super()
        this.ra=4;

    }
    render(){
        return(
            <p>
            <h1>Resultat :<i>{getSurface(this.ra)}</i></h1>
            
        </p>
        )
    }
}
export  default affichage2;















