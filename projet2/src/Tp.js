import React, { useState } from "react";
 class Tp extends React.Component{
    constructor(){
        super()
        this.state={message:"resultat"};

    }
    fa(){
        this.setState({message:"Merci"})
    }
    

    render(){
        return(
            <div>
                <button onClick={()=>this.fa()}>cliquer</button>
                <span>{this.state.message}</span>
            </div>
        )
    }

}
export  function  Tp_function (){
    const [message,Setmessage]=useState("test")
    function fa(){
        Setmessage("bravo")
    }
    return(
        <div>
            <button onClick={fa}>cliquer</button>
            <span>{message}</span>
        </div>
    )
}

export function Tp_Cpt() {
    const [compteur, setCompteur] = useState(0);
    const [c, setC] = useState('black');
  
    function inc() {
      setCompteur(compteur + 1);
      if(compteur>=20){
        setC("green")
      }else if(compteur>=0){
        setC("black")
      }
    }
  
    function dec() {
      setCompteur(compteur - 1);
      if(compteur<0){
        setC("red")
      }
    }
  
    function init() {
      setCompteur(0);
      setC('black');
    }
  
    return (
      <div>
        <div style={{color:c}}>{compteur}</div>
        <button onClick={inc}>Incrementer</button>
        <button onClick={dec}>Decrementer</button>
        <button onClick={init}>Initialiser</button>
      </div>
    );
  }

  export function JouDe_function() {
  const [compteur, setCompteur] = useState(0);
  const [facealea, setFacealea] = useState(null);
  const [finish, setFinish] = useState(false);

  function jouer() {
    const face = Math.floor(Math.random() * 6 + 1);
    setCompteur(compteur + 1);
    setFacealea(face);
    setFinish(face == 1);
  }

  function init() {
    setCompteur(0);
    setFacealea(null);
    setFinish(false);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        style={{ width: '100px' }}
        src={facealea === null ? 'images/init.png' : `images/face${facealea}.png`}
      />
      <h1 style={{ fontFamily: 'Arial', fontSize: '24px' }}>Jeu de de</h1>
      <h2>face: {facealea}</h2>
      <h2>Nombre d'essais: {compteur}</h2>
      {finish === false ? (
        <div>
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={() => jouer()}
          >
            Jouer
          </button>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '18px' }}>Bravo, vous avez trouvé la face cachée!</p>
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={() => init()}
          >
            Initialiser
          </button>
        </div>
      )}
    </div>
  );
}