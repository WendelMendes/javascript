// chamando o console
console.log('Olá eu sou o console');
console.log('Estou iniciando em JavaScript');

//Variáveis não têm tipo  
// para declarar : palavra reserva (var let const) identificador = valor;

// Modo antigo == POR FAVOR NÃO USAR
// var userName = 'Israel Marques;'
// var userName = 'Eu mesmo;'
// console.log(userName);''

console.log('------------------------------------------');

let userName = 'Israel Marques';
let userEmail = 'profisrael.copi@fiap.com.br';
let userAge = 51;
let userLogin = true;
console.log(userName);
console.log(userEmail);
console.log(userAge);
console.log(userLogin);
console.log('------------------------------------------');

// Verificando Tipagem
console.log(typeof userName, userName);
console.log(typeof userEmail, userEmail);
console.log(typeof(userAge), userAge);
console.log(typeof(userLogin), userLogin);

userLogin = 56789;
console.log(typeof(userLogin), userLogin);

userLogin= true;
console.log(typeof(userLogin), userLogin);
console.log('------------------------------------------');

// Const = Constantes == NUNCA MUDA
// const DATANASCIMENTO = '02/12/1970';
// console.log(dataNascimento);
// dataNascimento = 'aaaaa'

// Concatenar = Juntar == NÃO FAZER ISSO NO JS
console.log('Nome do Usuário: ' + userName + 'idade do usuário ' + userAge);

// Template String = Iniciar e terminar a template com a CRASE `Escrever o que quiser ${variável ou função}`
console.log(`Nome do usuário: ${userName} idade ${userAge}
dsdsadasda
asdasdasd
sddsdsad`);
console.log('------------------------------------------');

let firstNumber  = 10;
let secondNumber = '10';

// operadores relacionais
// > < >= <=  === !==
console.log(`${firstNumber} === ${secondNumber} = ${firstNumber === secondNumber}`);

// Operados aritméticos ** faz a potência
firstNumber = 2;
secondNumber = 8;
console.log(`${firstNumber} ** ${secondNumber} =  ${firstNumber ** secondNumber}`);

// Math() - String() - Date()

// declarando o array
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);
pessoas[3]='Eu mesmo';
console.log(pessoas);

//inserir no fim array 
pessoas.push('Eu novamente');
console.log(pessoas);

// retirar o último contéudo
let retirado = pessoas.pop();
console.log(pessoas);
console.log(retirado);

// inserir no início do array
pessoas.unshift('Eu Mesmo');
console.log(pessoas);

//retirar o primeiro valor
retirado = pessoas.shift();
console.log(pessoas);
console.log(retirado);


//manipular informação em qualquer parte do Array
//excluir dois elementos do arraya pessoas.
pessoas.splice(1,2);
console.log(pessoas);

// inserir qualquer elemento em qualquer parte
pessoas.splice(1,0,'Tu','Ele','Eu Novamente','Vocês', 'Vocês novamente', 12345678, true);
console.log(pessoas);











