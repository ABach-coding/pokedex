// An IIFE for all User preferences we know and care about. Currently only his language, but cookie-Settings, different designs and more is possible!
let userPreferences = (function() {
    //getting the langauge the user speaks from the browser.
    let userLang = navigator.language;
    //very basic language based differentiation. 
    // "de", "de-AT", "de-BE", "de-CH", "de-DE", "de-IT", "de-LI", "de-LU" are the possible returns for german speakers. 
    if(userLang == "de-DE" || "de" || "de-AT" || "de-Be" || "de-CH" || "de-IT" || "de-LI" || "de-LU"){
        userLang = "german";
    } else {
        userLang = "english";
    }
    return {
        getLanguage: userLang
    };
})();
let pokemonRepository = (function() {
    pokemonList = [];
    
    function add(pokemon){
        if(isPokemon(pokemon)){
            pokemonList.push(pokemon);
        }
    }
    // testet ob die übergebene Variable ordnungsgemäß formatiert ist.
    function isPokemon(pokemon){
        //has to be an object to be a pokemon
        if(typeof(pokemon)!= "object")
            return false;

        //has to have the listed keys to be a pokemon
        else if(JSON.stringify(Object.keys(pokemon)) != JSON.stringify(["nameEng", "nameGer", "height", "weight", "types"]))
            return false;

        //testing the entries to the different keys to be of the correct type. Not testing if "types" is an Array of strings.
        else if(typeof(pokemon.nameEng) == "string" 
            && typeof(pokemon.nameGer) == "string" 
            && typeof(pokemon.height) == "number" 
            && typeof(pokemon.weight) == "number" 
            && typeof(pokemon.types) == "object" )
                return true;

        else 
            return false; 
    }

    function search(name){
        return pokemonList.filter(function(pokemon){
            return pokemon.nameEng == name || pokemon.nameGer == name;
        });
    }
    // a function to get the desired text for each entry in the Pokedex.
    function addPokemonToDOMList(pokemon){
        let mainList = document.querySelector(".pokemon-list"); 
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        if(userPreferences.getLanguage === "german"){
            button.innerText = pokemon.nameGer;   
        } else {
            button.innerText = pokemon.nameEng;   
        }
        button.classList.add("pokemon-name");
        addPokemonListener(button, pokemon);
        listItem.appendChild(button);
        mainList.appendChild(listItem);
    }
    
    function showDetails(pokemon){
        console.log(pokemon);
    }

    function addPokemonListener(button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon);
        });
    }

    return {
        getAll: pokemonList,

        add: add,

        search: search,

        addPokemonToDOMList: addPokemonToDOMList
    }

    
})();

let bisasam = {
    nameEng: "Bulbasaur",
    nameGer: "Bisasam",
    height: 0.7,
    weight: 6.9,
    types: ["grass", "poison"],
};
let bisafail = {
    nameEng: "Bulbasaur",
    nameGer: "Bisasam",
    height: 0.7,
    weight: "a lot",
    types: ["grass", "poison"],
}
let bisaknosp = {
    nameEng: "Ivysaur",
    nameGer: "Bisaknosp",
    height: 1.0,
    weight: 13.0,
    types: ["grass", "poison"],
};
let bisaflor = {
    nameEng: "Venusaur",
    nameGer: "Bisaflor",
    height: 2.0,
    weight: 100.0,
    types: ["grass", "poison"],
};
//adding pokemon to the repository
pokemonRepository.add(bisasam);
pokemonRepository.add(bisaknosp);
pokemonRepository.add(bisaflor);
pokemonRepository.add(bisafail);


pokemonList = pokemonRepository.getAll;

//check of the search functionality.
console.log(pokemonRepository.search("Ivysaur"));
console.log(pokemonRepository.search("Garados"));

//iterating over all Pokemons in the array for displaying them on the website in the users language.
//Directly manipulates the websites DOM!
pokemonList.forEach(pokemonRepository.addPokemonToDOMList);

let searchField = document.querySelector(".search-field");

//Add the correct text to the search field.
let setSearchFieldText = function(){
    function setBaseText(){
        if(userPreferences.getLanguage === "german") searchField.value = "Suche nach Pokemon";
        else searchField.value = "Search for a pokemon";
    }
    setBaseText();
    return {
        setBaseText: setBaseText
    }
}();

//clear the search Field of text when clicking into it
searchField.addEventListener("click", function(){
    searchField.value = "";
})

//add the correct text when no longer using the Basetext, if no search happened.
searchField.addEventListener("focusout", function(){
    if(searchField.value != "") 
        ;//keeps the text in the searchbar
    else
        setSearchFieldText.setBaseText();
})





