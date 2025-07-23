alert("Bem vindo ao jogo")
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt("Digite um número entre 0 e 10:"));

    if (chute < 0 || chute > 10) {
        alert("Número inválido! Tente novamente.");
        continue;
    }

    if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            alert("Você errou! Tentativas restantes: " + tentativas);
        } else {
            alert("Você perdeu! O número secreto era: " + numeroSecreto);
        }

        if (tentativas > 0) {
            if (chute < numeroSecreto) {
              alert("Dica: O número secreto é maior que " + chute);
            } else {
                alert("Dica: O número secreto é menor que " + chute);
            }
        }    
    }
}