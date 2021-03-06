let order = [];
let clickedOder = [];
let score = 0;

//0 == green
//1 == red
//2 == yellow
//3 == blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //Guarda um número aleatório a cada rodada
    order[order.length] = colorOrder; //atribui o indice do array com a cor que sairá na função de sorteio
    clickedOder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); //traz o número + 1
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa se os botões clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOder) {
        if(clickedOder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próxima rodada!`);
        nextLevel();
    }
}

//função para o click do usuário
let click = (color) => {
    clickedOder[clickedOder.length] == color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        elementColor(color).classList.remove('selected');
        checkOrder();
    }, 250);    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color ==1) {
        return red;
    } else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

//função para próximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu!\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOder = [];

    playGame();
}

//função para Comerçar jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//incio do jogo
playGame();