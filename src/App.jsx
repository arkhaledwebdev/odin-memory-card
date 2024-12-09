import { useEffect, useState } from "react";
import "./App.css";
import { getRandomPokemons, shufflePokemons } from "./pokemon_helper";
import PokemonCard from "./pokemon_card";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getRandomPokemons();
      setPokemonList(pokemons);
    };
    fetchData();
  }, []);

  const handleClick = (pokemonId) => {

    setPokemonList(prevList=>{
    
      const clickedPokemon = prevList.find((pokemon)=> pokemon.id === pokemonId);
      if(clickedPokemon.isClicked){
        if(score > highScore){
          setHighScore(score);
        }
        const resetList = prevList.map((pokemon)=>({
          ...pokemon,
          isClicked: false
        }));
        setScore(0);
        return resetList;
      }
      const updatedList = prevList.map((pokemon)=> pokemon.id == pokemonId ? {...pokemon,isClicked: true}:pokemon);
      setScore(prevScore => prevScore + 10);
      return shufflePokemons(updatedList);
    })
  };

  const pokemonCards = pokemonList.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        image={pokemon.image}
        onClick={()=> handleClick(pokemon.id)}
      />
    );
  });
  return (
    <>
      <h1>Odin memory card</h1>
      <div className="score-container">
        <div className="current-score">Score: {score}</div>
        <div className="high-score">High score: {highScore}</div>
      </div>
      <div className="pokemon-container">{pokemonCards}</div>
    </>
  );
}
