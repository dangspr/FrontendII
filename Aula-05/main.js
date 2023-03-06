let bodyRef = document.querySelector('body');
let h1Ref = document.querySelector('h1');
let itemRef = document.querySelector('.item')
let pRef = document.querySelector('p');
let h2Ref = document.querySelector('h2')


//Monitoramento de cliques
bodyRef.addEventListener('change', blabckMode)


//mudar texto do botão
function mudaTextoBotao() {
  if (checkbox.textContent === "Modo escuro") {
    checkbox.textContent = "Modo claro";
  } else {
    checkbox.textContent = "Modo escuro";
  }
}


//Mudando todos os itens 
function mudaItens() {
  itemRef.forEach(function (selecionaItens) {
    selecionaItens.classList.toggle("itemDarkMode")
  })
}

//Mudando todos os paragráfos
function mudaParagrafos() {
  pRef.forEach(function (mudaParagrafo) {
    mudaParagrafo.classList.toggle("textDarkMode")
  })
}
//Mudando todos os H's 2
function mudaTodosH2() {
  h2Ref.forEach(function (mudaHs2) {
    mudaHs2.classList.toggle("textDarkModeh2")
  })
}


//Função para ativar modo escuro
function blabckMode() {
  mudaTextoBotao();
  bodyRef.classList.toggle('bgDarkMode');
  h1Ref.classList.toggle('titleDarkMode');
  itemRef.classList.toggle('itemDarkMode');
  pRef.classList.toggle('textDarkMode');
  h2Ref.classList.toggle('textDarkModeh2');
  mudaItens();
  mudaParagrafos();
  mudaTodosH2();
}

//mesa 06 
let contantRef = document.querySelector('#contantRef');

let felinos = [
  {
    titulo: 'O leão',
    descricao: `O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero
    gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África
    subsahariana
    (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da
    Índia.`,
    url: './imagens/leon.jpg'
  },
  
]
for (let felino of felinos) {
  contantRef.innerHTML += `
    <div class="item">
      <img src="${felino.url}">
      <h2>${felino.titulo}</h2>
      <p>${felino.descricao}</p>
    </div>
  `
}