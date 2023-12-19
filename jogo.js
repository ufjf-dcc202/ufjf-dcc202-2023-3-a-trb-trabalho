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
    document.getElementById('resultado').textContent = 'Dado ' + numeroAleatorio;

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

            removeValoresIguais(coluna, numeroAleatorio);
        

            // Troca para o próximo jogador
            jogadorAtual = 2;

            // Remove a mensagem de escolha da coluna
            document.getElementById('mensagem').textContent = '';

            // Remove o evento de clique das outras células
            celulasJogador1.forEach(c => c.removeEventListener('click', escolherColuna));

            // Exibe mensagem indicando a vez do próximo jogador
            document.getElementById('mensagem').textContent = 'É a vez do Jogador 2';

            calcularSomasColunas1();
            //calcularSomaTotalJogador1();
            if (todasCelulasPreenchidas()) {
                   
                determinarVencedor();
          }
      
     });
  });
}

   

export function gerarNumeroJogador2() {
    const numeroAleatorio = gerarNumeroAleatorio();

    // Exibe mensagem indicando que o jogador deve escolher uma coluna
    document.getElementById('mensagem').textContent = 'Jogador 2, escolha uma coluna.';

     // Atualiza o conteúdo do elemento com o ID 'resultado'
    document.getElementById('resultadoJogador2').textContent = 'Dado ' + numeroAleatorio;

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

            removeValoresIguais(coluna, numeroAleatorio);
        

            // Troca para o próximo jogador
            jogadorAtual = 1;

            // Remove a mensagem de escolha da coluna
            document.getElementById('mensagem').textContent = '';

            // Remove o evento de clique das outras células
            celulasJogador2.forEach(c => c.removeEventListener('click', escolherColuna));

            // Exibe mensagem indicando a vez do próximo jogador
            document.getElementById('mensagem').textContent = 'É a vez do Jogador 1';
            calcularSomasColunas2();

            if (todasCelulasPreenchidas()) {
                   
                determinarVencedor();
          }
      
        });
    });

}

//função para remover valores iguais

function removeValoresIguais(colunaEscolhida, numero) {
    
    let colunaOponente = 0;

    switch (colunaEscolhida) {
        case jogador1Coluna1: 
            colunaOponente = jogador2Coluna1;
            break;
        case jogador1Coluna2: 
            colunaOponente = jogador2Coluna2;
            break;
        case jogador1Coluna3: 
            colunaOponente = jogador2Coluna3;
            break;
        case jogador2Coluna1: 
            colunaOponente = jogador1Coluna1;
            break;
        case jogador2Coluna2: 
            colunaOponente = jogador1Coluna2;
            break;
        case jogador2Coluna3: 
            colunaOponente = jogador1Coluna3;
            break;
    }

    for (let i = 0; i < colunaOponente.length; i++) {
        if (colunaOponente[i] === numero) {
            colunaOponente.splice(i, 1);
            colunaOponente[i].textContent = " ";
        }
    }
}


//Função para calcular colunas
function calcularSomasColunas1() {
    let somaTotalJogador1=0;
    for (let colunaIndex = 0; colunaIndex < 3; colunaIndex++) {
        const celulasColuna = document.querySelectorAll(`.area-jogador1 table tr td:nth-child(${colunaIndex + 1})`);

        const somaColuna = Array.from(celulasColuna).reduce((acc, celula) => { // reduce para calcular a soma dos valores na coluna.
            const valorCelula = parseInt(celula.textContent.trim()) || 0; //Convertendo o conteúdo da célula para um número, ou zero se não for um número.
            const multiplicador = Array.from(celulasColuna).filter(c => parseInt(c.textContent.trim()) === valorCelula).length; //um array a partir das células da coluna e filtrando as células que têm o mesmo valor que a célula atual.
            return acc + (valorCelula * multiplicador); //acc + ...: Acumulando o resultado da multiplicação na soma acumulativa.
        }, 0);
        
        somaTotalJogador1 += somaColuna;
        document.getElementById(`somaColunaJogador1_${colunaIndex + 1}`).textContent = `Coluna ${colunaIndex + 1}: ${somaColuna}`;
    }
    document.getElementById('somaTotalJogador1').textContent = `Total: ${somaTotalJogador1}`;
}

function calcularSomasColunas2() {
    let somaTotalJogador2=0;
    for (let colunaIndex = 0; colunaIndex < 3; colunaIndex++) {
        
        const celulasColuna = document.querySelectorAll(`.area-jogador table tr td:nth-child(${colunaIndex + 1})`);

        const somaColuna = Array.from(celulasColuna).reduce((acc, celula) => { // reduce para calcular a soma dos valores na coluna.
            const valorCelula = parseInt(celula.textContent.trim()) || 0; //Convertendo o conteúdo da célula para um número, ou zero se não for um número.
            const multiplicador = Array.from(celulasColuna).filter(c => parseInt(c.textContent.trim()) === valorCelula).length; //um array a partir das células da coluna e filtrando as células que têm o mesmo valor que a célula atual.
            return acc + (valorCelula * multiplicador); //acc + ...: Acumulando o resultado da multiplicação na soma acumulativa.
        }, 0);
   
         somaTotalJogador2+=somaColuna;
        document.getElementById(`somaColunaJogador2_${colunaIndex + 1}`).textContent = `Coluna ${colunaIndex + 1}: ${somaColuna}`;
    }
    document.getElementById('somaTotalJogador2').textContent = `Total: ${somaTotalJogador2}`;
}

function todasCelulasPreenchidas() {
    const celulas = document.querySelectorAll('.area-jogador1 table td, .area-jogador table td');
    return Array.from(celulas).every(celula => celula.textContent.trim() !== '');
}
function determinarVencedor() {
    const totalJogador1 = parseInt(document.getElementById('somaTotalJogador1').textContent.split(':')[1]) || 0;
    const totalJogador2 = parseInt(document.getElementById('somaTotalJogador2').textContent.split(':')[1]) || 0;

    const mensagemVencedor = totalJogador1 > totalJogador2 ? 'Jogador 1 é o vencedor!' :
                             totalJogador2 > totalJogador1 ? 'Jogador 2 é o vencedor!' :
                             'O jogo terminou em empate!';

    document.getElementById('mensagem').textContent = mensagemVencedor;
}