import React, {Component} from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";

class Pokedex extends Component{
    render(){
        const {pokemon, sum, isWinner} = this.props
        var title
        if(isWinner){
            title = <h3 className = "Pokedex-winner">Winner</h3>
        }else{
            title = <h3 className = "Pokedex-loser">Loser</h3>
        }
        return(
            <div className = "Pokedex">
                <h2>Pokedex</h2>
                <p>Total experience is {sum}</p>
                {title}
                {
                    pokemon.map(p => 
                        <Pokecard 
                            name = {p.name}
                            img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                            type = {p.type}
                            exp = {p.base_experience}
                        />
                    )
                }
            </div>
        )
    }
}

export default Pokedex;