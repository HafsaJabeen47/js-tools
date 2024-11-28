let input = document.querySelector('#input');
let btn = document.querySelector('#btn');


btn.addEventListener('click',()=>{

   for(let i = 1; i <= input.value; i++){
    if(i % 2 === 0){
        console.log(`${i} even number`);
    }else{
        console.log(i);
    }
   }
   
});