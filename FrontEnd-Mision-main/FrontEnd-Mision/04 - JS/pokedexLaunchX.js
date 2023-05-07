const fetchPokemon = () => {
    const url = "http//pokeapi.co/api/v2/pokemon/chikorita";
    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    })
}
fetchPokemon();

