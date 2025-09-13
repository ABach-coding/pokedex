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
//iterating over all Pokemons in the array and then displaying them on the website in the users language, together with mentioning which one has the highest height.
for(let i=0; i<pokemonList.length; i++){
    if(userLang === "german"){
        listOutput = listOutput + pokemonList[i].nameGer;
        //deprecated function, using it because the task wants it
        document.write(pokemonList[i].nameGer);
        if(pokemonList[i].height > 1.8){
            listOutput += ` dieses Pokemon ist größer als die meisten Menschen, mit ${pokemonList[i].height} Metern!`;
        }   
    } else {
        listOutput = listOutput + pokemonList[i].nameEng;
        //deprecated function, using it because the task wants it
        document.write(pokemonList[i].nameEng);
        if(pokemonList[i].height > 1.8){
            listOutput += ` this Pokemon is bigger then most humans, at ${pokemonList[i].height} meters!`;
        }   
    }
    listOutput +="<br>";
}
//this is potentially unsafe, as it isn't a safeHTML object
document.getElementById("output").innerHTML= `${listOutput}`;