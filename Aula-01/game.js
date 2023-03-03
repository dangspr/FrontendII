var userWannaPlay = confirm("Você ousa me desafiar ?");

function startGame() {
  // console.log('O jogo começou ')
  let userPlay =Number( prompt("O que você deseja jogar? \n 1 = pedra \n 2 = papel \n 3= tesoura" ));
 console.log(userPlay)
 let machinePlay = Math.floor(Math.random() * 3) + 1 ;
 console.log(machinePlay)

 
 if(   userPlay === 1 && machinePlay === 2){
    console.log('Você perdeu! ')
 } else if (userPlay === 2 && machinePlay === 3){
    console.log('Você perdeu!')

 }else if(userPlay === 3 && machinePlay === 1){
    console.log(' Você perdeu! ')

 }
 else if (userPlay === machinePlay){
    console.log('Deu empate!')
 } else {
    console.log('Você venceu!! ')
 }
}


if (userWannaPlay === true) {
  // console.log('Ele aceitou ')
  startGame();
} else {
  alert("Humanos são tão covardes!");
}

