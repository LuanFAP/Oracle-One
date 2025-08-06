//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function quadrado(numero) {
  return numero * numero;
}

function chamarFuncao() {
  const numero1 = parseFloat(document.getElementById("inNumero1").value.trim());

  if (isNaN(numero1)) {
    // isNaN verifica se o valor não é um número
    alert("Por favor, digite números válidos.");
    return;
  }

  const resultado = quadrado(numero1);
  alert(`O quadrado de ${numero1} é: ${resultado}`);
}
