function createPreloadedImages(){
    var url = '';
    var html = "";
    for (var i = 0; i < pokemonList.length; i++){
        var pokemonPosition = pokemonList[i].id;
        url = 'images/' + pokemonPosition + '.gif';
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
  fairy:0,
  steel:0,
  dark:0
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
  fairyMax:0,
  steelMax:0,
  darkMax:0
	}
};
function getAllPokemonTypes(){
	for (var i = 0; i < pokemonList.length; i++){
		var type = firstToLowerCase(pokemonList[i].type + "Max");
    var type2 = firstToLowerCase(pokemonList[i].type2 + "Max");
    if(type2 !== "noneMax"){
  		player.maxType[type2] += 1;
    }
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
	html += '<div class="col-xs-4 col-xs-offset-4" style="height:200px;">';
	html += '<img class="img-responsive center-block" src="images/' + pokemonPosition + '.gif" style="margin-top:50px;">';
	html += '</div>';
	html += '</div>';
	html += '<div class="row">';
	html += '<div class="col-xs-4 col-xs-offset-4">';
	html += randomPokemon.id + " - " + randomPokemon.name + " - " + randomPokemon.type + ", " + randomPokemon.type2 + " (Catch rate: "  + randomPokemon.chance + "%)";
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
	var type = firstToLowerCase(randomPokemon.type);
  var type2 = firstToLowerCase(randomPokemon.type2);
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	var html = "";
	if (randomNumber <= randomPokemon.chance){
		player.caught[type] += 1;
    if(type2 !== "none"){
  		player.caught[type2] += 1;
    }
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
	for (var key in player.caught){
		var type = player.caught[key];
		var typeMax = key + "Max";
		var maxType = player.maxType[typeMax]
		html += key + " " + type + "/" + maxType + " | ";
	};

	document.getElementById("pokemonInfo").innerHTML = html;
};
createPokemonInfo();
