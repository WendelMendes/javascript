let array = ['valor1','valor1','valor2','valor3','valor4']
let object = {propriedade1: 'valor1', propriedade2: 'valor2'}

/* for (expressão-inicial; condição; incremento){
    declaração
} */

// for - executa uma instrução até que ela se torne falsa
for (let indice = 0; indice<array.length; indice++){
    console.log(indice);
}
/*--------------------------*/

/* for (indice in/of objeto/array){
    declaração
} */
// for/in - executa repetição de uma propriedade das propriedades
for ( i in object){
    console.log(i);
}

// for/of - executa repetição dos valores
for ( i of array){
    console.log(i);
}
/*------------------------------------------------------*/
//while - enquando
var contagem = 100;
while (contagem < 103){
    contagem++
    console.log(contagem)
}

//do while - faça enquanto (vai rodar pelo menos uma vez)
do {
    contagem++;
    console.log(contagem);
} while (contagem<106);