import React, {Component} from 'react';
import "./Pokecard.css"

class Pokecard extends Component{
    render(){
        const {name, img, type, exp} = this.props;
        return(
            <div className = "Pokecard">
                <h3 className = "Pokecard-title">{name}</h3>
                <img src = {img} alt = "img"></img>
                <p className = "Pokecard-data">Type: {type}</p>
                <p className = "Pokecard-data">EXP: {exp}</p>
            </div>
        ) 
    }
}

export default Pokecard