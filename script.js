const selectors = {
	AddBtn: '.clickButton',

}

const AddBtn = document.querySelector(selectors.AddBtn);

let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
let person = document.getElementById('app');

AddBtn.addEventListener("click", function() {
	const randomСharacter = Math.floor(Math.random()*83);

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