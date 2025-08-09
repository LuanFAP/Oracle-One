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
  /*
  🎯 FUNÇÃO: sortearNomes()
  
  📝 PROPÓSITO:
     Embaralha os nomes de forma aleatória para criar a ordem do sorteio
     de amigo secreto. Cada pessoa receberá como amigo secreto a próxima
     pessoa na lista embaralhada.
  
  🔧 COMO FUNCIONA:
  
  1️⃣ VALIDAÇÃO INICIAL:
     if (nomes.length < 2) { ... return; }
     • Verifica se há pelo menos 2 pessoas para fazer o sorteio
     • Se não houver, mostra alerta e sai da função (return)
     • Amigo secreto precisa de no mínimo 2 pessoas!
  
  2️⃣ PREPARAÇÃO DOS ARRAYS:
     sorteados.length = 0;
     • Limpa o array de sorteados de sorteios anteriores
     • Garante que começamos com array vazio
     
     const nomesRestantes = [...nomes];
     • Usa SPREAD OPERATOR (...) para criar uma CÓPIA do array original
     • Por que não usar nomes diretamente? Para não modificar o array original!
     • nomesRestantes será modificado durante o sorteio, nomes permanece intacto
  
  3️⃣ ALGORITMO DE EMBARALHAMENTO (Algoritmo Fisher-Yates modificado):
     while (nomesRestantes.length > 0) { ... }
     • Loop continua enquanto ainda há nomes para sortear
     • A cada iteração, um nome é escolhido e removido
  
  4️⃣ SORTEIO ALEATÓRIO:
     const indiceSorteado = Math.floor(Math.random() * nomesRestantes.length);
     
     📊 EXPLICAÇÃO MATEMÁTICA:
     • Math.random() = gera número decimal entre 0 e 1 (ex: 0.7834...)
     • * nomesRestantes.length = multiplica pelo tamanho do array
     • Math.floor() = arredonda para baixo, sempre um número inteiro
     
     🔢 EXEMPLO PRÁTICO com 4 nomes [Ana, Bruno, Carlos, Diana]:
     • Math.random() = 0.7 (exemplo)
     • 0.7 * 4 = 2.8
     • Math.floor(2.8) = 2
     • indiceSorteado = 2 (que corresponde a "Carlos")
  
  5️⃣ CAPTURA E ARMAZENAMENTO:
     const nomeSorteado = nomesRestantes[indiceSorteado];
     sorteados.push(nomeSorteado);
     • Pega o nome na posição sorteada
     • Adiciona no array final de sorteados (mantém a ordem do sorteio)
  
  6️⃣ REMOÇÃO DO SORTEADO:
     nomesRestantes.splice(indiceSorteado, 1);
     • Remove o nome que já foi sorteado da lista de restantes
     • splice(posição, quantos_remover) = remove 1 elemento na posição
     • Isso garante que o mesmo nome não seja sorteado duas vezes!
  
  7️⃣ CHAMADA FINAL:
     exibirResultado();
     • Após todos os nomes serem embaralhados, mostra o resultado na tela
  
  🎊 RESULTADO DO ALGORITMO:
     • Array 'sorteados' com todos os nomes em ordem aleatória
     • Cada nome aparece exatamente uma vez
     • A ordem determina quem é amigo secreto de quem (próximo na lista)
  
  💡 POR QUE ESTE ALGORITMO FUNCIONA:
     • É justo: cada pessoa tem chance igual de ser sorteada
     • É completo: todos participam exatamente uma vez
     • É aleatório: ordem é imprevisível a cada sorteio
     • É circular: última pessoa "dá presente" para a primeira
  */

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
  /*
  🎯 FUNÇÃO: exibirResultado()
  
  📝 PROPÓSITO:
     Exibe o resultado do sorteio de amigo secreto na tela, mostrando
     quem é o amigo secreto de cada pessoa.
  
  🔧 COMO FUNCIONA:
  
  1️⃣ LIMPEZA INICIAL:
     resultado.innerHTML = ""; 
     • Limpa qualquer resultado anterior que estava sendo exibido
     • Garante que não haja duplicação de resultados
  
  2️⃣ LOOP PELOS SORTEADOS:
     sorteados.forEach((nome, index) => { ... })
     • Percorre cada nome no array 'sorteados' 
     • 'nome' = pessoa atual
     • 'index' = posição desta pessoa no array (0, 1, 2, 3...)
  
  3️⃣ CRIAÇÃO DO ELEMENTO:
     const li = document.createElement("li");
     • Cria um novo elemento <li> (item de lista) 
     • Cada resultado será um item separado na lista
  
  4️⃣ LÓGICA DO AMIGO SECRETO:
     sorteados[(index + 1) % sorteados.length]
     
     📊 EXPLICAÇÃO MATEMÁTICA:
     • (index + 1) = pega a PRÓXIMA pessoa na lista
     • % sorteados.length = operador módulo (resto da divisão)
     
     🔄 EXEMPLO PRÁTICO com 4 pessoas [Ana, Bruno, Carlos, Diana]:
     • Ana (index=0): (0+1) % 4 = 1 → Bruno
     • Bruno (index=1): (1+1) % 4 = 2 → Carlos  
     • Carlos (index=2): (2+1) % 4 = 3 → Diana
     • Diana (index=3): (3+1) % 4 = 0 → Ana (volta para o início!)
     
     💡 O MÓDULO FAZ A "VOLTA":
     Quando chegamos no último pessoa, o módulo faz voltar para 
     a primeira, criando um círculo perfeito onde cada um tem 
     um amigo secreto diferente!
  
  5️⃣ MONTAGEM DO TEXTO:
     li.textContent = `${nome} - Amigo Secreto: ${amigoSecreto}`;
     • Template literal (backticks) para criar a frase
     • Mostra: "Nome da Pessoa - Amigo Secreto: Nome do Amigo"
  
  6️⃣ INSERÇÃO NO DOM:
     resultado.appendChild(li);
     • Adiciona o item criado na lista de resultados na tela
     • Cada pessoa aparece como um item separado
  
  🎊 RESULTADO FINAL:
     Uma lista na tela mostrando quem é o amigo secreto de cada pessoa,
     garantindo que todos tenham um amigo e formem um círculo completo!
  */

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
