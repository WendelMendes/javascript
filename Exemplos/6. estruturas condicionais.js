var velocidade = 60
console.log(`A velocidade do seu carro é de ${velocidade}Km/h`);
    if(velocidade>=60){//SE
        console.log("MULTADO!!! CANALHA");
    } else if (velocidade >= 21 && velocidade <= 59.9){
        console.log('Mandando bem Irmão!');
    } else{//SENÃO SE
        console.log("Evite acidentes. Aumente a velocidade!");
    }

var jogador1 = 0;
var jogador2 = 0;
var placar;
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou')
        break
    default:
        console.log('empate');
}
