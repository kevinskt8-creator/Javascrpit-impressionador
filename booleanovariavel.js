//Variavél Boolean//

const valor0 = false;
const valor3 = true;

//Operadores Booleanos
// && , Nome: AND: Usamos essa operação quando desejamos que duas condições sejam simultaneamente verdadeiras //
// || , Nome: OR: Usamos essa operação quando desejmaos que pelo menos uma das condições seja verdadeira //
// ! , Nome: NOT(inversor): Esse é um operador aplicado a um valor booleano quando queremos o seu inverso //

const valor1 = true;
const valor2 = false;

const valor1EValor2 = valor1 && valor2;
const valor1OUValor1 = valor1 || valor2;
const inversoValor1 = !valor1;
const inversoValor2 = !valor2;

console.log(valor1EValor2);
console.log(valor1OUValor1);
console.log(inversoValor1);
console.log(inversoValor2);
