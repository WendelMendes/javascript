console.log("Olá mundo [F8]")
/*Tipos primitivos*/
    //Number() - números
    //parseInt() - números inteiros
    //parseFloat() - números flutuantes
    //String() - letras e caracteres
    //Boolean() - True | False
    var n1 = Number(console.log("Digite um número!"));
    var n2 = Number(console.log("Digite outro número!"));
    var n3 = n1 + n2

//Função para ver o tipo primitivo:
    console.log(typeof(n3))

//Contatenando com (+)
    console.log("A soma desses dois números é: " + n3 + " meu rapaz!") 
//Contatenando com Template strings (circunflexo, $ e {})
    console.log(`A soma ${n1} + ${n2} é ${n3}`)
//Quebra de linha
    console.log('1 \n2')
