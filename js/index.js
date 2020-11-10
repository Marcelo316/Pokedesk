function getNextPokemonPage(pageSize){
  //still on progress, final format wont be in a for loop
  for(let i=1;i<=pageSize;i++){
    const pokemon = getPokemon(i,displaySimplePokemon);
  }
};

// sessionStorage to the rescue!

function storePokemonNames(){
  
};

function storePokemonBatches(){

};

window.addEventListener("scroll", () =>{
  //logic for infinite scroll goes here
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  
  if(clientHeight + scrollTop > scrollHeight - 5){
    getNextPokemonPage(10)
  }
});

var campoFiltro = document.getElementById("search-pokemon");
campoFiltro.addEventListener("input", function(){

  var pokemons = document.querySelectorAll(".pokemon");
  if(this.value.length > 0) {
    var errorMsg = document.getElementById("error-not-found");
    let atLeastOne = false;
    for(var i=0; i< pokemons.length; i++) {
      var pokemon = pokemons[i];
      var testedTag = pokemon.querySelector(".nome");
      var testedValue = testedTag.textContent;
      var expressao = new RegExp(this.value,"i");
      if(!expressao.test(testedValue)){
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
    for(var i=0; i< pokemons.length; i++) {
      var pokemon = pokemons[i];
      pokemon.classList.remove("invisivel");
    }
  }
})

getNextPokemonPage(10,0);
