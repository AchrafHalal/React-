import React from "react";
/*
export default class Message_State extends React.Component{
    constructor(){
        super()
        this.state={message:'Bienvenu visiteur',btnmessage:'Inscription'}
    }
    change(){
        this.setState({message:'inscription reussite',btnmessage:'Merci'})
    }
    render(){
        return(
            <div>
                <h2>{this.contenu.message}</h2>
                <button onClick={()=>this.change()}>{this.contenu.btnmessage}</button>
            </div>
        )
    }
}
*/
export default class Message_State extends React.Component{
    constructor(){
        super()
        this.state={valeur:0}
    }
    incrementer(){
        this.setState({valeur:this.state.valeur+1})
    }
    Decrementer(){
        this.setState({valeur:this.state.valeur-1})
    }
    render(){
        let color = "black";
        if (this.state.valeur > 20) {
            color = "green";
        } else if (this.state.valeur < 0) {
            color = "red";
        }
        return(
            <div>
                <h2 style={{color: color}}>Valeur :{this.state.valeur}</h2>
                <button onClick={()=>this.incrementer()}>Incrementer</button>
                <button onClick={()=>this.Decrementer()}>Decrementer</button>
            </div>
        )
    }
}