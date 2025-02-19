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


// TITLECASE
titleCase.addEventListener('click', ()=>{

    let words = userText.value.split(' ');
    console.log(words);

    let titleCaseWord = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    let titleCaseSentence = titleCaseWord.join(' ');
    userText.value = titleCaseSentence;

});


// SENTENCECASE
sentenceCase.addEventListener('click', ()=>{

    let lowerText = userText.value.toLowerCase();

    let firstLetter = lowerText.charAt(0).toUpperCase() + lowerText.slice(1);

    userText.value = firstLetter;

});





