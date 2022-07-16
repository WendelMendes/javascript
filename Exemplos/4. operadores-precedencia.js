//Ordem de precedencia dos operadores:
/*      
1. ()          // os cálculos nos parenteses
2. **         // a pontência
3. * | / | % // a multiplicação, divisão e resto da divisão inteira
4. + | -    // as adições e subtrações
5. Operadores relacionais. ><>=...
6. Operadores lógicos. Ordem: ! && ||.
*/
    //Operadores
        //Operadores - Aritméticos
        var adição = ("+");
        var subtração = ("-");
        var multiplicação = ("*");
        var divisão = ("/");
        var pontência = ("**"); //exemplo: 5**2 =25
        var resto_divisão_inteira = ("%"); //exemplo: Quando se divide 5/2 se obtem 2.5, já na divisão inteira: se obtem 2 e resto da divisão inteira: 1.
    

        //Operadores - Atribuição
            //Auto-atribuições e suas representações: 
            var n = 3//n=3
            n = n+4 //n=7 (Representação)
            n+= 4  //n=7  (Representação)

            //Incremento-atribuição - Posibilita incrementar 1 valor:
            var x = 8  //x=8
            x = x+1    //x=9
            x++        //x=9 
            x = x-1    //x=7 
            x--        //x=7 
        
        //Operadores - Relacionais (Resultados são booleanos: True|False:
        var maior = (">");
        var menor = ("<");
        var maior_igual = (">=");
        var menor_igual = ("<=");
        var igual = ("==");
        var diferente = ("!=");

        //Operadores - Lógicos
        var negação   = ("!");   //NÃO
        var conjunção = ("&&");  //E
        var disjunção = ("||");  //OU

        //Operadores - Ternários
        var interrogação = ("?")//Equação ?
        var dois_pontos = (":")//SeVerdadeiro : SeFalso
            /*Equação ? SeVerdairoMeEscolha : SeFalsoMeEscolha*/
            var idade = 19;
            var resposta = idade > 18 ? "Maior" : "Menor";

// Formas de comparação:
    2 ==   2   //true  - "analisou se tem a mesma grandeza"
    2 ==  '2'  //true  - "analisou se tem a mesma grandeza"
    
    2 === '2'  //false - "analisou se são identicos"
    2 ===  2   //true  - "analisou se são identicos"
    /*optar por esse para resultado 100% prescisos*/