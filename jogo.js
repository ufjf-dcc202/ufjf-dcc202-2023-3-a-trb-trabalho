// jogo.js

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}
// Inicializando os vetores para as colunas de cada jogador
const jogador1Coluna1 = [[], [], []];
const jogador1Coluna2 = [[], [], []];
const jogador1Coluna3 = [[], [], []];

const jogador2Coluna1 = [[], [], []];
const jogador2Coluna2 = [[], [], []];
const jogador2Coluna3 = [[], [], []];

let jogadorAtual = 1; // Inicializa com o jogador 1

export function gerarNumero() {
    const numeroAleatorio = gerarNumeroAleatorio();

    // Exibe mensagem indicando que o jogador deve escolher uma coluna
    document.getElementById('mensagem').textContent = 'Jogador 1, escolha uma coluna .';

     // Atualiza o conteúdo do elemento com o ID 'resultado'
    document.getElementById('resultado').textContent = 'Resultado ' + numeroAleatorio;

    // Adiciona evento de clique a cada célula da tabela do jogador 1
    const celulasJogador1 = document.querySelectorAll('.area-jogador1 table td');
    celulasJogador1.forEach((celula, index) => {
        celula.addEventListener('click', function escolherColuna() {
           

            // Seleciona a coluna correspondente ao índice
            let coluna;
            if (index < 3) {
                coluna = jogador1Coluna1;
            } else if (index < 6) {
                coluna = jogador1Coluna2;
            } else {
                coluna = jogador1Coluna3;
            }

            // Adiciona o número à coluna escolhida
            coluna[index % 3].push(numeroAleatorio);

            // Atualiza o conteúdo da célula escolhida com o número aleatório
            celula.textContent = numeroAleatorio;

        

            // Troca para o próximo jogador
            jogadorAtual = 2;

            // Remove a mensagem de escolha da coluna
            document.getElementById('mensagem').textContent = '';

            // Remove o evento de clique das outras células
            celulasJogador1.forEach(c => c.removeEventListener('click', escolherColuna));

            // Exibe mensagem indicando a vez do próximo jogador
            document.getElementById('mensagem').textContent = 'É a vez do Jogador 2';

            calcularSomasColunas1();
        });
    });
}



export function gerarNumeroPc() {
    const numeroAleatorio = gerarNumeroAleatorio();

    // Exibe mensagem indicando que o jogador deve escolher uma coluna
    document.getElementById('mensagem').textContent = 'Jogador 2, escolha uma coluna.';

     // Atualiza o conteúdo do elemento com o ID 'resultado'
    document.getElementById('resultadoPc').textContent = 'Resultado ' + numeroAleatorio;

    // Adiciona evento de clique a cada célula da tabela do jogador 1
    const celulasJogador2 = document.querySelectorAll('.area-jogador table td');
    celulasJogador2.forEach((celula, index) => {
        celula.addEventListener('click', function escolherColuna() {
            
            // Seleciona a coluna correspondente ao índice
            let coluna;
            if (index < 3) {
                coluna = jogador2Coluna1;
            } else if (index < 6) {
                coluna = jogador2Coluna2;
            } else {
                coluna = jogador2Coluna3;
            }

            // Adiciona o número à coluna escolhida
            coluna[index % 3].push(numeroAleatorio);

            // Atualiza o conteúdo da célula escolhida com o número aleatório
            celula.textContent = numeroAleatorio;

        

            // Troca para o próximo jogador
            jogadorAtual = 1;

            // Remove a mensagem de escolha da coluna
            document.getElementById('mensagem').textContent = '';

            // Remove o evento de clique das outras células
            celulasJogador2.forEach(c => c.removeEventListener('click', escolherColuna));

            // Exibe mensagem indicando a vez do próximo jogador
            document.getElementById('mensagem').textContent = 'É a vez do Jogador 1';
            calcularSomasColunas2();
        });
    });

}

//Função para calcular colunas


 function calcularSomasColunas1() {
    for (let colunaIndex = 0; colunaIndex < 3; colunaIndex++) {
        const celulasColuna = document.querySelectorAll(`.area-jogador1 table tr td:nth-child(${colunaIndex + 1})`);

        const somaColuna = Array.from(celulasColuna).reduce((acc, celula) => { // reduce para calcular a soma dos valores na coluna.
            const valorCelula = parseInt(celula.textContent.trim()) || 0; //Convertendo o conteúdo da célula para um número, ou zero se não for um número.
            const multiplicador = Array.from(celulasColuna).filter(c => parseInt(c.textContent.trim()) === valorCelula).length; //um array a partir das células da coluna e filtrando as células que têm o mesmo valor que a célula atual.
            return acc + (valorCelula * multiplicador); //acc + ...: Acumulando o resultado da multiplicação na soma acumulativa.
        }, 0);

        document.getElementById(`somaColunaJogador1_${colunaIndex + 1}`).textContent = `Coluna ${colunaIndex + 1}: ${somaColuna}`;
    }
}

function calcularSomasColunas2() {
    for (let colunaIndex = 0; colunaIndex < 3; colunaIndex++) {
        const celulasColuna = document.querySelectorAll(`.area-jogador table tr td:nth-child(${colunaIndex + 1})`);

        const somaColuna = Array.from(celulasColuna).reduce((acc, celula) => { // reduce para calcular a soma dos valores na coluna.
            const valorCelula = parseInt(celula.textContent.trim()) || 0; //Convertendo o conteúdo da célula para um número, ou zero se não for um número.
            const multiplicador = Array.from(celulasColuna).filter(c => parseInt(c.textContent.trim()) === valorCelula).length; //um array a partir das células da coluna e filtrando as células que têm o mesmo valor que a célula atual.
            return acc + (valorCelula * multiplicador); //acc + ...: Acumulando o resultado da multiplicação na soma acumulativa.
        }, 0);

        document.getElementById(`somaColunaJogador2_${colunaIndex + 1}`).textContent = `Coluna ${colunaIndex + 1}: ${somaColuna}`;
    }
}
