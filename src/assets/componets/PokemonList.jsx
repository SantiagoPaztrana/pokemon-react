import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const PokemonList = () =>{

    const {allPokemons} = useContext(PokemonContext)

    return(

        <>
            <div className='card-list-pokemon container'> 

                {allPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id}/>
                    

                ))}
            
            
            </div>

        

        </>
    )
}