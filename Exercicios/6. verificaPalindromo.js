function verificaPalindromo(string){
    if(!string) return 'opcão invalida';

    return string.split('').reverse().join('') === string;
    /*separar-reverter-juntar-verificar*/
}
console.log(verificaPalindromo('gato'));
//-----------------------------------------------------------------
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i])
            return false;
    }

    return true;
}
console.log(verificaPalindromo('ana'))