function convertText() {
    let inputText = document.getElementById("textInput").value;
    let caseType = document.getElementById("caseType").value;
    let outputText = "";

    if (!inputText.trim()) {
        alert("Please enter some text to convert.");
        return;
    }

    if (caseType === "uppercase") {
        outputText = inputText.toUpperCase();
    } 
    else if (caseType === "lowercase") {
        outputText = inputText.toLowerCase();
    } 
    else if (caseType === "titlecase") {
        outputText = inputText.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()); 
    } 
    else if (caseType === "sentencecase") {
        outputText = inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
    }

    document.getElementById("outputText").value = outputText;
}





// modified code
let userText = document.querySelector('#usertext');
let upperCase = document.querySelector('#uppercase');
let lowerCase = document.querySelector('#lowercase');
let titleCase = document.querySelector('#titlecase');
let sentenceCase = document.querySelector('#sentencecase');
let result = document.querySelector('#result');

// UPPERCASE
upperCase.addEventListener('click', ()=>{
    userText.value = userText.value.toUpperCase();
});

// LOWERCASE
lowerCase.addEventListener('click', ()=>{
    userText.value = userText.value.toLowerCase();
});

// TITLECASE (Works on multiple lines)
titleCase.addEventListener('click', ()=>{
    userText.value = userText.value.replace(/\b\w/g, char => char.toUpperCase());
});

// SENTENCECASE (Works on multiple lines)
sentenceCase.addEventListener('click', ()=>{
    userText.value = userText.value.toLowerCase().replace(/(^|[.!?]\s*)\w/g, char => char.toUpperCase());
});
