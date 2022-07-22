function patinhosDesaparecidos(pato) {
    if (pato !== 0 && pato !== 2 && pato !== 1){
        console.log(`${pato} patinhos foram passear ${pato-1} retornam!`);
    } else if (pato == 2){
        console.log(`${pato} patinhos foram passear ${pato-1} retorna!`);
    } else if (pato == 1){
        console.log(`${pato} patinho foi passear ${pato-1} retornam!`);
    } else {
        console.log(`${pato} patinho foi passear, ${pato} pato retornou!`);
    }
}
patinhosDesaparecidos(5)
----------------------------------------------------------------