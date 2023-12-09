// jogo.js
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

export function gerarNumero() {
    const numeroAleatorio = gerarNumeroAleatorio();
    const celulas = document.querySelectorAll('.area-jogador1 table td');


    
    const celulasVazias = Array.from(celulas).filter(celula => !celula.textContent.trim());


    if (celulasVazias.length > 0) {
        // Escolhe aleatoriamente uma célula vazia 
        const celulaAleatoria = celulasVazias[Math.floor(Math.random() * celulasVazias.length)];

        // conteúdo da célula escolhida recebe o numero aleatorio 
        celulaAleatoria.textContent = numeroAleatorio;

        // Atualiza o conteúdo do elemento com o ID 'resultado'
        document.getElementById('resultado').textContent = 'Resultado: ' + numeroAleatorio;
    } else {
        console.log('Todas as células estão ocupadas.'); 
    }

}

export function gerarNumeroPc() {
    const numeroAleatorioPc = gerarNumeroAleatorio();
    const celulasPc = document.querySelectorAll('.area-jogador  table td');
    const celulasVazias = Array.from(celulasPc).filter(celula => !celula.textContent.trim());


    if (celulasVazias.length > 0) {
        // Escolhe aleatoriamente uma célula vazia 
        const celulaAleatoria = celulasVazias[Math.floor(Math.random() * celulasVazias.length)];

        // conteúdo da célula escolhida recebe o numero aleatorio 
        celulaAleatoria.textContent = numeroAleatorioPc;

        // Atualiza o conteúdo do elemento com o ID 'resultado'
        document.getElementById('resultadoPc').textContent = 'Resultado: ' + numeroAleatorioPc;
    } else {
        console.log('Todas as células estão ocupadas.'); 
    }

}