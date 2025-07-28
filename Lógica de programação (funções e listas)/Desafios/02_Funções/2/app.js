function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

function chamarFuncao() {
  const nome = document.getElementById("nomeInput").value.trim();

  if (nome === "") {
    alert("Por favor, digite seu nome.");
    return;
  }

  exibirOlaNome(nome);
}
