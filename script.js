const contador = document.querySelector('div#num');
const startBtn = document.querySelector("#start");
const continueBtn = document.querySelector("#continue");

contador.addEventListener("click", changeColor);

//Incrementa 1 no contador
const increase = () => {
    let num = Number(contador.textContent);
    num++;
    contador.textContent = num;
};
//Decrementa 1 no contador
const decrease = () => {
    let num = Number(contador.textContent);
    num--;
    contador.textContent = num;
};
//Reseta o contador
const reset = () => {
    contador.innerText = 0;
    clearInterval(myInterval);
    startBtn.disabled = false;
    continueBtn.disabled = true;

};
//Inicia um cronometro no contador
const start = () => {
    myInterval = setInterval(increase, 1000);
    startBtn.disabled = true;
};
//Para o cronômetro
const stop = () => {
    clearInterval(myInterval);
    continueBtn.disabled = false;
};
//Continua o cronômetro
const continuar = () => {
    start();
    continueBtn.disabled = true;
};
//Muda cor do elemento onde é chamada.
function changeColor() {
    this.style.color = generateColor();
}

//Gera um código de cor hexadecimal aleatório.
function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}
