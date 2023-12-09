// jogo.js
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

export function gerarNumero() {
    const numeroAleatorio = gerarNumeroAleatorio();
    const celulas = document.querySelectorAll('.area-jogador1 table td');
    const celulaAleatoria = celulas[Math.floor(Math.random() * celulas.length)];
    celulaAleatoria.textContent = numeroAleatorio;
    document.getElementById('resultado').textContent = 'Resultado: ' + numeroAleatorio;
}

export function gerarNumeroPc() {
    const numeroAleatorioPc = gerarNumeroAleatorio();
    const celulasPc = document.querySelectorAll('.area-jogador  table td');
    const celulaAleatoriaPc = celulasPc[Math.floor(Math.random() * celulasPc.length)];
    celulaAleatoriaPc.textContent = numeroAleatorioPc;
    document.getElementById('resultadoPc').textContent = 'Resultado: ' + numeroAleatorioPc;
}