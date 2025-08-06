//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(numero1, numero2) {
  // Equivalente a: if (numero1 > numero2) { return numero1; } else { return numero2; }
  return numero1 > numero2 ? numero1 : numero2; // Retorna o maior número entre os dois
}

function chamarFuncao() {
  const numero1 = parseFloat(document.getElementById("inNumero1").value.trim());
  const numero2 = parseFloat(document.getElementById("inNumero2").value.trim());

  if (isNaN(numero1) || isNaN(numero2)) {
    // isNaN verifica se o valor não é um número
    alert("Por favor, digite números válidos.");
    return;
  }

  const resultado = maiorNumero(numero1, numero2);
  alert(`O maior número entre ${numero1} e ${numero2} é: ${resultado}`);
}
