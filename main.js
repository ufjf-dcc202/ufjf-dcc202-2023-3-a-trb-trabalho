// main.js
import { gerarNumero, gerarNumeroPc } from './jogo.js';

const gerarNumeroBtn = document.getElementById('gerarNumeroBtn');
gerarNumeroBtn.addEventListener('click', () => {
    gerarNumero();
    exibirMensagemVez(2);
});

const gerarNumeroBtnPc = document.getElementById('gerarNumeroBtnPc');
gerarNumeroBtnPc.addEventListener('click', () => {
    gerarNumeroPc();
    exibirMensagemVez(1);
});

function exibirMensagemVez(jogador) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = `É a vez do Jogador ${jogador}`;
}