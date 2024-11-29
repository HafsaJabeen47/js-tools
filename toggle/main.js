let btn = document.querySelector('#btn');
let body = document.querySelector('body');

btn.addEventListener('click', ()=>{
    body.classList.toggle('theme');
    btn.textContent = 'light Theme';
});