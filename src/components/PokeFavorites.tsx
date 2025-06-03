import React, { useState, useEffect } from 'react'
import './styles.css'

interface Props {
    pokemonNames: string[];
    onSearchPokemon: (name: string) => Promise<void>;
    favoritePokemon: number;
}


const PokeFavorites: React.FC<Props> = ({ pokemonNames, onSearchPokemon, favoritePokemon }) => {

    useEffect(() => {
    if (favoritePokemon) {
       ;
    }
}, []);

    const handleClick = (name: string) => {
        return (event: React.MouseEvent<HTMLButtonElement>) => {
           
                onSearchPokemon(name)
            
        }
    }
    
const renderItems = (names: string[]) => {
    if(!names) return null

    return Object.values(names).map(pokemonNames => {
       return <button onClick={handleClick(pokemonNames)}>{pokemonNames}</button>
    })  

    
;
};

    return (
    <div className='favorites-box'>
        {renderItems(pokemonNames)}


    </div>
    )
};

export default PokeFavorites