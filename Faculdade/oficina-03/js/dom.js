// dom manipula o seu documento 
// classe - id - tag 


// pegando pelo id
const getId1 = document.getElementById('casa1');
console.log(getId1.textContent);
getId1.textContent = 'Usando o DOM';

const getId2 = document.querySelector('#casa2');
console.log(getId2);


//pegar pela class
const getClass1 = document.getElementsByClassName('teste1');
console.log(getClass1);

const getClass2 = document.querySelectorAll('.teste2');
console.log(getClass2);

//pegar pela tag
const getTag1 = document.getElementsByTagName('div');
console.log(getTag1);

const getTag2 = document.querySelectorAll('div');
console.log(getTag2);