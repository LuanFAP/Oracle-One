const titulo = document.querySelector("h1");

titulo.textContent = "Hora do Desafio.";

function exibirMensagemConsole() {
  console.log("O botão foi clicado.");
}
function exibirMensagemAlert() {
  alert("Eu amo JS.");
}

function nomeCidade() {
  const cidade = prompt("Fale o nome de uma cidade do Brasil?");
  alert(`Estive em ${cidade} e lembrei de você!`);
}

function soma() {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  const resultado = num1 + num2;
  alert(`A soma é: ${resultado}`);
}
