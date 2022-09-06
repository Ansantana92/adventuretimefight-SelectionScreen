// var finnFighter = document.getElementById('finn-icon');
// var beemoFighter = document.getElementById('beemo-icon');
// var carocoFighter = document.getElementById('caroco-icon');
// var gunterFighter = document.getElementById('gunter-icon');
// var jakeFighter = document.getElementById('jake-icon');
// var jujubaFighter = document.getElementById('jujuba-icon');
// var marcelineFighter = document.getElementById('marceline-icon');
// var ladyirisFighter = document.getElementById('ladyiris-icon');
// var mordomoFighter = document.getElementById('mordomo-icon');
// var reigeladoFighter = document.getElementById('reigelado-icon');
var charSelected = document.getElementById("char-selected");
var charSelected2 = document.getElementById("char-selected2");
var charName = document.getElementById("char-name");
const squares = document.querySelectorAll(".squares");
let chosen1 = 0;
const personagens = [
  "Beemo","Princesa Caroço","Finn","Gunter","Jake","Jujuba","Lady Iris","Marceline","Mordomo Menta","Rei Gelado"
]
const audioChanger = new Audio("./audio/change-sound.wav");

// function displayCharacter (e){
//     var p = e.target.getAttribute('class');
//     console.log(document.querySelectorAll(`.${p}`)[0]);
//     document.querySelectorAll(`.${p}`)[0].classList.toggle('appear');
// }

// function selectedCharacter (e){

//     var charSelect = e.target.getAttribute(id);
//     console.log(charSelect);
//     var charSelectedString = charSelect.replace("icon", "fighter");
//     charSelected.src = `./images/${charSelectedString}.png`;

//     // var p = e.target.getAttribute('class');
//     // console.log(document.querySelectorAll(`.${p}`)[0]);
//     // document.querySelectorAll(`.${p}`)[0].classList.toggle('appear');
// }
// function displayCharacterFinn (){
//     console.log('mouse passou');
//     console.log(persona);
//     persona.style.display = "block";
// }
// function hideCharacterFinn (){
//     persona.style.display = "none";
// }
// function displayCharacterBmo (){
//     console.log('mouse passou');
//     console.log(persona2);
//     persona2.style.display = "block";
// }
// function hideCharacterBmo (){
//     persona2.style.display = "none";
// }
// finnFighter.addEventListener('mouseover', displayCharacterFinn);
// finnFighter.addEventListener('mouseout', hideCharacterFinn);
// beemoFighter.addEventListener('mouseover', displayCharacterBmo);
// beemoFighter.addEventListener('mouseout', hideCharacterBmo);

// finnFighter.addEventListener('mouseover', displayCharacter);
// finnFighter.addEventListener('mouseout', displayCharacter);
// beemoFighter.addEventListener('mouseover', displayCharacter);
// beemoFighter.addEventListener('mouseout', displayCharacter);
// carocoFighter.addEventListener('mouseover', displayCharacter);
// carocoFighter.addEventListener('mouseout', displayCharacter);
// gunterFighter.addEventListener('mouseover', displayCharacter);
// gunterFighter.addEventListener('mouseout', displayCharacter);
// jakeFighter.addEventListener('mouseover', displayCharacter);
// jakeFighter.addEventListener('mouseout', displayCharacter);
// jujubaFighter.addEventListener('mouseover', displayCharacter);
// jujubaFighter.addEventListener('mouseout', displayCharacter);
// ladyirisFighter.addEventListener('mouseover', displayCharacter);
// ladyirisFighter.addEventListener('mouseout', displayCharacter);
// marcelineFighter.addEventListener('mouseover', displayCharacter);
// marcelineFighter.addEventListener('mouseout', displayCharacter);
// mordomoFighter.addEventListener('mouseover', displayCharacter);
// mordomoFighter.addEventListener('mouseout', displayCharacter);
// reigeladoFighter.addEventListener('mouseover', displayCharacter);
// reigeladoFighter.addEventListener('mouseout', displayCharacter);
// finnFighter.addEventListener('mouseover', selectedCharacter);
// finnFighter.addEventListener('mouseover', () => {
//     persona.classList.toggle('appear');
// });    

// charSelectedString = image.previousSibling.id.replace("grid", "char");
// charSelected.src = `images/${charSelectedString}.png`;
function clickHandler(e){
  console.log("escolhido!");
  if(chosen1==0){
    charSelected = charSelected2;
    charName = document.getElementById("char-name2");
    chosen1++;
  }else{
    charSelected = 0;
    charSelected2 = 0;
    charName = 0;
  }
}
function dynamicChange(e) {
  var figt = e.getAttribute('id');
  charSelectedString = e.id.replace("icon", "fighter");
  charSelected.src = `images/${charSelectedString}.png`;
}
function changer(){
  this.classList.add("selected");
  dynamicChange(this);
  audioChanger.play();
  console.log("Audio tocado");
}

for( let i = 0 ; i<squares.length; i++){
  squares[i].addEventListener("mouseover",changer);
  this.addEventListener("click",clickHandler);
  squares[i].addEventListener("mouseover",()=>{
    charName.innerText = personagens[i];
  });
}

document.getElementById('reset').addEventListener('click',() => {
  location.reload();
  console.log('resetou');
})
  

// charnome = personagens[i];
// console.log(charnome);
// charName.innerText = charnome;