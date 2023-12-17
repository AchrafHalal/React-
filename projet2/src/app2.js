import {Info} from "./Etudiant.js";
export function PlusInfo(){
    return(
        <div>
            <info nom="ali" prenom="sami"/>
            <info nom="kamal" prenom="mohmed"/>
            <info nom="ali" prenom="sami"/>
        </div>
    )
}
export default class PlusInfo2 extends React.Component(){
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <info nom="ali" prenom="sami"/>
                <info nom="kamal" prenom="mohmed"/>
                <info nom="ali" prenom="sami"/>
            </div>
        )
    }
}