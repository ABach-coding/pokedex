// An IIFE for all User preferences we know and care about. Currently only his language, but cookie-Settings, different designs and more is possible!
let userPreferences = (function() {
    //getting the langauge the user speaks from the browser.
    let userLang = navigator.language;
    //very basic language based differentiation. 
    // "de", "de-AT", "de-BE", "de-CH", "de-DE", "de-IT", "de-LI", "de-LU" are the possible returns for german speakers. 
    if(userLang == "de-DE" || "de" || "de-AT" || "de-Be" || "de-CH" || "de-IT" || "de-LI" || "de-LU"){
        userLang = "de";
    } else {
        userLang = "en";
    }
    return {
        getLanguage: userLang
    };
})();
let pokemonRepository = (function() {
    pokemonList = [];
    
    /******************************************************************************************
    *** This would work with node.js. But because node.js is teached at a later stage and from what I read
    *** a bit more complicated to set up and actually get running, I won't do it for this project in
    *** this stage. Maybe if I actually deploy it on a server...
    ********************************************************************************************

    function loadListDemo(){
        return fetch("pokemonData.json").then(function(response){
            return response.json();
        }).then(function(json){
            console.log(json);
        }).catch(function(e){
            console.log(e);
        })
    }
    loadList();
    *************************************************************************************************/

    // made with cronjob.js, but only keeping names and id, as workaround copied directly into this file, because loading file doesn't work yet
    let pokemonNames = JSON.parse('{"en":[{"id":1,"name":"Bulbasaur"},{"id":2,"name":"Ivysaur"},{"id":3,"name":"Venusaur"},{"id":4,"name":"Charmander"},{"id":5,"name":"Charmeleon"},{"id":6,"name":"Charizard"},{"id":7,"name":"Squirtle"},{"id":8,"name":"Wartortle"},{"id":9,"name":"Blastoise"},{"id":10,"name":"Caterpie"},{"id":11,"name":"Metapod"},{"id":12,"name":"Butterfree"},{"id":13,"name":"Weedle"},{"id":14,"name":"Kakuna"},{"id":15,"name":"Beedrill"},{"id":16,"name":"Pidgey"},{"id":17,"name":"Pidgeotto"},{"id":18,"name":"Pidgeot"},{"id":19,"name":"Rattata"},{"id":20,"name":"Raticate"},{"id":21,"name":"Spearow"},{"id":22,"name":"Fearow"},{"id":23,"name":"Ekans"},{"id":24,"name":"Arbok"},{"id":25,"name":"Pikachu"},{"id":26,"name":"Raichu"},{"id":27,"name":"Sandshrew"},{"id":28,"name":"Sandslash"},{"id":29,"name":"Nidoran♀"},{"id":30,"name":"Nidorina"},{"id":31,"name":"Nidoqueen"},{"id":32,"name":"Nidoran♂"},{"id":33,"name":"Nidorino"},{"id":34,"name":"Nidoking"},{"id":35,"name":"Clefairy"},{"id":36,"name":"Clefable"},{"id":37,"name":"Vulpix"},{"id":38,"name":"Ninetales"},{"id":39,"name":"Jigglypuff"},{"id":40,"name":"Wigglytuff"},{"id":41,"name":"Zubat"},{"id":42,"name":"Golbat"},{"id":43,"name":"Oddish"},{"id":44,"name":"Gloom"},{"id":45,"name":"Vileplume"},{"id":46,"name":"Paras"},{"id":47,"name":"Parasect"},{"id":48,"name":"Venonat"},{"id":49,"name":"Venomoth"},{"id":50,"name":"Diglett"},{"id":51,"name":"Dugtrio"},{"id":52,"name":"Meowth"},{"id":53,"name":"Persian"},{"id":54,"name":"Psyduck"},{"id":55,"name":"Golduck"},{"id":56,"name":"Mankey"},{"id":57,"name":"Primeape"},{"id":58,"name":"Growlithe"},{"id":59,"name":"Arcanine"},{"id":60,"name":"Poliwag"},{"id":61,"name":"Poliwhirl"},{"id":62,"name":"Poliwrath"},{"id":63,"name":"Abra"},{"id":64,"name":"Kadabra"},{"id":65,"name":"Alakazam"},{"id":66,"name":"Machop"},{"id":67,"name":"Machoke"},{"id":68,"name":"Machamp"},{"id":69,"name":"Bellsprout"},{"id":70,"name":"Weepinbell"},{"id":71,"name":"Victreebel"},{"id":72,"name":"Tentacool"},{"id":73,"name":"Tentacruel"},{"id":74,"name":"Geodude"},{"id":75,"name":"Graveler"},{"id":76,"name":"Golem"},{"id":77,"name":"Ponyta"},{"id":78,"name":"Rapidash"},{"id":79,"name":"Slowpoke"},{"id":80,"name":"Slowbro"},{"id":81,"name":"Magnemite"},{"id":82,"name":"Magneton"},{"id":83,"name":"Farfetch’d"},{"id":84,"name":"Doduo"},{"id":85,"name":"Dodrio"},{"id":86,"name":"Seel"},{"id":87,"name":"Dewgong"},{"id":88,"name":"Grimer"},{"id":89,"name":"Muk"},{"id":90,"name":"Shellder"},{"id":91,"name":"Cloyster"},{"id":92,"name":"Gastly"},{"id":93,"name":"Haunter"},{"id":94,"name":"Gengar"},{"id":95,"name":"Onix"},{"id":96,"name":"Drowzee"},{"id":97,"name":"Hypno"},{"id":98,"name":"Krabby"},{"id":99,"name":"Kingler"},{"id":100,"name":"Voltorb"},{"id":101,"name":"Electrode"},{"id":102,"name":"Exeggcute"},{"id":103,"name":"Exeggutor"},{"id":104,"name":"Cubone"},{"id":105,"name":"Marowak"},{"id":106,"name":"Hitmonlee"},{"id":107,"name":"Hitmonchan"},{"id":108,"name":"Lickitung"},{"id":109,"name":"Koffing"},{"id":110,"name":"Weezing"},{"id":111,"name":"Rhyhorn"},{"id":112,"name":"Rhydon"},{"id":113,"name":"Chansey"},{"id":114,"name":"Tangela"},{"id":115,"name":"Kangaskhan"},{"id":116,"name":"Horsea"},{"id":117,"name":"Seadra"},{"id":118,"name":"Goldeen"},{"id":119,"name":"Seaking"},{"id":120,"name":"Staryu"},{"id":121,"name":"Starmie"},{"id":122,"name":"Mr. Mime"},{"id":123,"name":"Scyther"},{"id":124,"name":"Jynx"},{"id":125,"name":"Electabuzz"},{"id":126,"name":"Magmar"},{"id":127,"name":"Pinsir"},{"id":128,"name":"Tauros"},{"id":129,"name":"Magikarp"},{"id":130,"name":"Gyarados"},{"id":131,"name":"Lapras"},{"id":132,"name":"Ditto"},{"id":133,"name":"Eevee"},{"id":134,"name":"Vaporeon"},{"id":135,"name":"Jolteon"},{"id":136,"name":"Flareon"},{"id":137,"name":"Porygon"},{"id":138,"name":"Omanyte"},{"id":139,"name":"Omastar"},{"id":140,"name":"Kabuto"},{"id":141,"name":"Kabutops"},{"id":142,"name":"Aerodactyl"},{"id":143,"name":"Snorlax"},{"id":144,"name":"Articuno"},{"id":145,"name":"Zapdos"},{"id":146,"name":"Moltres"},{"id":147,"name":"Dratini"},{"id":148,"name":"Dragonair"},{"id":149,"name":"Dragonite"},{"id":150,"name":"Mewtwo"}],"de":[{"id":1,"name":"Bisasam"},{"id":2,"name":"Bisaknosp"},{"id":3,"name":"Bisaflor"},{"id":4,"name":"Glumanda"},{"id":5,"name":"Glutexo"},{"id":6,"name":"Glurak"},{"id":7,"name":"Schiggy"},{"id":8,"name":"Schillok"},{"id":9,"name":"Turtok"},{"id":10,"name":"Raupy"},{"id":11,"name":"Safcon"},{"id":12,"name":"Smettbo"},{"id":13,"name":"Hornliu"},{"id":14,"name":"Kokuna"},{"id":15,"name":"Bibor"},{"id":16,"name":"Taubsi"},{"id":17,"name":"Tauboga"},{"id":18,"name":"Tauboss"},{"id":19,"name":"Rattfratz"},{"id":20,"name":"Rattikarl"},{"id":21,"name":"Habitak"},{"id":22,"name":"Ibitak"},{"id":23,"name":"Rettan"},{"id":24,"name":"Arbok"},{"id":25,"name":"Pikachu"},{"id":26,"name":"Raichu"},{"id":27,"name":"Sandan"},{"id":28,"name":"Sandamer"},{"id":29,"name":"Nidoran♀"},{"id":30,"name":"Nidorina"},{"id":31,"name":"Nidoqueen"},{"id":32,"name":"Nidoran♂"},{"id":33,"name":"Nidorino"},{"id":34,"name":"Nidoking"},{"id":35,"name":"Piepi"},{"id":36,"name":"Pixi"},{"id":37,"name":"Vulpix"},{"id":38,"name":"Vulnona"},{"id":39,"name":"Pummeluff"},{"id":40,"name":"Knuddeluff"},{"id":41,"name":"Zubat"},{"id":42,"name":"Golbat"},{"id":43,"name":"Myrapla"},{"id":44,"name":"Duflor"},{"id":45,"name":"Giflor"},{"id":46,"name":"Paras"},{"id":47,"name":"Parasek"},{"id":48,"name":"Bluzuk"},{"id":49,"name":"Omot"},{"id":50,"name":"Digda"},{"id":51,"name":"Digdri"},{"id":52,"name":"Mauzi"},{"id":53,"name":"Snobilikat"},{"id":54,"name":"Enton"},{"id":55,"name":"Entoron"},{"id":56,"name":"Menki"},{"id":57,"name":"Rasaff"},{"id":58,"name":"Fukano"},{"id":59,"name":"Arkani"},{"id":60,"name":"Quapsel"},{"id":61,"name":"Quaputzi"},{"id":62,"name":"Quappo"},{"id":63,"name":"Abra"},{"id":64,"name":"Kadabra"},{"id":65,"name":"Simsala"},{"id":66,"name":"Machollo"},{"id":67,"name":"Maschock"},{"id":68,"name":"Machomei"},{"id":69,"name":"Knofensa"},{"id":70,"name":"Ultrigaria"},{"id":71,"name":"Sarzenia"},{"id":72,"name":"Tentacha"},{"id":73,"name":"Tentoxa"},{"id":74,"name":"Kleinstein"},{"id":75,"name":"Georok"},{"id":76,"name":"Geowaz"},{"id":77,"name":"Ponita"},{"id":78,"name":"Gallopa"},{"id":79,"name":"Flegmon"},{"id":80,"name":"Lahmus"},{"id":81,"name":"Magnetilo"},{"id":82,"name":"Magneton"},{"id":83,"name":"Porenta"},{"id":84,"name":"Dodu"},{"id":85,"name":"Dodri"},{"id":86,"name":"Jurob"},{"id":87,"name":"Jugong"},{"id":88,"name":"Sleima"},{"id":89,"name":"Sleimok"},{"id":90,"name":"Muschas"},{"id":91,"name":"Austos"},{"id":92,"name":"Nebulak"},{"id":93,"name":"Alpollo"},{"id":94,"name":"Gengar"},{"id":95,"name":"Onix"},{"id":96,"name":"Traumato"},{"id":97,"name":"Hypno"},{"id":98,"name":"Krabby"},{"id":99,"name":"Kingler"},{"id":100,"name":"Voltobal"},{"id":101,"name":"Lektrobal"},{"id":102,"name":"Owei"},{"id":103,"name":"Kokowei"},{"id":104,"name":"Tragosso"},{"id":105,"name":"Knogga"},{"id":106,"name":"Kicklee"},{"id":107,"name":"Nockchan"},{"id":108,"name":"Schlurp"},{"id":109,"name":"Smogon"},{"id":110,"name":"Smogmog"},{"id":111,"name":"Rihorn"},{"id":112,"name":"Rizeros"},{"id":113,"name":"Chaneira"},{"id":114,"name":"Tangela"},{"id":115,"name":"Kangama"},{"id":116,"name":"Seeper"},{"id":117,"name":"Seemon"},{"id":118,"name":"Goldini"},{"id":119,"name":"Golking"},{"id":120,"name":"Sterndu"},{"id":121,"name":"Starmie"},{"id":122,"name":"Pantimos"},{"id":123,"name":"Sichlor"},{"id":124,"name":"Rossana"},{"id":125,"name":"Elektek"},{"id":126,"name":"Magmar"},{"id":127,"name":"Pinsir"},{"id":128,"name":"Tauros"},{"id":129,"name":"Karpador"},{"id":130,"name":"Garados"},{"id":131,"name":"Lapras"},{"id":132,"name":"Ditto"},{"id":133,"name":"Evoli"},{"id":134,"name":"Aquana"},{"id":135,"name":"Blitza"},{"id":136,"name":"Flamara"},{"id":137,"name":"Porygon"},{"id":138,"name":"Amonitas"},{"id":139,"name":"Amoroso"},{"id":140,"name":"Kabuto"},{"id":141,"name":"Kabutops"},{"id":142,"name":"Aerodactyl"},{"id":143,"name":"Relaxo"},{"id":144,"name":"Arktos"},{"id":145,"name":"Zapdos"},{"id":146,"name":"Lavados"},{"id":147,"name":"Dratini"},{"id":148,"name":"Dragonir"},{"id":149,"name":"Dragoran"},{"id":150,"name":"Mewtu"}]}');
    
    function loadList(){
        if("de" === userPreferences.getLanguage){
            pokemonNames.de.forEach(function(pokemon){
                add({"name": pokemon.name,
                    "detailsURL": "https://pokeapi.co/api/v2/pokemon/" + pokemon.id
                });
            });
        } else {
           pokemonNames.en.forEach(function(pokemon){
                add({"name": pokemon.name,
                    "detailsURL": "https://pokeapi.co/api/v2/pokemon/" + pokemon.id
                });
            });
        }
    }

    function add(pokemon){
            pokemonList.push(pokemon);
    }


    function search(name){
        return pokemonList.filter(function(pokemon){
            return pokemon.name.includes(name); //we can search for parts of the name!
        });
    }
    // a function to get the desired text for each entry in the Pokedex.
    function addPokemonToDOMList(pokemon){
        let mainList = document.querySelector(".pokemon-list"); 
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;   
        button.classList.add("pokemon-name");
        addPokemonListener(button, pokemon);
        listItem.appendChild(button);
        mainList.appendChild(listItem);
    }
    
    function getDetails(pokemon){
        fetch(pokemon.detailsURL).then(function(response){
            return response.json();
        }).then(function(details){
            pokemon.height = details.height;
            pokemon.weight = details.weight;
            pokemon.imgURL = details.sprites.front_default;
            pokemon.cry = details.cries.legacy;
        })
    }

    function showDetails(pokemon){
        getDetails(pokemon);
        console.log(pokemon);
    }

    function addPokemonListener(button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon);
        });
    }

    function resetDOMList(){
        let mainlist = document.querySelector(".pokemon-list");
        while(mainlist.hasChildNodes()){
            mainlist.removeChild(mainlist.firstChild);
        }
    }

    return {
        loadList: loadList,

        getDetails: getDetails, 

        getAll: pokemonList,

        add: add,

        search: search,

        addPokemonToDOMList: addPokemonToDOMList,

        resetDOMList: resetDOMList
    }

    
})();

pokemonRepository.loadList();
pokemonList = pokemonRepository.getAll;

//iterating over all Pokemons in the array for displaying them on the website in the users language.
//Directly manipulates the websites DOM!
pokemonList.forEach(pokemonRepository.addPokemonToDOMList);

let search = function(){
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

    //searches the PokemonList for the Pokemons that hit the required searchValue
    //changes the List to only display the Pokemons valied with the search
    searchField.addEventListener("input", function(){
        let resultList = pokemonRepository.search(searchField.value);
        pokemonRepository.resetDOMList();
        resultList.forEach(pokemonRepository.addPokemonToDOMList);
        if(resultList.length == 0){
            if(userPreferences.getLanguage == "de") {
                setHelpText(searchField, "Die Suche beachtet Groß- und Kleinschreibung. Überprüfe auch, ob keine Rechtschreibfehler vorhanden sind!")
            } else {
                setHelpText(searchField, "The search is case-sensitive. Also check for spelling mistakes!");
            }
        } else {
            setHelpText(searchField, "");
        }
    })

    //add helpful text, if the search returns empty
    function setHelpText(input, message){
        let container = input.parentElement;

        //check and remove old help message
        let oldText = container.querySelector('.help-text');
        if(oldText) {
            container.removeChild(oldText);
        }

        //add the help message, if it isn't empty.
        if(message){
            let newHelpText = document.createElement("div");
            newHelpText.classList.add("help-text");
            newHelpText.innerText = message;
            container.appendChild(newHelpText);
        }
    }

}()



