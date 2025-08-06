// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero === 0) {
    return 1; // O fatorial de 0 é 1
  }
  return numero * calcularFatorial(numero - 1); // Chamada recursiva para calcular o fatorial
}

function chamarFuncao() {
  const numero = parseInt(document.getElementById("inNumero").value.trim());

  if (isNaN(numero) || numero < 0) {
    // Verifica se o número é válido
    // isNaN verifica se o valor não é um número
    alert("Por favor, digite um número válido.");
    return;
  }

  const fatorial = calcularFatorial(numero);
  alert(`O fatorial de ${numero} é: ${fatorial}`);
  document.getElementById("inNumero").value = "";
}
