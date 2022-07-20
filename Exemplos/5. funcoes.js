/* 
function nomeFunção(parametros){
    bloco-instruções;
} 
nomeFunção();
*/

//return - para função e retorna um valor

//criando função-declarativa
function função(){
    console.log('3 pó na mente');
}
//chamando função
função();

//criando função-curta (arrow-function)
var funcao = () =>{
    console.log('arrow-function');
}
funcao();
//----
const FUNÇÃO = () => 'Já tem um return embutido/e quando tem uma linha não prescisa de {}'
console.log(FUNÇÃO());
//----
let fff = a => a='Quando só tem um parametro'
console.log(fff());

