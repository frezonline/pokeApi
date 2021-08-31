const selectors = {
	AddBtn: '.clickButton',

}

const AddBtn = document.querySelector(selectors.AddBtn);

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const person = document.getElementById('app');

AddBtn.addEventListener("click", function() {
	const randomСharacter = Math.floor(Math.random()*895);

	fetch((imgUrl, baseUrl) + randomСharacter).then(response => response.json()).then(json => {
		console.log(json);
		person.innerHTML = `
		<div class="infoPokemon">
		<img id=${randomСharacter} class="imgPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomСharacter}.png"${json.front_default}</img>
		<h1 id=${randomСharacter} class="namePokemon">${json.name}</h1>
		</div>
		`
	}); 
	return AddBtn;
});
