let tela = "inicial";  // Variável para controlar a tela do jogo
let campoItens = ["Forró", "Feira de Alimentos", "Danças Típicas"];
let cidadeItens = ["Funk", "Grafite", "Comida de Rua"];
let festivalItens = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (tela === "inicial") {
    telaInicial();
  } else if (tela === "organizarFestival") {
    organizarFestival();
  } else if (tela === "festivalFinalizado") {
    festivalFinalizado();
  }
}

// Função para a tela inicial
function telaInicial() {
  background(200, 255, 200); // Cor de fundo verde claro, algo do campo
  
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Festival da Terra", width / 2, height / 4);
  
  textSize(16);
  text("Clique para começar", width / 2, height / 2);
}

// Função para organizar o festival
function organizarFestival() {
  background(200, 255, 200); // Verde para o campo, fundo claro

  textSize(24);
  textAlign(CENTER);
  text("Organize seu Festival", width / 2, 40);
  
  textSize(16);
  text("Escolha itens para seu Festival", width / 2, 100);
  
  // Exibir itens de campo
  textSize(14);
  text("Itens do Campo:", width / 2 - 150, 150);
  for (let i = 0; i < campoItens.length; i++) {
    text(campoItens[i], width / 2 - 150, 180 + i * 30);
  }

  // Exibir itens da cidade
  textSize(14);
  text("Itens da Cidade:", width / 2 + 150, 150);
  for (let i = 0; i < cidadeItens.length; i++) {
    text(cidadeItens[i], width / 2 + 150, 180 + i * 30);
  }

  // Mostrar os itens selecionados para o festival
  textSize(16);
  text("Itens no Festival:", width / 2, height - 80);
  textSize(14);
  for (let i = 0; i < festivalItens.length; i++) {
    text(festivalItens[i], width / 2, height - 60 + i * 20);
  }
}

// Função quando o festival for finalizado
function festivalFinalizado() {
  background(255, 200, 200); // Cor de fundo para celebrar o festival
  
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Festival Finalizado!", width / 2, height / 4);
  
  textSize(16);
  text("Itens escolhidos:", width / 2, height / 2 - 20);
  for (let i = 0; i < festivalItens.length; i++) {
    text(festivalItens[i], width / 2, height / 2 + 20 + i * 30);
  }
  
  textSize(12);
  text("Parabéns! Seu Festival da Terra foi um sucesso!", width / 2, height - 50);
}

// Função para lidar com o clique do mouse
function mousePressed() {
  if (tela === "inicial") {
    tela = "organizarFestival"; // Vai para a próxima tela de organização
  } else if (tela === "organizarFestival") {
    // Verificar se o clique está em um dos itens
    if (mouseX < width / 2 - 50) {
      // Itens do campo
      for (let i = 0; i < campoItens.length; i++) {
        if (mouseY > 180 + i * 30 && mouseY < 180 + (i + 1) * 30) {
          festivalItens.push(campoItens[i]);
        }
      }
    } else if (mouseX > width / 2 + 50) {
      // Itens da cidade
      for (let i = 0; i < cidadeItens.length; i++) {
        if (mouseY > 180 + i * 30 && mouseY < 180 + (i + 1) * 30) {
          festivalItens.push(cidadeItens[i]);
        }
      }
    }

    // Se o número de itens for maior ou igual a 3, termina o festival
    if (festivalItens.length >= 3) {
      tela = "festivalFinalizado";
    }
  }
}
