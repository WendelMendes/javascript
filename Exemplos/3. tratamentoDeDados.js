//Tratando variavéis
var variavel = ("Escopo global/local, Poder redeclarar, Pode ser undefined")
let lete = ("Escopo de bloco, Poder reatribuir, Pode ser undefined")
const CONSTANTE_ = ("Escopo de bloco, Valor fixo e inicial")
    //Escopo de bloco: variavel só vale dentro do bloco
//Empty - valor declarado porém ele é vazio (ex: '', 0, '',  )
    var abacaxi = ''
//undefined - valor não declarado ('valor declarado é indefinido)
    var abacaxi
//null - valor não existe 'nulo' ('valor declarado é insconsiste')
    var abacaxi = null

//Tratando strings
var nome = 'Wendel';
console.log(`Olá, ${nome}`);
console.log(`lê quantos caracteres tem: ${nome.length}.`);
console.log(`retorna tudo em "MAIUSCULAS": ${nome.toUpperCase()}.`);
console.log(`retorna tudo em minúsculas: ${nome.toLowerCase()}.`);
console.log('Separa as letras: ' + nome.split(''));
console.log('Troca caracteres: ' + nome.replace('W','WWW'));

//Tratando valores:
var n1 = 1545.5;
n1.toFixed(2) ;
//Resultado: '1545.50' (ficar com duas casas decimais)
n1.toFixed(2).replace('.' , ',');
//Resultado: '1545,50' (trocar um elemento por outro)
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
//Resultado: 'R$ 1,545.50' (valor monetario diretamente ajustado usando funcionalidades da linguagem)
console.log(`${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

//Pegando hora ou data:
var agora = new Date();
var hora = agora.getHours();
var diaSem = agora.getDay();
    console.log(diaSem);
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/
