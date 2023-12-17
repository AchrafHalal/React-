import { useState } from "react"
import React from "react"


export function Form(){
    const [nom,Setnom]=useState()
    const [prenom,Setprenom]=useState()
    const [information,Setinformation]=useState()
    function display(){
      Setinformation(`Bonjour ${nom} ${prenom}`)
    }
    return(
        <div>
            <h2>Inscription</h2>
            <label >Nom:</label>
            <input type="text" onChange={(e)=>{Setnom(e.target.value.toUpperCase())}}></input><br></br>
            <label>Prenom:</label>
            <input type="text" onChange={(e)=>{Setprenom(e.target.value.toUpperCase())}}></input><br></br>
            <button onClick={display}>Afficher </button><br></br>
            <span>{information}</span>
        </div>
    )
}

export function Exemple(){
    const [password,Setpassword]=(useState(""))
    return(
        <div>
            <input type="password" value={password} onChange={(e)=>Setpassword(e.target.value)}/><br/>
            <p>{password.length<4?"password doit avoir au moins 4 caractere":""}</p>
        </div>
    )
}


export default class Exemple1 extends React.Component {
    constructor() {
      super();
      this.state = { password: '' };
    }
    ChangerPassword(e) {
      this.setState({ password: e.target.value });
    }
    render() {
      const { password } = this.state;
      return (
        <div>
          <input type="password" value={password} onChange={(e) => this.ChangerPassword(e)} /><br />
          <p>{password.length < 4 ? 'password doit avoir au moins 4 caractere' : ''}</p>
        </div>
      );
    }
  }










