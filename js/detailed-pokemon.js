function getDetailedPokemonForPage(){
    let pokemonId = location.search.substring(1);
    console.log(pokemonId);
    getDetailedPokemon(pokemonId);
}

function getDetailedPokemon(id) {
    var xhr = new XMLHttpRequest();
  
    xhr.open("GET",`https://pokeapi.co/api/v2/pokemon/${id}`);
  
    var errorMsg = document.querySelector("#error-msg");
    var loadingDiv = document.querySelector("#loading-main");
    
    xhr.addEventListener("load", function(){
      loadingDiv.classList.add("invisivel");
      if(xhr.status == 200) {
        errorMsg.classList.add("invisivel");
  
        const resposta = xhr.responseText;
        const jsonPokemon = JSON.parse(resposta);
        const pokemon = detailedPokemonFromJSON(jsonPokemon);
  
        displayDetailedPokemon(pokemon);
      } else {
        errorMsg.classList.remove("invisivel");
      }
  
    });
  
    xhr.send();
  }

  function detailedPokemonFromJSON(entirePokemon){
    const pokemon = {
      name: entirePokemon.name,
      image: entirePokemon.sprites.front_default,
      id: entirePokemon.id,
      types: entirePokemon.types
    };
    return pokemon;
  }
  
  function displayDetailedPokemon(pokemon){
    var id = document.getElementById("id");
    var name = document.getElementById("name");
    var image = document.getElementById("image");
    var types = document.getElementById("types");

    id.innerText = pokemon.id;
    name.innerText = pokemon.name;
    image.src = pokemon.image;
    types.innerText = pokemon.types;
  }

  getDetailedPokemonForPage();
