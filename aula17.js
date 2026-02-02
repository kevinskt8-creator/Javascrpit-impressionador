const usuario = {nome: 'Carlos', idade: 29, time: 'botafogo'};

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindas4 = 'Bem vindo, torcedor Santista!';
const mensagemDeBoasVindas5 = 'Bem vindo, torcedor Náutico!';
const mensagemDeBoasVindas6 = 'Bem vindo, torcedor Atlético mineiro!';
const mensagemDeBoasVindas7 = 'Bem vindo, torcedor Cruzeiro';
const mensagemDeBoasVindas8 = 'Bem vindo, torcedor Corinthians!';
const mensagemDeBoasVindasGeral = 'Bem vindo , amante do esporte!'


switch (usuario.time) {
    case 'Fluminense':
        console.log(mensagemDeBoasVindas1);
    break;
    case 'Flamengo':
         console.log(mensagemDeBoasVindas2);
    break;
    case 'Vasco':
        console.log(mensagemDeBoasVindas3);
    break;
    case 'Santista':
        console.log(mensagemDeBoasVindas4);
    break;
    case 'Náutico':
        console.log(mensagemDeBoasVindas5);
    break;
    case 'AtléticoMG':
        console.log(mensagemDeBoasVindas6);
    break;
    case 'Cruzeiro':
        console.log(mensagemDeBoasVindas7);
    break;
     case 'Corinthians':
        console.log(mensagemDeBoasVindas8);
    break;
  
    default:
        console.log(mensagemDeBoasVindasGeral);
}


if (usuario.time === 'Fluminense') {
console.log(mensagemDeBoasVindas1);
}
if (usuario.time === 'Flamengo') {
console.log(mensagemDeBoasVindas2);
}

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);