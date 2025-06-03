import React, { useState, useEffect } from 'react';
import './styles.css'
import PokeFavorites from './PokeFavorites';


//map attributes
interface Pokemon {
    id: number;
    name: string;
    types: Array<{
        type: {
            name: string;
        };
    }>;
    sprites: {
        front_default: string;
        back_default: string;
    };
}


const PokeQuery: React.FC = () => {


    const [pokemonName, setPokemonName] = useState<string>('');
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [favorite, setFavorite] = useState<boolean>(false)
    const [localStorageItems, setLocalStorageItems] = useState<Record<string, string>>({});
    const [favoritePokemon, setFavoritePokemon] = useState<number>(0);


    async function fetchPokemon(name: string): Promise<void> {
        if (!name.trim()) return;

        setLoading(true);
        setError('');

        try {
           
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            console.log(response)
            const data: Pokemon = await response.json();
            setPokemon(data);
            

        }
        
        catch (err) {
            setError('An Error Has Occurred!');
            console.log(error);
            setPokemon(null);
        } finally {
            setLoading(false);
        }
}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPokemon(pokemonName);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value);
    };

     function changeFavorite(name: string) {
            if(localStorage.getItem('pokemon_'+name)){
            localStorage.removeItem('pokemon_'+name)
            setFavorite(false)
            setFavoritePokemon(favoritePokemon - 1);
            } else {
                localStorage.setItem('pokemon_'+name, name)
                setFavorite(true)
                setFavoritePokemon(favoritePokemon + 1);
            }
        setLocalStorageItems(getAllLocalStorageItems())
    }
    
    const handleFavorite = (name: string) => {
        return (event: React.MouseEvent<HTMLButtonElement>) => {
           
                changeFavorite(name);
            
        }
    }

    function getAllLocalStorageItems(): Record<string, string> {
  const items: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('pokemon_')) {
      const value = localStorage.getItem(key);
      if (value) {
        items[key] = value;
      }
    }
  }
  return items;
}

    useEffect(() => {
    if (pokemon) {
        setFavorite(!!localStorage.getItem('pokemon_'+pokemon.name));
    }
}, [pokemon]);

useEffect(() => {
    const items = getAllLocalStorageItems();
    setLocalStorageItems(items);
    setFavoritePokemon(Object.values(items).length)
  }, []);

    return (
        <div>

        <form className='form'
        onSubmit={handleSubmit}>

            <input type='input'
            placeholder="Choose your PokeMon!"
            className='input-form'
            onChange={handleInputChange}>
            </input>

            <button className='submit-form'
            type='submit'
            disabled={loading}>
                {loading ? '...' : 'Go!'}
                </button>

        </form>

        <div className='poke-display'>

        {pokemon && (
                <div className="pokemon-result">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                    <h3>{pokemon.name}</h3>
                    
                    <p>Types: {pokemon.types.map(type => type.type.name).join('/')}</p>
                   
                    <button type='button' className='favorite' onClick={handleFavorite(pokemon.name)}>{favorite ? 'Unfavorite' : 'Favorite'}</button>
                    
                </div>
            )}
        </div>
        
       
        <div>
            <PokeFavorites pokemonNames={Object.values(localStorageItems)} onSearchPokemon={fetchPokemon} favoritePokemon={favoritePokemon} />
        </div>
           
        </div>
        )
};

export default PokeQuery