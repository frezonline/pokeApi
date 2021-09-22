const selectors = {
  ClickPokemonRenderButton: ".pokemonRenderButton",
};

const ClickPokemonRenderButton = document.querySelector(
  selectors.ClickPokemonRenderButton
);

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const character = document.getElementById("pokemonInfoBlock");

ClickPokemonRenderButton.addEventListener("click", function () {
  const randomСharacter = Math.floor(Math.random() * 895);

  fetch((baseImgUrl, baseUrl) + randomСharacter)
    .then((response) => response.json())
    .then((json) => {
      character.innerHTML = `
		<div class="characterData">
			<img id=${randomСharacter} class="imagePokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomСharacter}.png"</img>
			<h1 id=${randomСharacter} class="namePokemon">${json.name}</h1>
		</div>
		`;
    });
  return ClickPokemonRenderButton;
});
