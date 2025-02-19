let userText = document.querySelector('#usertext');
let upperCase = document.querySelector('#uppercase');
let lowerCase = document.querySelector('#lowercase');
let titleCase = document.querySelector('#titlecase');
let sentenceCase = document.querySelector('#sentencecase');
let result = document.querySelector('#result');

upperCase.addEventListener('click', ()=>{
    userText.value = userText.value.toUpperCase();
});

lowerCase.addEventListener('click', ()=>{
    userText.value = userText.value.toLowerCase();
});


titleCase.addEventListener('click', ()=>{

    let words = userText.value.split(' ');
    console.log(words);

    let titleCaseWord = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    let titleCaseSentence = titleCaseWord.join(' ');
    userText.value = titleCaseSentence;

});





