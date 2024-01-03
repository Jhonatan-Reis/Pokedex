function convertType(pokemonTypes){
    return pokemonTypes.map((TypeSlot) => {
        return `
        <li class="type type-${TypeSlot.type.name}">${TypeSlot.type.name}</li>
        `
    })
}
function convertHabilidade(Habilidades){
    cont = 0;
    return Habilidades.map((pokeAbilitie) => {
        cont++
        return `
        </tr>
        <th scope="row">Habilidade${cont}:</th>
        <td>${pokeAbilitie.ability.name}</td>
        </tr>

        `
    })
}
function convert(pokemon) {
    return `    
    <li class="${pokemon.types[0].type.name} pokemon"  data-bs-toggle="modal" data-bs-target="#Details_${pokemon.name}">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
        <ol class="types">
        ${convertType(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </div>
    </li>
    <div class="modal fade" id="Details_${pokemon.name}" tabindex="-1" aria-labelledby="Modal_${pokemon.name}" aria-hidden="true">
    <div class="modal-dialog modelo">
      <div class="modal-content ${pokemon.types[0].type.name} modelo_conteudo">
      <div class="transparent modal-body">
      <div>
          <button type="button" class="close"  data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-arrow-left"></i></button>
          <button type="button" class="favorite"  aria-label="lije"><i class="bi bi-heart"></i></button>
          </div>
          <div>
              <div class="d-flex">
                  <h1 class="text-white text-capitalize">${pokemon.name}</h1>
                  <h4 class="number_modelo">#1</h4>
              </div>
              <div class="tipo_model">
              ${convertType(pokemon.types).join('')}
</div>
                  <img class="image_poke" src="${pokemon.sprites.other.dream_world.front_default}"  alt="${pokemon.name}">
        </div>
          </div>
          <div class="modal-footer d-block bg-white editar">
              <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Especie:</th>
                      <td>${pokemon.species.name}</td>

                    <tr>
                      ${convertHabilidade(pokemon.abilities).join('')}
                    </tr>
                    <tr>
                      <th scope="row">Peso:</th>
                      <td >${pokemon.weight}g</td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
    </div>
  </div>
    `
}
var lista = document.getElementById("Pokedex");
var offset = -10;
var limit = 10;
function Carregar(){
    if(offset < 1000){
    offset += 10;
    pokeapi.getPokemos(offset, limit).then((pokemons = [])=> {
        const newHtml = pokemons.map(convert).join('')
        console.log(pokemons)
        lista.innerHTML += newHtml;
    })}else{
        var button = document.getElementById("load_more")
        button.innerHTML = '';
        alert("Chegou ao fim da pokedex")
    }
}
Carregar();
/*
    const lista_item = []
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            lista_item.push += (`${convert(pokemon)}`)
        }
            })  
    .catch((error) => console.log(error));

*/

