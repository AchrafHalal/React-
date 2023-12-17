import React from "react"

export function Info(props){
    return(
        <h2 style={{color:props.cl}}>
            Salut {props.nombre} {props.personne.nom} {props.personne.prenom} {props.personne.age}
            <hr/>
        </h2>
    )
}
class affichage3 extends React.Component{
    constructor(){
        super()
        this.Info={Nom:"Halal",prenom:"Achraf"};
        this.Info={Nom:"dm",prenom:"talal"};
        this.Info={Nom:"gh",prenom:"mo"};
    }
    render(){
        return(
            <div>
        <span>Nom:{this.Info.Nom}</span>&nbsp; &nbsp;
        <span>Prenom:{this.Info.prenom}</span>
        </div>
        )
    }
}

