//getting the langauge the user speaks from the browser.
let userLang = navigator.language;
//very basic language based differentiation. 
if(userLang == "de-DE"){
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
document.getElementById("output").textContent= `${userLang}`;