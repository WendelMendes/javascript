const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(array, media){
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        const {nota, nome} = array[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return 'Aprovados: ' + aprovados;
}

console.log(alunosAprovados(alunos,5))