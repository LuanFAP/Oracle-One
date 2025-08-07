const nomes = [];
const nomeInput = document.getElementById("nomeInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const sortearBtn = document.getElementById("sortearBtn");
const limparBtn = document.getElementById("limparBtn");
const listaNomes = document.getElementById("listaNomes");
const resultado = document.getElementById("resultado");
const sorteados = [];

function atualizarBotoes() {
  // Ativar botão sortear quando tiver 2 ou mais nomes
  sortearBtn.disabled = nomes.length < 2;

  // Ativar botão limpar quando tiver pelo menos 1 nome
  limparBtn.disabled = nomes.length === 0;
}

function adicionarNome() {
  const nome = nomeInput.value.trim();
  if (nome && !nomes.includes(nome)) {
    // Verifica se o nome não está vazio e não foi adicionado
    nomes.push(nome); // Adiciona o nome ao array
    nomeInput.value = ""; // Limpa o campo de entrada
    const li = document.createElement("li"); // Cria um novo elemento de lista
    li.textContent = nome;
    listaNomes.appendChild(li); // Adiciona o nome à lista

    nomeInput.value = "";
    atualizarBotoes(); // Atualiza o estado dos botões
  } else {
    alert("Nome inválido ou já adicionado.");
  }
}

function sortearNomes() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos dois nomes para sortear.");
    return;
  }

  sorteados.length = 0; // Limpa o array de sorteados
  const nomesRestantes = [...nomes]; // Copia os nomes para evitar mutação

  while (nomesRestantes.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * nomesRestantes.length);
    const nomeSorteado = nomesRestantes[indiceSorteado];
    sorteados.push(nomeSorteado);
    nomesRestantes.splice(indiceSorteado, 1); // Remove o nome sorteado
  }

  exibirResultado();
}

function exibirResultado() {
  resultado.innerHTML = ""; // Limpa o resultado anterior
  sorteados.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = `${nome} - Amigo Secreto: ${
      sorteados[(index + 1) % sorteados.length]
    }`;
    resultado.appendChild(li);
  });
}

function limparLista() {
  nomes.length = 0; // Limpa o array de nomes
  sorteados.length = 0; // Limpa o array de sorteados
  listaNomes.innerHTML = ""; // Limpa a lista de nomes
  resultado.innerHTML = ""; // Limpa o resultado
  nomeInput.value = ""; // Limpa o campo de entrada
  atualizarBotoes(); // Atualiza o estado dos botões
}

adicionarBtn.addEventListener("click", adicionarNome);
sortearBtn.addEventListener("click", sortearNomes);
limparBtn.addEventListener("click", limparLista);

// Inicializa o estado dos botões
atualizarBotoes();

// Permite adicionar nome ao pressionar Enter no campo de texto
nomeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarNome();
  }
});
