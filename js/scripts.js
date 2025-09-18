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
    
    return {
        getAll: pokemonList,

        add: add,

        search: search
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

//the output string we will use
let listOutput = "";

//check of the search functionality.
console.log(pokemonRepository.search("Ivysaur"));
console.log(pokemonRepository.search("Garados"));

//iterating over all Pokemons in the array for displaying them on the website in the users language, together with mentioning which one has the highest height.
//saves the output in the "listOutput" variable
pokemonList.forEach(getPokemonString);
document.getElementById("output").innerHTML= `${listOutput}`;

// a function to get the desired text for each entry in the Pokedex.
function getPokemonString(pokemon){
    if(userPreferences.getLanguage === "german"){
        listOutput += pokemon.nameGer;
        if(pokemon.height > 1.8){
            listOutput += ` dieses Pokemon ist größer als die meisten Menschen, mit ${pokemon.height} Metern!`;
        }   
    } else {
        listOutput += pokemon.nameEng;
        if(pokemon.height > 1.8){
            listOutput += ` this Pokemon is bigger then most humans, at ${pokemon.height} meters!`;
        }   
    }
    listOutput +="<br>";
}

