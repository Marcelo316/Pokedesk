
function getPokemonPage(pageSize, offset){
  //still on progress, final format wont be in a for loop
  for(let i=1+offset;i<=pageSize+offset;i++){
    const pokemon = getPokemon(i);
  }
};

var pokemonList = document.querySelector("#pokemon-list");
pokemonList.addEventListener("click",function(event){
  if(event.target.tagName == "LI"){
    // Go to a new page to show specific pokemon
  }
});

window.addEventListener("scroll", () =>{
  //logic for infinite scroll goes here
});

getPokemonPage(10,0);
