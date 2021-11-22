
var textInput = document.querySelector("#txt-input")
var translateBtn = document.querySelector("#translate-btn")
var outPut = document.querySelector("#Output") 

// console.log(outPut);



var serverURL = "https://api.funtranslations.com/translate/yoda.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}


function clickHandler() {

    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            outPut.innerText = translatedText;
        })


}

translateBtn.addEventListener("click", clickHandler)