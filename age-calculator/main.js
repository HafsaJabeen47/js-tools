let userAge = document.querySelector('#userage');
let div = document.querySelector('#div');
let calBtn = document.querySelector('#cal-btn');
let resetBtn = document.querySelector('#reset-btn');



calBtn.addEventListener('click', ()=>{
    let months = userAge.value * 12;
    div.style.visibility = 'visible';
    resetBtn.style.visibility = 'visible';

    div.innerText = `Age in Months: ${months}`;
});


resetBtn.addEventListener('click', ()=>{
    div.style.visibility = 'hidden';
    resetBtn.style.visibility = 'hidden';
    userAge.value = '1';
    div.innerText = '';
});