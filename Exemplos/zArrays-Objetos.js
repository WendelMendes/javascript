// let array = ['strings', 1, true, ['arrays1'], numbers]
/* pode guardar vários tipos de dados, seu idice começa com 0
*/
let arrayExemplo = ['a','b','c'];

//push - adiciona elemento ao final
arrayExemplo.push('d');
console.log(arrayExemplo);

//pop - remove ultimo elemento
arrayExemplo.pop();
console.log(arrayExemplo);

//unshift - adiciona um novo primeiro elemento na lista
arrayExemplo.unshift('-a');
console.log(arrayExemplo);

//shift - remove primeiro elemento
arrayExemplo.shift();
console.log(arrayExemplo);

//includes - retorna se existe o elemento
arrayExemplo.includes('k');
console.log(arrayExemplo);
//reverse - reverte ordem dos elementos
arrayExemplo.reverse();
console.log(arrayExemplo);

// forEach
arrayExemplo.forEach(function(item, index){console.log(item, index)});

console.log(arrayExemplo.indexOf(true));

/*--------------------------------------------------------------------*/
//Dicionario - Tipo chave:valor
/*pode ter objetos dentro de objeto ou array*/
let objectExemplo = {nome: 'Patolino', especie: 'pato'};
console.log(objectExemplo)
console.log(Object.values(objectExemplo))
console.log(Object.keys(objectExemplo))
