let myH1 = document.querySelector('#myH1');
let userName = document.querySelector('#username');
let btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    myH1.innerText = `${myH1.innerText} ${userName.value}`;
});