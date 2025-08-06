window.onload = function () {
  // Função que será executada quando a página for carregada

  /*  
  Math.floor(x) --> arredonda o número para baixo, garantindo que seja um inteiro.

  Math.random() --> gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo), para números entre 0 e 9, multiplica-se por 10 ou se quiser entre 1 para 10, basta depois da multiplicação, somar + 1.

  parseInt(x) --> Converte uma string ou número para inteiro, ignorando decimais.

  .toLowerCase() --> serve para padronizar a entrada do usuário, tornando-a minúscula.

  parseFloat(x) --> converte a string retornada pelo prompt em um número decimal

  .toFixed(2) --> formata o número para duas casas decimais
  */

  alert("Bem vindo ao jogo");

  while (true) {
    // Solicita a opção do menu ao usuário
    let opcaoStr = prompt(
      "Qual opção deseja selecionar?\n\n1 - Dia da semana\n2 - Número positivo ou negativo\n3 - Jogo da pontuação\n4 - Saldo da conta\n5 - Bem vindo e seu nome\n6 - Jogo da adivinhação de número\n7 - Sair"
    );
    let opcao = parseInt(opcaoStr);
    if (isNaN(opcao)) {
      alert("Saindo do programa. Até a próxima!");
      break;
    }

    /*
      ------------------------------------------------------------------------------------------
      Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
      ------------------------------------------------------------------------------------------
      */

    if (opcao === 1) {
      let nomeDoDia = prompt("Qual o nome do dia da semana?").toLowerCase(); //toLowerCase() serve para padronizar a entrada do usuário, tornando-a minúscula.

      if (nomeDoDia === "domingo" || nomeDoDia === "sábado") {
        alert("Bom final de semana!");
      } else {
        alert("Boa semana!");
      }
    }

    /*
      ------------------------------------------------------------------------------------------
      Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
      ------------------------------------------------------------------------------------------
      */

    if (opcao === 2) {
      let numero = parseInt(prompt("Digite um número:"));

      if (numero >= 0) {
        alert("O número " + numero + " é positivo.");
      } else {
        alert("O número " + numero + " é negativo.");
      }
    }

    /*
      ------------------------------------------------------------------------------------------
      Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
      ------------------------------------------------------------------------------------------
      */
    // Jogo da pontuação
    if (opcao === 3) {
      let pontuacao = 0;

      while (pontuacao < 1000) {
        let num1 = parseInt(Math.random() * 11);
        let num2 = parseInt(Math.random() * 11);

        let resultado = prompt("Qual é a soma de " + num1 + " + " + num2 + "?");

        // Se o usuário cancelar o prompt ou deixar vazio, encerra o jogo
        if (resultado === null || resultado.trim() === "") {
          alert(
            "Você decidiu sair do jogo. Sua pontuação final é: " + pontuacao
          );
          break;
        }

        if (parseInt(resultado) === num1 + num2) {
          pontuacao = pontuacao + 100;
          alert(
            "Parabéns, você acertou! Ganhou 100 pontos. Sua pontuação atual é: " +
              pontuacao
          );
        } else {
          pontuacao = pontuacao - 50;

          if (pontuacao <= 0) {
            pontuacao = 0;
          }

          alert(
            "Você errou! A soma correta é " +
              (num1 + num2) +
              "\nPerdeu 50 pontos. \nSua pontuação atual é: " +
              pontuacao
          );
        }

        if (pontuacao >= 1000) {
          alert("Parabéns, você venceu! Sua pontuação final é: " + pontuacao);
          break;
        }
      }
    }

    /*
      ------------------------------------------------------------------------------------------
      Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
      ------------------------------------------------------------------------------------------
      */

    if (opcao === 4) {
      let saldo = parseFloat(prompt("Digite o saldo da sua conta:")); //parseFloat converte a string retornada pelo prompt em um número decimal

      if (saldo > 0) {
        alert(`Seu saldo é positivo: R$ ${saldo.toFixed(2)}`); //toFixed(2) formata o número para duas casas decimais
      } else if (saldo < 0) {
        alert(`Seu saldo é negativo: R$ ${saldo.toFixed(2)}`);
      } else {
        alert("Seu saldo é zero.");
      }
    }

    /*
      ------------------------------------------------------------------------------------------
      Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
      ------------------------------------------------------------------------------------------
      */

    if (opcao === 5) {
      let nome = prompt("Digite seu nome:");
      alert("Bem-vindo(a), " + nome + "!");
    }

    /*
      ------------------------------------------------------------------------------------------
      Jogo da adivinhação de número: O usuário deve adivinhar um número entre 0 e 10.
      ------------------------------------------------------------------------------------------
      */
    if (opcao === 6) {
      let numeroSecreto = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10

      let tentativas = 3;

      while (tentativas > 0) {
        let chute = parseInt(prompt("Digite um número entre 0 e 10:")); //parseInt converte a string retornada pelo prompt em um número inteiro

        if (chute < 0 || chute > 10) {
          alert("Número inválido! Tente novamente.");
          continue;
        }

        if (chute === numeroSecreto) {
          alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
          break;
        } else {
          tentativas--; // Tentativas - 1
          if (tentativas > 0) {
            alert("Você errou! Tentativas restantes: " + tentativas);
          } else {
            alert(`Você perdeu! O número secreto era: ${numeroSecreto}`);
          }

          if (tentativas > 0) {
            if (chute < numeroSecreto) {
              alert("Dica: O número secreto é maior que " + chute);
            } else {
              alert(`Dica: O número secreto é menor que ${chute}`);
            }
          }
        }
      }
    }

    /*
      OPERADOR TERNÁRIO --> Dependendo do caso pode substituir o if/else

      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

      Entende-se que o operador ternário é uma forma de como a gente fala no dia a dia, por exemplo:

      tentativas é maior que 1 ? (pergunta) se sim, palavraTentativa recebe "tentativas" : se não, palavraTentativa recebe "tentativa"
      
      */

    /*
      ------------------------------------------------------------------------------------------
      Sair do jogo.
      ------------------------------------------------------------------------------------------
      */
    // Sair do jogo
    if (opcao === 7) {
      alert("Obrigado por jogar! Até a próxima!");
      break;
    }
  }
};
