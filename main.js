// main.js
import { gerarNumero, gerarNumeroPc } from './jogo.js';

document.addEventListener('DOMContentLoaded', main);

function main() {
    const gerarNumeroBtn = document.getElementById('gerarNumeroBtn');
    gerarNumeroBtn.addEventListener('click', gerarNumero);

    const gerarNumeroBtnPc = document.getElementById('gerarNumeroBtnPc');
    gerarNumeroBtnPc.addEventListener('click', gerarNumeroPc);
}
