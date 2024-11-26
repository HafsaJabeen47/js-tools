let label = document.querySelector('#label');
let decreaseBtn = document.querySelector('#decreaseBtn');
let increaseBtn = document.querySelector('#increaseBtn');
let resetBtn = document.querySelector('#resetBtn');

let count = '';

increaseBtn.addEventListener('click', ()=>{
    count++;
    label.textContent = count;
});
decreaseBtn.addEventListener('click', ()=>{
    count--;
    label.textContent = count;
});
resetBtn.addEventListener('click', ()=>{
    count = 0;
    label.textContent = count;
});
