//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function chamarFuncao() {
  const peso = parseFloat(document.getElementById("inPeso").value.trim());
  const altura = parseFloat(document.getElementById("inAltura").value.trim());

  if (isNaN(peso) || isNaN(altura)) {
    // isNaN verifica se o valor não é um número
    alert("Por favor, digite números válidos.");
    return;
  }

  const imc = calcularIMC(peso, altura);

  if (imc < 18.5) {
    alert(`Seu IMC é: ${imc.toFixed(2)} (Abaixo do peso)`);
  } else if (imc < 24.9) {
    alert(`Seu IMC é: ${imc.toFixed(2)} (Peso normal)`);
  } else if (imc < 29.9) {
    alert(`Seu IMC é: ${imc.toFixed(2)} (Sobrepeso)`);
  } else {
    alert(`Seu IMC é: ${imc.toFixed(2)} (Obesidade)`);
  }
  document.getElementById("inPeso").value = "";
  document.getElementById("inAltura").value = "";
}

// Função para formatar automaticamente a altura de cm para metros
function formatarAltura() {
  const inputAltura = document.getElementById("inAltura");
  let valor = inputAltura.value.replace(/\D/g, "");
  // replace(/\D/g, "") remove todos os caracteres que não são dígitos
  // Exemplo: se o usuário digitar "1.80", o valor será "180"

  if (valor.length > 0) {
    // Se tem 3 dígitos (ex: 180), converte para metros (1.80)
    if (valor.length === 3) {
      const metros = valor.charAt(0);
      const centimetros = valor.slice(1);
      valor = metros + "." + centimetros;
    }
    // Se tem 2 dígitos (ex: 80), assume que são centímetros e adiciona 1 na frente (1.80)
    else if (valor.length === 2) {
      valor = "1." + valor;
    }
    // Se tem 1 dígito (ex: 8), assume que são decímetros e adiciona 1.0 na frente (1.08)
    else if (valor.length === 1) {
      valor = "1.0" + valor;
    }
    // Se tem 4 ou mais dígitos, mantém apenas os 3 primeiros
    else if (valor.length > 3) {
      valor = valor.slice(0, 3); // Mantém apenas os 3 primeiros dígitos

      // slice(0, 3) pega os primeiros 3 caracteres da string
      // slice serve para pegar uma parte da string
      // Exemplo: se valor for "1800", slice(0, 3) retorna "180"

      const metros = valor.charAt(0); // Primeiro dígito é o metro

      // charAt é usado para acessar um caractere específico de uma string
      // charAt(0) retorna o primeiro caractere da string
      // Exemplo: se valor for "1800", charAt(0) retorna "1"

      const centimetros = valor.slice(1); // Os demais são os centímetros

      // slice(1) pega todos os caracteres a partir do segundo
      // Exemplo: se valor for "1800", slice(1) retorna "800"

      valor = metros + "." + centimetros;
    }
  }

  inputAltura.value = valor; // Atualiza o valor do input com a altura formatada
}

// Adiciona o event listener quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  const inputAltura = document.getElementById("inAltura");
  inputAltura.addEventListener("blur", formatarAltura); // Mudança: usar 'blur' em vez de 'input'

  // O evento 'blur' é acionado quando o campo perde o foco, permitindo que o usuário digite a altura normalmente e só formate quando sair do campo.
  // O evento 'input' é acionado a cada tecla digitada, o que poderia causar problemas se o usuário digitasse números rapidamente ou de forma não sequencial.
});
