function calculateSquareroot(radicand) {
    console.log('O valor do meu radicando é:' , radicand);
    return radicand ** (1/2);
}

function calculatePythagoras(side1 , side2) {
    console.log('Os tamanhos dos catetos do meu triangualo retângulo são: ', side1 ,side2);

}

console.log(`A hipotenusa de um triangulo de lados 3 e 4 é: ${calculatePythagoras(3, 4)}`);

const fisrtSideRef = document.getElementById('side-1');
const secondSideRef = document.getElementById('side-2');
const calculateButton = document.getElementById('answer');

function onCalculateButtonClick() {
    const fisrtSide = fisrtSideRef.value;
    const secondSide = secondSideRef.value;
    console.log('funcition executed');
        answerDiv.classList.remove('hidden-element');
        answerDiv.innerHTML = `A hipotenusa de um triângulo de lados ${fisrtSide} e ${secondSide} é: ${calculatePythagoras(fisrtSide,secondSide);
        .toFixed(3)
        .replace(/[.,]000$/, '')}
        <div class="left-point"></div></div>`;
}

calculateButton.addEventListener('click',onCalculateButtonClick);