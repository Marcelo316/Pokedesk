
//----------
// Display
//----------

function getDetailedPokemonForPage(){
    let idString = window.location.search;
    const urlParams = new URLSearchParams(idString);
    let id = parseInt(urlParams.get('id'));
    getCompletePokemon(id,displayCompletePokemon);
}

getDetailedPokemonForPage();
