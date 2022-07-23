let arrayExemplo = ['a','b','c'];
    //pode guardar vários tipos de dados (arrays, objetos, booleanos...)
    //cada elemento tem seu indice e começa apartir de [0]

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
let objectExemplo = {nome: 'Patolino', especie: 'pato'};
console.log(objectExemplo)
console.log(Object.values(objectExemplo))
console.log(Object.keys(objectExemplo))
    //Dicionario - Tipo {chave:valor}
    //pode guardar vários tipos de dados (arrays, objetos, booleanos...)
