//getting the langauge the user speaks from the browser.
let userLang = navigator.language;
//very basic language based differentiation. 
// "de", "de-AT", "de-BE", "de-CH", "de-DE", "de-IT", "de-LI", "de-LU" are the possible returns for german speakers. 
if(userLang == "de-DE" || "de" || "de-AT" || "de-Be" || "de-CH" || "de-IT" || "de-LI" || "de-LU"){
    userLang = "german";
} else {
    userLang = "english";
}
let pokemonList = [];
let bisasam = {
    nameEng: "Bulbasaur",
    nameGer: "Bisasam",
    height: 0.7,
    weight: 6.9,
    types: ["grass", "poison"],
};
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
pokemonList = [bisasam, bisaknosp, bisaflor];
let listOutput = "";

//iterating over all Pokemons in the array for displaying them on the website in the users language, together with mentioning which one has the highest height.
pokemonList.forEach(getPokemonString);
document.getElementById("output").innerHTML= `${listOutput}`;

// a function to get the desired text for each entry in the Pokedex.
function getPokemonString(pokemon){
    if(userLang === "german"){
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

