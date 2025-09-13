alert("Hello World");
//getting the langauge the user speaks from the browser.
let userLang = navigator.language;
//very basic language based differentiation. 
if(userLang == "de-DE"){
    favouriteFood = "germany";
} else if (userLang == "en"){
    favouriteFood = "british";
} else {
    favouriteFood = "american";
}
//document.write is deprecated and shouldn't be used. Only using it because the task explicitly mentions it!
document.write('Your favourite food is probably something from '+ favouriteFood + '! Or do you prefer something more exotic?');
//adding an alternative and not deprecated way to get the required task done. Still not using trustedHTML-Objects.
document.getElementById("output").textContent='Your favourite food is probably something from '+ favouriteFood + '! Or do you prefer something more exotic?';