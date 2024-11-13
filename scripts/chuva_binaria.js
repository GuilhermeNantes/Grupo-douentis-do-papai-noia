const binaryRainContainer = document.querySelector('.binary-rain');

// Função para criar uma coluna de código binário
function createBinaryColumn() {
    const column = document.createElement('div');
    column.classList.add('binary-column');
    
    // Gerar uma sequência de códigos binários para cada coluna
    let binaryCode = '';
    for (let i = 0; i < 20; i++) {
        binaryCode += Math.round(Math.random()) + '<br>';
    }
    column.innerHTML = binaryCode;
    
    // Define uma velocidade de queda aleatória
    column.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    // Adiciona a coluna ao container
    binaryRainContainer.appendChild(column);
    
    // Remove a coluna ao final da animação e cria uma nova
    column.addEventListener('animationend', () => {
        binaryRainContainer.removeChild(column);
        createBinaryColumn();
    });
}

// Inicializa múltiplas colunas
for (let i = 0; i < 10; i++) {
    createBinaryColumn();
}
