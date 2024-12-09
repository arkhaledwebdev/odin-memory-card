async function getRandomPokemons() {
  const pokemonsIds = getRandomPokemonIds();
  const pokemonPromise = pokemonsIds.map(async (pokemonId) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    return response.json();
  });

  const randomPokemons = await Promise.all(pokemonPromise);

  return randomPokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      isClicked: false,
    };
  });
}

function getRandomPokemonIds() {
  const maxPokemonsNo = 12;
  const totalPokemonNo = 721;
  const pokemonIds = new Set();
  while (pokemonIds.size < maxPokemonsNo) {
    pokemonIds.add(Math.floor(Math.random() * totalPokemonNo) + 1);
  }
  return Array.from(pokemonIds);
}

function shufflePokemons(pokemonList) {
  const shuffledPokemons = [...pokemonList];
  for (let i = shuffledPokemons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPokemons[i], shuffledPokemons[j]] = [
      shuffledPokemons[j],
      shuffledPokemons[i],
    ];
  }
  return shuffledPokemons;
}

export { getRandomPokemons, shufflePokemons };
