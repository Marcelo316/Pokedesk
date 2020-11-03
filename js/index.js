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

function getPokemonById(id) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET",`https://pokeapi.co/api/v2/pokemon/${id}`);

  var errorMsg = document.querySelector("#error-msg");
  var loadingDiv = document.querySelector("#loading-main");
  
  xhr.addEventListener("load", function(){
    loadingDiv.classList.add("invisivel");
    if(xhr.status == 200) {
      var resposta = xhr.responseText;
      var pokemon = JSON.parse(resposta);

      addPokemonToList(pokemon);

    } else {
      errorMsg.classList.remove("invisivel");
    }

  });

  xhr.send();
}

function createPokemonLi(pokemon){
  var liPokemon = document.createElement("li");
  liPokemon.classList.add("card");
  const conteudoTr =
  `
  <p>ID: ${pokemon.id}</p>
  <p>Name: ${pokemon.name}</p>
  <p>Base experience: ${pokemon.base_experience}</p>
  <p>Height: ${pokemon.height}</p>
  <p>Is default: ${pokemon.is_default}</p>
  <p>Order: ${pokemon.order}</p>
  <p>Weight: ${pokemon.weight}</p>
  `
  liPokemon.innerHTML = conteudoTr;
  return liPokemon;
}

function addPokemonToList(pokemon){
  var listaPokemons = document.querySelector("#pokemon-list");
  listaPokemons.appendChild(createPokemonLi(pokemon));
}

function get5FirstPokemons(){
  for(let i=1;i<=5;i++){
    getPokemonById(`${i}`);
  }
}

get5FirstPokemons();

var pokemonList = document.querySelector("#pokemon-list");
pokemonList.addEventListener("click",function(){
  if(event.target.tagName == "LI"){
    // Go to a new page to show specific pokemon
  }
})
