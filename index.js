var inputText = document.querySelector("#txt-input");
var translateText = document.querySelector("#txt-output");
var btnTransalate = document.querySelector("#btn-translate");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslation(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(){
    alert("Some error occured in the server! Try after some time.")
}

function clickHandler(){

    function result(translation){
        translateText.innerText = translation.contents.translated
    }

    var inputTxt = inputText.value;
    fetch(getTranslation(inputTxt)).then(response=>response.json()).then(json=>result(json)).catch(errorHandler);    
}

btnTransalate.addEventListener("click",clickHandler);