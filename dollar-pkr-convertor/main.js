let dollar = document.querySelector('#dollar');
let pkr = document.querySelector('#pkr');
let btn = document.querySelector('#btn');
let dollarClass = document.querySelector('.dollar');

let rupees = document.querySelector('#rupees');
let dlr = document.querySelector('#dlr');
let btnbtn = document.querySelector('#btnbtn');
let pkrClass = document.querySelector('.pkr');


// dollar to pkr
btn.addEventListener('click', ()=>{
    let valueDollar = dollar.value * 277;
    console.log(valueDollar);
    pkr.value = valueDollar;

    let newEl = document.createElement('p');
    newEl.style.marginTop = '10px';
    newEl.style.color = 'green';
    console.log(newEl);
    newEl.innerText = `${dollar.value} Dollar is equal to ${pkr.value} PKR.`;
    dollarClass.append(newEl)
});


// pkr to dollar
btnbtn.addEventListener('click', ()=>{
    let pRate = 277;
    let conversion = rupees.value / pRate;
    console.log(conversion);
    dlr.value = conversion;

    let newPkr = document.createElement('p');
    newPkr.style.marginTop = '10px';
    newPkr.style.color = 'green';
    console.log(newPkr);
    newPkr.innerText = `${rupees.value} PKR is equal to ${dlr.value} USD.`;
    pkrClass.append(newPkr);

});