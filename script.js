//Variaveis criadas
var charSelected = document.getElementById("char-selected");
var charSelected2 = document.getElementById("char-selected2");
var charBackground = document.getElementById("char-background");
var charBackground2 = document.getElementById("char-background2");
var charName = document.getElementById("char-name");
const squares = document.querySelectorAll(".squares");
let chosen1 = 0;
const personagens = [
  "Beemo","Princesa Caroço","Finn","Gunter","Jake","Jujuba","Lady Iris","Marceline","Mordomo Menta","Rei Gelado"
]
const audioChanger = new Audio("./audio/change-sound.wav");

// Essa função deixa faz a troca do player ao clique de escolha do mouse
function clickHandler(e){
  console.log("escolhido!");
  if(chosen1==0){
    charSelected = charSelected2;
    charBackground = charBackground2
    charName = document.getElementById("char-name2");
    chosen1++;
  }else{
    charSelected = 0;
    charSelected2 = 0;
    charName = 0;
    charBackground = 0;
  }
}
//função que troca o source da imagem para realizar a mudança
function dynamicChange(e) {
  var figt = e.getAttribute('id');
  charSelectedString = e.id.replace("icon", "fighter");
  charSelectedBack = e.id.replace("icon","background");
  charSelected.src = `images/${charSelectedString}.png`;
  charBackground.src = `images/${charSelectedBack}.png`;
}
//função que mostra a seleção do personagem nos icones e faz a mudança dos mesmos tocando um som 
function changer(){
  audioChanger.play();
  this.classList.add("selected");
  dynamicChange(this);
}
//função em que todas as mudanças de personagem e nome são aplicadas dentro de um loop para o array de squares
for( let i = 0 ; i<squares.length; i++){
  squares[i].addEventListener("mouseover",changer);
  this.addEventListener("click",clickHandler);
  squares[i].addEventListener("mouseover",()=>{
    charName.innerText = personagens[i];
  });
}
// Função para "resetar", na verdade, só atualiza a página.
document.getElementById('reset').addEventListener('click',() => {
  location.reload();
  console.log('resetou');
})
