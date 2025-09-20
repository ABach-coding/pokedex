/*
This Script is supposed to be run as a cronjob to make all the costly API calls only once, then save the result for use later.
In this project it's ultimatively called by accessing the cronjob.html page, which is otherwise an empty page. 
It calls the pokemon API and fetches all the names and descriptions of the Pokemons in all the available languages.
*/ 
let pokemonNames = (function(){
    let pokemonListEN = [];
    let pokemonListDE = [];
    let apiURL = "https://pokeapi.co/api/v2/pokemon-species?limit=150"; //gives english name and url to fetch from
    fetch(apiURL).then(function(response) {
        let jsonObject=response.json();
        jsonObject.then(function (result) {
            result.results.forEach(getLanguageInfo);
        }).catch(function(error){
            console.log(error);
        })
    })

    function getLanguageInfo(apiURL){
        fetch(apiURL.url).then(function(response){
            return response.json();
        }).then(function(pokemonData){ 
            pokemonListEN.push({
                "id" : pokemonData.id, 
                "name" : findLanguageEntry(pokemonData.names, "en").name, 
                "genus": findLanguageEntry(pokemonData.genera, "en").genus, 
                "flavorText": findLanguageEntry(pokemonData.flavor_text_entries, "en").flavor_text
            });
            pokemonListDE.push({
                "id" : pokemonData.id,
                "name" : findLanguageEntry(pokemonData.names, "de").name, 
                "genus": findLanguageEntry(pokemonData.genera, "de").genus, 
                "flavorText": findLanguageEntry(pokemonData.flavor_text_entries, "de").flavor_text
            });
        }).catch(function(error){
            console.log(error);
        })
    }
    
    //returns the first Object in the searchArray, which has the language property
    function findLanguageEntry(searchArray, language){
        for(let i=0; i<searchArray.length; i++){
            if (searchArray[i].language.name === language)
                return searchArray[i];
        }
    }
    
    let finalPokemonList = {"en" : pokemonListEN, "de":pokemonListDE};

    return {
        pokemonList : finalPokemonList
    }
})();
/*
*************************************************************************************************
***
*** It works and does create a file successfully to download. Sadly because of not using node.js, 
*** I can't actually use the resulting file going further. So this part is currently on ice.
***
*************************************************************************************************
//timeout to make sure the data had time to be fetched and written into pokemonList, before the file is actually made, otherwise it ends as an empty list!
setTimeout(writeFile, 2000, pokemonNames.pokemonList);

function writeFile(data){
    const dataToWrite = JSON.stringify(data);
    const text = new Blob([dataToWrite], { type: 'application/json' });
    const url = URL.createObjectURL(text);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pokemonData.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}*/

