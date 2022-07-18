var velocidade = 60
console.log(`A velocidade do seu carro é de ${velocidade}Km/h`);
    if(velocidade>=60){//SE
        console.log("MULTADO!!! CANALHA");
    } else if (velocidade >= 21 && velocidade <= 59.9){//SENÃO SE
        console.log('Mandando bem Irmão!');
    } else{//SENÃO
        console.log("Evite acidentes. Aumente a velocidade!");
    }

// Condição multipla
var placar = 3
switch (placar){
    case placar = 1:
        console.log('1 ganhou');
        break;
    case placar = 2:
        console.log('2 ganhou');
        break;
    default:
        console.log('3 ganhou');
        break;
}
