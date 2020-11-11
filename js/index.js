//----------
// Infinite Scroll
//----------

window.addEventListener("scroll", () =>{
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  
  let loadingDiv = document.getElementById("loading-main");
  if(clientHeight + scrollTop > scrollHeight - 5){
    loadingDiv.classList.remove("invisivel");
    getNextPokemonPage(10);
  } else {
    loadingDiv.classList.add("invisivel");
  }
});

function getNextPokemonPage(pageSize){
  let offset = 0;
  if(window.sessionStorage.offset){
    offset = parseInt(sessionStorage.offset);
  }
  for(let i=1+offset;i<=pageSize+offset;i++){
    const pokemon = getSimplePokemon(i,displaySimplePokemon);
  }
  window.sessionStorage.setItem("offset",offset + pageSize)
};

//----------
// Search
//----------

var campoFiltro = document.getElementById("search-pokemon");
campoFiltro.addEventListener("input", function(){

  var pokemons = document.querySelectorAll(".pokemon");
  
  if(this.value.length > 0) {
    setLoadingDisplay(false);
    var errorMsg = document.getElementById("error-not-found");
    let atLeastOne = false;
    for(var i=0; i< pokemons.length; i++) {
      var pokemon = pokemons[i];
      var nameTag = pokemon.querySelector(".info-nome");
      var idTag = pokemon.querySelector(".info-id");
      var nameString = nameTag.textContent;
      var idString = idTag.textContent;
      var expressao = new RegExp(this.value,"i");
      if(!(expressao.test(nameString) || expressao.test(idString))){
        pokemon.classList.add("invisivel");
      } else {
        atLeastOne = true;
        pokemon.classList.remove("invisivel");
      }
    }
    if(atLeastOne) {
      errorMsg.classList.add("invisivel");
    } else {
      errorMsg.classList.remove("invisivel");
    }
  } else {
    setLoadingDisplay(true);
    for(var i=0; i< pokemons.length; i++) {
      var pokemon = pokemons[i];
      pokemon.classList.remove("invisivel");
    }
  }
})

function setLoadingDisplay(shouldLoad){
  let loadingDiv = document.getElementById("loading-main");
  if(shouldLoad){
    loadingDiv.classList.remove("invisivel");
  } else {
    loadingDiv.classList.add("invisivel");
  }
}

sessionStorage.clear();
getNextPokemonPage(10,0);
