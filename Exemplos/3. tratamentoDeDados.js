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