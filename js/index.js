
function getNextPokemonPage(pageSize){
  //still on progress, final format wont be in a for loop
  for(let i=1;i<=pageSize;i++){
    const pokemon = getPokemon(i);
  }
};

window.addEventListener("scroll", () =>{
  //logic for infinite scroll goes here
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  
  if(clientHeight + scrollTop > scrollHeight - 5){
    getNextPokemonPage(10)
  }
});

getNextPokemonPage(30,0);
