let userText = document.querySelector('#usertext');
let upperCase = document.querySelector('#uppercase');
let lowerCase = document.querySelector('#lowercase');
let titleCase = document.querySelector('#titlecase');
let sentenceCase = document.querySelector('#sentencecase');
let alternateCase = document.querySelector('#alternatecase');
let inverseCase = document.querySelector('#inversecase');
let clear = document.querySelector('#clear');
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

    userText.value = userText.value.replace(/\b\w/g, char => char.toUpperCase());



    // let words = userText.value.split(' ');
    // console.log(words);

    // let titleCaseWord = words.map(word => {
    //     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // });

    // let titleCaseSentence = titleCaseWord.join(' ');
    // userText.value = titleCaseSentence;

});


// SENTENCECASE
sentenceCase.addEventListener('click', ()=>{


    userText.value = userText.value.toLowerCase().replace(/(^|[.!?]\s*)\w/g, char => char.toUpperCase());

    // let lowerText = userText.value.toLowerCase();

    // let firstLetter = lowerText.charAt(0).toUpperCase() + lowerText.slice(1);

    // userText.value = firstLetter;

});


// CLEAR
clear.addEventListener('click', ()=>{
    userText.value = '';
});

// GPT code
// ALTERNATE CASE
alternateCase.addEventListener('click', ()=>{
    userText.value = userText.value.split('').map((char, index) => {
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
});


// INVERSE CASE
inverseCase.addEventListener('click', ()=>{
    userText.value = userText.value.split('').map(char => {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join('');
});







