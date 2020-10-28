const P = new Pokedex.Pokedex();

const teste = P.getPokemonByName('eevee');


const listarPokemon = (nome) => {
  return P.getPokemonByName(nome)
}

const linhaPokemon = (nome, ordem, peso) => {
  const linha = document.createElement('tr');
  const conteudoLinha =
  `
  <td>${nome}</td>
  <td>${ordem}</td>
  <td>${peso}</td>
  `
  linha.innerHTML = conteudoLinha;
  return linha;
}

const adicionaPokemon = (nome) =>{
  const corpoTabela = document.querySelector("[conteudo-pokemon]")

  listarPokemon(nome).then( result => {
    corpoTabela.appendChild(linhaPokemon(result.name, result.order, result.weight));
  })
}

adicionaPokemon('eevee')
adicionaPokemon('pikachu')
adicionaPokemon('bulbasaur')
