// jogo.js
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

export function gerarNumero() {
    const numeroAleatorio = gerarNumeroAleatorio();
    document.getElementById('resultado').textContent = 'Resultado: ' + numeroAleatorio;
}

export function gerarNumeroPc() {
    const numeroAleatorioPc = gerarNumeroAleatorio();
    document.getElementById('resultadoPc').textContent = 'Resultado: ' + numeroAleatorioPc;
}
