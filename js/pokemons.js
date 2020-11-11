// Dois tipos de exibição de Pokemon - Simples e Completa

//----------
// Requests
//----------

function getPokemon(id,displayPokemon) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET",`https://pokeapi.co/api/v2/pokemon/${id}`);

  var errorMsg = document.querySelector("#error-fetch");
  var loadingDiv = document.querySelector("#loading-main");
  
  xhr.addEventListener("load", function(){
    loadingDiv.classList.add("invisivel");
    if(xhr.status == 200) {
      errorMsg.classList.add("invisivel");

      const resposta = xhr.responseText;
      const jsonPokemon = JSON.parse(resposta);

      displayPokemon(jsonPokemon);
    } else {
      errorMsg.classList.remove("invisivel");
    }

  });

  xhr.send();
}

// Exibe pokemons simples em lista de id=="pokemon-list"
function displaySimplePokemon(pokemon){
  var simplePokemon = simplePokemonFromJSON(pokemon);
  var pokemons = document.getElementById("pokemon-list");
  pokemons.appendChild(createSimplePokemonLi(simplePokemon));
}

// Exibe pokemons completos em div de id=="pokemon-container"
function displayCompletePokemon(pokemon){
  var completePokemon = completePokemonFromJSON(pokemon)
  var container = document.getElementById("pokemon-container");
  insertCompletePokemonInfo(completePokemon,container);
}
  
//----------
// Conversion 
//----------

function simplePokemonFromJSON(entirePokemon){
  const pokemon = {
    name: entirePokemon.name,
    image: entirePokemon.sprites.front_default,
    id: entirePokemon.id,
    types: entirePokemon.types
  };
  return pokemon;
}

function completePokemonFromJSON(entirePokemon){
  const pokemon = {
    image: entirePokemon.sprites.front_default,
    id: entirePokemon.id,
    name: entirePokemon.name,
    weight: entirePokemon.weight,
    height: entirePokemon.height,
    types: entirePokemon.types,
    description: "description?"
  };
  return pokemon;
}

//----------
// HTML Creation
//----------

// Cria li que exibe informações simples do pokemon e linka para nova página
function createSimplePokemonLi(pokemon){
  var anchorPokemon = document.createElement("a");
  var liPokemon = document.createElement("li");
  anchorPokemon.href = `pokemon/detailed-pokemon.html?id=${pokemon.id}`;
  liPokemon.classList.add("pokemon");
  liPokemon.classList.add("card");
  liPokemon.id = `pokemon${pokemon.id}`;
  const conteudoTr =
  `
  <div class="info-esquerda">
    <p class="info-id">#${pokemon.id}</p>
    <p class="info-nome">${pokemon.name}</p>
    <div class="batch-container">
      ${generateTypesContent(pokemon.types)}
    </div>
  </div>
  <div class="info-direita">
    <img src="${pokemon.image}"></img>
  </div>
  
  `
  liPokemon.innerHTML = conteudoTr;
  anchorPokemon.appendChild(liPokemon);
  return anchorPokemon;
}

function generateTypesContent(types){
  let batches = ``;
  types.forEach(type => {
    batches = batches + generateBatch(type)
  })
  return batches;
}

function generateBatch(batchJSON){
  let batch = 
  `
  <div class="batch ${batchJSON.type.name}">
    <img src="https://raw.githubusercontent.com/vinicoder/pokedex/master/src/assets/icons/types/${capitalizeFirstLetter(batchJSON.type.name)}.svg" class="svg-container">
    <p class="type-name">${batchJSON.type.name}</p>
  </div>
  `;
  return batch;
}

function capitalizeFirstLetter(word){
  return word.charAt(0).toUpperCase() + word.slice(1); 
}

// popula container que exibe informações completas do pokemon
function insertCompletePokemonInfo(pokemon){
  var title=document.querySelector("title");
  title.innerText = pokemon.name;

  var image = document.getElementById("image");
  var id = document.getElementById("id");
  var name = document.getElementById("name");
  var weight = document.getElementById("weight");
  var height = document.getElementById("height");
  var types = document.getElementById("types");
  var description = document.getElementById("description");
  
  image.src = pokemon.image;
  id.innerText += pokemon.id;
  name.innerText += pokemon.name;
  weight.innerText += pokemon.weight;
  height.innerText += pokemon.height;
  types.innerHTML = generateTypesContent(pokemon.types);
  description.innerText += pokemon.description;
}



