

let table = document.querySelector('#table');
let getNum = document.querySelector('#getNum'); //10
let limit = document.querySelector('#limit'); //5
let btn = document.querySelector('#btn');


btn.addEventListener('click',()=>{
    for(let i = 1; i <= limit.value; i++){
        let output = `${getNum.value} x ${i} = ${getNum.value * i}`;
        table.innerHTML += `${output} </br>`;
        console.log(output);
    }
});




