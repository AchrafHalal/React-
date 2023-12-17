import React from "react";

function F1(props) {
  return (
    <div>
        <p>
      hello {props.p.prenom} {props.p.age} 
        </p>
        <p>Diplome : </p>
        <span>{props.diplo}</span>
        <hr></hr>
    </div>
  );
}

export function Message() {
  let p1 = { prenom: "Imane", age: 23 };
  let diplome=["bac ","bac+2 ","bac+3"]
  return (
    <div>
      <F1 p={p1} diplo={diplome} />
      <F1 p={{ prenom: "Ahmed", age: 24 }} diplo={diplome} />
    </div>
  );
}

class F1_class extends React.Component {
  render() {
    return (
      <p>
        Bonjour {this.props.p.prenom} {this.props.p.age}
      </p>
    );
  }
}

export default class Message_class extends React.Component {
  constructor() {
    super();
    this.personne1 = { prenom: "jamal", age: 22 };
  }

  render() {
    return (
      <div>
        <F1_class p={this.personne1} />
        <F1_class p={{ prenom: "Ali", age: 44 }} />
      </div>
    );
  }
}

function F33(props) {
    return (
      <div>
        Bonjour {props.nom} {props.prenom} <br/>
        {props.children}<hr></hr>
      </div>
    );
  }
  export function Display() {
   
    return (
      <div>
        <F33 nom="n1" prenom="p1" />
        <F33 nom="n2" prenom="p2" >
            <button>Cliquez ici</button>
        </F33>
        <F33 nom="n3" prenom="p3" >
            <span>this is a children</span>
        </F33>
      </div>
    );
  }


