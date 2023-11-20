// módulo que permite pegar entrada do usuário
const read = require('readline-sync');

function sumValues() {
    let isPositiveInteger = false;
    
    do {
    
        // lê o valor inserido pelo usuário e transforma o valor lido em número
        let value = Number(read.question('\nDigite um numero inteiro positivo para fazer a soma: '));
    
        // verifica se o valor lido é um inteiro e se é positivo
        if (!Number.isInteger(value) || value <= 0) {
            isPositiveInteger = false;
            console.log('\nNúmero incorreto. Digite um número inteiro positivo (Ex: 8, 9, 10...).');
        } else {
            // Condição que permite parar o laço quando o usuário insere um valor aceito
            isPositiveInteger = true;

            let totalSum = 0
    
            // percorre os valores menores que o valor passado
            for (let i = 0; i <= value - 1; i++) {
                // verifica se é divisível por 3 ou 5 e soma ao valor total
                totalSum += i % 3 === 0 || i % 5 === 0 ? i : 0;
            };
    
            // Imprime o resultado na tela
            console.log(`\nResultado da soma dos números inferiores a ${value} que são divisíveis por 3 ou 5: ${totalSum}\n`);
        }
    } while (isPositiveInteger === false);
}

sumValues();