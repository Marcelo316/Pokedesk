// const P = new Pokedex.Pokedex();
//
// const listarPokemon = (nome) => {
//   return P.getPokemonByName(nome)
// }
//
// const linhaPokemon = (nome, ordem, peso) => {
//   const linha = document.createElement('tr');
//   const conteudoLinha =
//   `
//   <td>${nome}</td>
//   <td>${ordem}</td>
//   <td>${peso}</td>
//   `
//   linha.innerHTML = conteudoLinha;
//   return linha;
// }
//
// const adicionaPokemon = (nome) =>{
//   const corpoTabela = document.querySelector("[conteudo-pokemon]")
//
//   listarPokemon(nome).then( result => {
//     corpoTabela.appendChild(linhaPokemon(result.name, result.order, result.weight));
//   })
// }
//
// adicionaPokemon('eevee')
// adicionaPokemon('pikachu')
// adicionaPokemon('bulbasaur')

//-----------------------------------------------------------------------------------

// Requests

function getPokemon(id) {
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
      const pokemon = pokemonFromJSON(jsonPokemon);

      addPokemonToList(pokemon);
    } else {
      errorMsg.classList.remove("invisivel");
    }

  });

  xhr.send();
}
  
// Conversion 

function pokemonFromJSON(entirePokemon){
  const pokemon = {
    name: entirePokemon.name,
    image: entirePokemon.sprites.front_default,
    id: entirePokemon.id,
    types: entirePokemon.types
  };
  console.log(pokemon);
  return pokemon;
}

function generateTypesContent(types){
  var texto = "";
  types.forEach((element) => {
    texto += element + " ";
  })
}

// HTML Creation

function createPokemonLi(pokemon){
  console.log(pokemon);
  var liPokemon = document.createElement("li");
  liPokemon.classList.add("card");
  const conteudoTr =
  `
  <p>#${pokemon.id}</p><p>${pokemon.name}</p>
  <img src="${pokemon.image}"></img>
  <p>Types: ${generateTypesContent(pokemon.types)} </.p>
  `
  liPokemon.innerHTML = conteudoTr;
  return liPokemon;
}

function addPokemonToList(pokemon){
  var listaPokemons = document.querySelector("#pokemon-list");
  listaPokemons.appendChild(createPokemonLi(pokemon));
}