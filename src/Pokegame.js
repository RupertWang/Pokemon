import React, {Component} from 'react';
import Pokedex from './Pokedex';

const pokemonList = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

class Pokegame extends Component{
    render(){
        var hand1 = [];
        var hand2 = pokemonList;
        console.log(hand1);
        console.log(hand2);

        while(hand1.length !== hand2.length){
            var randomIndex = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2[randomIndex])
            hand2.splice(randomIndex,1)
        }

        var sum1 = 0;
        var sum2 = 0;
        for(let i = 0; i < hand1.length; i++){
            sum1 += hand1[i].base_experience;
        }
        for(let i = 0; i < hand2.length; i++){
            sum2 += hand2[i].base_experience;
        }

        return(
            <div className = "Pokegame">
                <Pokedex pokemon = {hand1} sum = {sum1} isWinner ={sum1 >= sum2}/>
                <Pokedex pokemon = {hand2} sum = {sum2} isWinner ={sum2 > sum1}/>
            </div>
        )
    }
}

export default Pokegame;