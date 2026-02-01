const primeiraVariavelDoCodigo = "texto inicial";

//Pode se ter duas variáveis com o mesmo nome, que não estejam no mesmo escobo!//

function printToConsole() {
  const primeiraVariavelDoCodigo = "segundo texto";
  function secondFunction() {
    const primeiraVariavelDoCodigo = "terceiro texto";
    console.log(primeiraVariavelDoCodigo);
  }
  console.log(primeiraVariavelDoCodigo);
  secondFunction();
}

printToConsole();
