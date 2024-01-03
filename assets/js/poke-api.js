const pokeapi = {};

pokeapi.getPokemos = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

 pokeapi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json());
}
    
return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
    .then((detailRequeset) => Promise.all(detailRequeset))
    .then((pokemonDetails) => pokemonDetails)

}

