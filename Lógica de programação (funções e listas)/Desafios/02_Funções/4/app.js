//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero) {
  return numero * 2;
}

function chamarFuncao() {
  const numero = parseFloat(document.getElementById("inNumero").value.trim());

  if (isNaN(numero)) {
    // isNaN verifica se o valor não é um número
    alert("Por favor, digite um número válido.");
    return;
  }

  const resultado = dobroNumero(numero);
  alert(`O dobro do número ${numero} é: ${resultado}`);
}
