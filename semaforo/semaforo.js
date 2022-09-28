const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();

}
const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    //ternario precisa de atenção ao contador,pos-processo, adicionar antes do processo para funcionar. as chaves neste caso é opcional.
}
const changeColor = () => {
    const colors = ['red', 'green', 'yellow']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = () => {
    clearInterval(intervalId)
}
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}
buttons.addEventListener('click', trafficLight);