var variavel = ("Escopo global e local, Poder ter valor alterado, Pode ser undefined")
let lete = ("Escopo local de bloco, Pode ter valor alterado, Pode ser undefined")
const constante = ("Escopo local de bloco, Valor fixo e inicial")

var nome = 'Wendel'
console.log(`Olá, ${nome}`)
console.log(`lê quantos caracteres tem: ${nome.length}.`)
console.log(`retorna tudo em "MAIUSCULAS": ${nome.toUpperCase()}.`)
console.log(`retorna tudo em minúsculas: ${nome.toLowerCase()}.`)

//Tratando valores:
var n1 = 1545.5
n1.toFixed(2) 
//Resultado: '1545.50' (ficar com duas casas decimais)
n1.toFixed(2).replace('.' , ',') 
//Resultado: '1545,50' (trocar um elemento por outro)
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 
//Resultado: 'R$ 1,545.50' (valor monetario diretamente ajustado usando funcionalidades da linguagem)
console.log(`${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

//Pegando hora ou data:
var agora = new Date()
var hora = agora.getHours()
var diaSem = agora.getDay()
    console.log(diaSem)
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/