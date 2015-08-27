var pokemonList = [
{id: 1, name: "Bulbasaur", type: "grass", chance: 30}, 
{id: 2, name: "Ivysaur", type: "grass", chance: 20}, 
{id: 3, name: "Venusaur", type: "grass", chance: 10}, 
{id: 4, name: "Charmander", type: "fire", chance: 30}, 
{id: 5, name: "Charmeleon", type: "fire", chance: 20}, 
{id: 6, name: "Charizard", type: "fire", chance: 10}, 
{id: 7, name: "Squirtle", type: "water", chance: 30}, 
{id: 8, name: "Wartortle", type: "water", chance: 20}, 
{id: 9, name: "Blastoise", type: "water", chance: 10}, 
{id: 10, name: "Caterpie", type: "bug", chance: 80}, 
{id: 11, name: "Metapod", type: "bug", chance: 70}, 
{id: 12, name: "Butterfree", type: "bug", chance: 50},
{id: 13, name: "Weedle", type: "bug", chance: 70},
{id: 14, name: "Kakuna", type: "bug", chance: 60},
{id: 15, name: "Beedrill", type: "bug", chance: 40},
{id: 16, name: "Pidgey", type: "flying", chance: 80},
{id: 17, name: "Pidgeotto", type: "flying", chance: 50},
{id: 18, name: "Pidgeot", type: "flying", chance: 30},
{id: 19, name: "Rattata", type: "normal", chance: 70},
{id: 20, name: "Raticate", type: "normal", chance: 30},
{id: 21, name: "Spearow", type: "flying", chance: 60},
{id: 22, name: "Fearow", type: "flying", chance: 30},
{id: 23, name: "Ekans", type: "poison", chance: 50},
{id: 24, name: "Arbok", type: "poison", chance: 30},
{id: 25, name: "Pikachu", type: "electric", chance: 50},
{id: 26, name: "Raichu", type: "electric", chance: 30},
{id: 27, name: "Sandshrew", type: "ground", chance: 40},
{id: 28, name: "Sandslash", type: "ground", chance: 30},
{id: 29, name: "Nidoran♀", type: "poison", chance: 40},
{id: 30, name: "Nidorina", type: "poison", chance: 30},
{id: 31, name: "Nidoqueen", type: "poison", chance: 20},
{id: 32, name: "Nidoran♂", type: "poison", chance: 40},
{id: 33, name: "Nidorino", type: "poison", chance: 30},
{id: 34, name: "Nidoking", type: "poison", chance: 20},
{id: 35, name: "Clefairy", type: "normal", chance: 40},
{id: 36, name: "Clefable", type: "normal", chance: 30},
{id: 37, name: "Vulpix", type: "fire", chance: 40},
{id: 38, name: "Ninetales", type: "fire", chance: 30},
{id: 39, name: "Jigglypuff", type: "normal", chance: 40},
{id: 40, name: "Wigglytuff", type: "normal", chance: 30},
{id: 41, name: "Zubat", type: "poison", chance: 40},
{id: 42, name: "Golbat", type: "poison", chance: 30},
{id: 43, name: "Oddish", type: "grass", chance: 50},
{id: 44, name: "Gloom", type: "grass", chance: 30},
{id: 45, name: "Vileplume", type: "grass", chance: 20},
{id: 46, name: "Paras", type: "grass", chance: 50},
{id: 47, name: "Parasect", type: "grass", chance: 30},
{id: 48, name: "Venonat", type: "grass", chance: 50},
{id: 49, name: "Venomoth", type: "grass", chance: 30},
{id: 50, name: "Diglett", type: "ground", chance: 50},
{id: 51, name: "Dugtrio", type: "ground", chance: 30},
{id: 52, name: "Meowth", type: "normal", chance: 50},
{id: 53, name: "Persian", type: "normal", chance: 30},
{id: 54, name: "Psyduck", type: "water", chance: 50},
{id: 55, name: "Golduck", type: "water", chance: 30},
{id: 56, name: "Mankey", type: "fighting", chance: 50},
{id: 57, name: "Primeape", type: "fighting", chance: 30},
{id: 58, name: "Growlithe", type: "fire", chance: 50},
{id: 59, name: "Arcanine", type: "fire", chance: 30},
{id: 60, name: "Poliwag", type: "water", chance: 50},
{id: 61, name: "Poliwhirl", type: "water", chance: 40},
{id: 62, name: "Poliwrath", type: "water", chance: 30},
{id: 63, name: "Abra", type: "psychic", chance: 30},
{id: 64, name: "Kadabra", type: "psychic", chance: 25},
{id: 65, name: "Alakazam", type: "psychic", chance: 20},
{id: 66, name: "Machop", type: "fighting", chance: 50},
{id: 67, name: "Machoke", type: "fighting", chance: 30},
{id: 68, name: "Machamp", type: "fighting", chance: 20},
{id: 69, name: "Bellsprout", type: "grass", chance: 50},
{id: 70, name: "Weepinbell", type: "grass", chance: 30},
{id: 71, name: "Victreebel", type: "grass", chance: 20},
{id: 72, name: "Tentacool", type: "water", chance: 50},
{id: 73, name: "Tentacruel", type: "water", chance: 20},
{id: 74, name: "Geodude", type: "rock", chance: 50},
{id: 75, name: "Graveler", type: "rock", chance: 30},
{id: 76, name: "Golem", type: "rock", chance: 20},
{id: 77, name: "Ponyta", type: "fire", chance: 50},
{id: 78, name: "Rapidash", type: "fire", chance: 30},
{id: 79, name: "Slowpoke", type: "water", chance: 50},
{id: 80, name: "Slowbro", type: "water", chance: 30},
{id: 81, name: "Magnemite", type: "electric", chance: 40},
{id: 82, name: "Magneton", type: "electric", chance: 20},
{id: 83, name: "Farfetch'd", type: "normal", chance: 30},
{id: 84, name: "Doduo", type: "normal", chance: 50},
{id: 85, name: "Dodrio", type: "normal", chance: 30},
{id: 86, name: "Seel", type: "water", chance: 50},
{id: 87, name: "Dewgong", type: "water", chance: 30},
{id: 88, name: "Grimer", type: "poison", chance: 50},
{id: 89, name: "Muk", type: "poison", chance: 30},
{id: 90, name: "Shellder", type: "water", chance: 50},
{id: 91, name: "Cloyster", type: "water", chance: 25},
{id: 92, name: "Gastly", type: "ghost", chance: 60},
{id: 93, name: "Haunter", type: "ghost", chance: 30},
{id: 94, name: "Gengar", type: "ghost", chance: 15},
{id: 95, name: "Onix", type: "rock", chance: 70},
{id: 96, name: "Drowzee", type: "psychic", chance: 50},
{id: 97, name: "Hypno", type: "psychic", chance: 30},
{id: 98, name: "Krabby", type: "water", chance: 50},
{id: 99, name: "Kingler", type: "water", chance: 30},
{id: 100, name: "Voltorb", type: "electric", chance: 50},
{id: 101, name: "Electrode", type: "electric", chance: 30},
{id: 102, name: "Exeggcute", type: "grass", chance: 50},
{id: 103, name: "Exeggutor", type: "grass", chance: 25},
{id: 104, name: "Cubone", type: "ground", chance: 40},
{id: 105, name: "Marowak", type: "ground", chance: 25},
{id: 106, name: "Hitmonlee", type: "fighting", chance: 20},
{id: 107, name: "Hitmonchan", type: "fighting", chance: 20},
{id: 108, name: "Lickitung", type: "normal", chance: 25},
{id: 109, name: "Koffing", type: "poison", chance: 40},
{id: 110, name: "Weezing", type: "poison", chance: 20},
{id: 111, name: "Rhyhorn", type: "ground", chance: 30},
{id: 112, name: "Rhydon", type: "ground", chance: 15},
{id: 113, name: "Chansey", type: "normal", chance: 10},
{id: 114, name: "Tangela", type: "grass", chance: 40},
{id: 115, name: "Kangaskhan", type: "normal", chance: 25},
{id: 116, name: "Horsea", type: "water", chance: 50},
{id: 117, name: "Seadra", type: "water", chance: 30},
{id: 118, name: "Goldeen", type: "water", chance: 50},
{id: 119, name: "Seaking", type: "water", chance: 30},
{id: 120, name: "Staryu", type: "water", chance: 50},
{id: 121, name: "Starmie", type: "water", chance: 30},
{id: 122, name: "Mr. Mime", type: "psychic", chance: 20},
{id: 123, name: "Scyther", type: "grass", chance: 25},
{id: 124, name: "Jynx", type: "psychic", chance: 25},
{id: 125, name: "Electabuzz", type: "electric", chance: 30},
{id: 126, name: "Magmar", type: "fire", chance: 30},
{id: 127, name: "Pinsir", type: "grass", chance: 30},
{id: 128, name: "Tauros", type: "normal", chance: 30},
{id: 129, name: "Magikarp", type: "water", chance: 99},
{id: 130, name: "Gyarados", type: "water", chance: 30},
{id: 131, name: "Lapras", type: "water", chance: 50},
{id: 132, name: "Ditto", type: "normal", chance: 60},
{id: 133, name: "Eevee", type: "normal", chance: 50},
{id: 134, name: "Vaporeon", type: "water", chance: 30},
{id: 135, name: "Jolteon", type: "electric", chance: 30},
{id: 136, name: "Flareon", type: "fire", chance: 30},
{id: 137, name: "Porygon", type: "normal", chance: 50},
{id: 138, name: "Omanyte", type: "rock", chance: 30},
{id: 139, name: "Omastar", type: "rock", chance: 20},
{id: 140, name: "Kabuto", type: "rock", chance: 30},
{id: 141, name: "Kabutops", type: "rock", chance: 15},
{id: 142, name: "Aerodactyl", type: "rock", chance: 25},
{id: 143, name: "Snorlax", type: "normal", chance: 30},
{id: 144, name: "Articuno", type: "ice", chance: 3},
{id: 145, name: "Zapdos", type: "electric", chance: 3},
{id: 146, name: "Moltres", type: "fire", chance: 3},
{id: 147, name: "Dratini", type: "dragon", chance: 20},
{id: 148, name: "Dragonair", type: "dragon", chance: 10},
{id: 149, name: "Dragonite", type: "dragon", chance: 5},
{id: 150, name: "Mewtwo", type: "psychic", chance: 2},
{id: 151, name: "Mew", type: "psychic", chance: 1},
];

function createPreloadedImages(){
    var url = '';
    var html = "";
    for (var i = 0; i < pokemonList.length; i++){
        var pokemonPosition = pokemonList[i].id;
        url = 'images/' + pokemonPosition + '.png';
        preloadImage(url);
        html = 'Preloading all images: ' + i + '/' + (pokemonList.length - 1);
        document.getElementById("pokemonCatchInfo").innerHTML = html;
        if (i === pokemonList.length - 1) {
            html = 'Done loading all images';
        };
    };
    document.getElementById("pokemonCatchInfo").innerHTML = html;
};
createPreloadedImages();

function preloadImage(url) {
    var img = new Image();
    img.src = url;
};

var caughtPokemon = [];
var player = {
	caught:{
	fire: 0,
	water: 0,
	grass: 0,
	electric: 0,
	normal: 0,
	psychic: 0,
	dragon: 0,
	ghost: 0,
	rock: 0,
	ground: 0,
	poison: 0,
	fighting: 0,
	flying: 0,
	bug: 0,
	ice: 0,
	},
	maxType:{
	fireMax: 0,
	waterMax: 0,
	grassMax: 0,	
	electricMax: 0,
	normalMax: 0,
	psychicMax: 0,
	dragonMax: 0,
	ghostMax: 0,
	rockMax: 0,
	groundMax: 0,
	poisonMax: 0,
	fightingMax: 0,
	flyingMax: 0,
	bugMax: 0,
	iceMax: 0,
	}
};
function getAllPokemonTypes(){
	for (var i = 0; i < pokemonList.length; i++){
		var type = pokemonList[i].type + "Max";
		player.maxType[type] += 1;
	};
};
getAllPokemonTypes();
function getPokemon(){
	var html ="";
	if (pokemonList.length > 0){
	var randomPokemon = pokemonList[Math.floor(Math.random()*pokemonList.length)];
	var index = pokemonList.indexOf(randomPokemon);
	var pokemonPosition = randomPokemon.id
	html += '<div class="row">';
	html += '<div class="col-xs-4 col-xs-offset-4">';
	html += '<img src="images/' + pokemonPosition + '.png">';
	html += '</div>';
	html += '</div>';
	html += '<div class="row">';
	html += '<div class="col-xs-4 col-xs-offset-4">';
	html += randomPokemon.id + " - " + randomPokemon.name + " - " + randomPokemon.type + " (Catch rate: "  + randomPokemon.chance + "%)";
	html += '<div class="row"><div class="col-xs-12">'
	html += '<button type="button" onclick="catchPokemon(' + index + ')">Catch it!</button>';
	html += '</div>';
	html += '<div class="col-xs-12">';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	}
	else{
	html += '<div class="col-xs-4 col-xs-offset-4">';
	html += "GAME FINISHED!";
	html += '</div>';
	}
	document.getElementById("pokemonDisplay").innerHTML = html;
};

function catchPokemon(index){
	var randomPokemon = pokemonList[index];
	var type = randomPokemon.type;
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	var html = "";
	if (randomNumber <= randomPokemon.chance){
		player.caught[type] += 1;
		createPokemonInfo();
		html += "You caught " + randomPokemon.name;
		document.getElementById("pokemonCatchInfo").innerHTML = html;
		pokemonList.splice(index,1);
	}
	else{
		html += "You fail to catch " + randomPokemon.name;
		document.getElementById("pokemonCatchInfo").innerHTML = html;
	};
getPokemon();
};
getPokemon();

function createPokemonInfo(){
	var html ="";
	html += '<div class="col-xs-8 col-xs-offset-2">';
	for (var key in player.caught){
		var type = player.caught[key];
		var typeMax = key + "Max";
		var maxType = player.maxType[typeMax]
		html += key + " " + type + "/" + maxType + " | ";
	};
	html += '</div>';
	
	document.getElementById("pokemonInfo").innerHTML = html;
};
createPokemonInfo();
