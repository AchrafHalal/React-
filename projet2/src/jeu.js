import React from "react";
export default class JouDe extends React.Component{
    constructor(){
        super()
        this.state=({compteur:0,facealea:null,finish:false})
        
    }
    jouer(){
        let facealea=Math.floor(Math.random()*6+1);
        this.setState(
            {compteur:this.state.compteur+=1,face:facealea,finish:facealea == this.props.cahe}
        )
    }
    init(){
        this.setState(
            {compteur:0,face:null,finish:false}
        )
    }
    render(){
        return(
            <div>
                <img style={{width:"100px"}} src={this.state.face==null?"images/init.png":`images/face${this.state.face}.png`}/>
                <h1>Jeu de de</h1>
                <h2>face:{this.state.face}</h2>
                <h2>Nombre d'essais :{this.state.compteur}</h2>
                {this.state.finish === false ? (
                <div>
                    <button onClick={() => this.jouer()}>Jouer</button>
                </div>
                ) : (
                    <div>
                        <p>Bravo, vous avez trouvé la face cachée!</p>
                        <button onClick={() => this.init()}>Initialiser</button>
                    </div>

                )}
            </div>
        )
    }
}