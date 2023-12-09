// jogo.js
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

let jogadorAtual = 1; // Inicializa com o jogador 1

export function gerarNumero() {
    const numeroAleatorio = gerarNumeroAleatorio();
    const celulas = document.querySelectorAll('.area-jogador1 table td');

    // pegar apenas as células que estão vazias
    const celulasVazias = Array.from(celulas).filter(celula => !celula.textContent.trim());

    if (celulasVazias.length > 0) {
        // Escolhe aleatoriamente uma célula vazia 
        const celulaAleatoria = celulasVazias[Math.floor(Math.random() * celulasVazias.length)];

        // conteúdo da célula escolhida recebe o numero aleatorio 
        celulaAleatoria.textContent = numeroAleatorio;

        // Atualiza o conteúdo do elemento com o ID 'resultado'
        document.getElementById('resultado').textContent = 'Resultado  ' +  numeroAleatorio;

        // Troca para o próximo jogador
        jogadorAtual = 2;

        // Exibe mensagem indicando a vez do próximo jogador
        document.getElementById('mensagem').textContent = 'É a vez do Jogador 2';
    } else {
        console.log('Todas as células estão ocupadas.'); // ou outra ação adequada
    }
}

export function gerarNumeroPc() {
    const numeroAleatorioPc = gerarNumeroAleatorio();
    const celulasPc = document.querySelectorAll('.area-jogador  table td');

    
    const celulasVazias = Array.from(celulasPc).filter(celula => !celula.textContent.trim());

    if (celulasVazias.length > 0) {
        
        const celulaAleatoria = celulasVazias[Math.floor(Math.random() * celulasVazias.length)];

       
        celulaAleatoria.textContent = numeroAleatorioPc;

        
        document.getElementById('resultadoPc').textContent = 'Resultado ' +  numeroAleatorioPc;

       
        jogadorAtual = 1;

        
        document.getElementById('mensagem').textContent = 'É a vez do Jogador 1';
    } else {
        console.log('Todas as células estão ocupadas.'); 
    }
}