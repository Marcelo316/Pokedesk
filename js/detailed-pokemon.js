function getDetailedPokemonForPage(){
    let id = location.search.substring(1);
    getPokemon(id,displayCompletePokemon);
}

getDetailedPokemonForPage();
