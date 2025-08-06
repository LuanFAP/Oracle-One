//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3;
}

function chamarFuncao() {
  const numero1 = parseFloat(document.getElementById("inNumero1").value.trim());
  const numero2 = parseFloat(document.getElementById("inNumero2").value.trim());
  const numero3 = parseFloat(document.getElementById("inNumero3").value.trim());

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    // isNaN verifica se o valor não é um número
    alert("Por favor, digite números válidos.");
    return;
  }

  const resultado = media(numero1, numero2, numero3);
  alert(
    `A média dos números ${numero1}, ${numero2} e ${numero3} é: ${resultado}`
  );
}
