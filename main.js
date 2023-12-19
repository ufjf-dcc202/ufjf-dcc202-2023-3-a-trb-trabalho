// main.js
import { gerarNumero, gerarNumeroJogador2 } from './jogo.js';

// Adiciona evento de clique ao botão do jogador 1
const gerarNumeroBtn = document.getElementById('gerarNumeroBtn');
gerarNumeroBtn.addEventListener('click', function () {
    gerarNumero();
});

// Adiciona evento de clique ao botão do jogador 2 
const gerarNumeroBtnJogador2 = document.getElementById('gerarNumeroBtnJogador2');
gerarNumeroBtnJogador2.addEventListener('click', function () {
    gerarNumeroJogador2();
});