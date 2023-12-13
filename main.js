// main.js
import { gerarNumero, gerarNumeroPc } from './jogo.js';

// Adiciona evento de clique ao botão do jogador 1
const gerarNumeroBtn = document.getElementById('gerarNumeroBtn');
gerarNumeroBtn.addEventListener('click', function () {
    gerarNumero();
});

// Adiciona evento de clique ao botão do jogador 2 (PC)
const gerarNumeroBtnPc = document.getElementById('gerarNumeroBtnPc');
gerarNumeroBtnPc.addEventListener('click', function () {
    gerarNumeroPc();
});