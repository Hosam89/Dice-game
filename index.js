const playerOneImg = document.querySelector('.img1')
const playerTwoImg = document.querySelector('.img2')
const enterPlayerOne = document.querySelector('#player1')
const enterPLayerTwo = document.querySelector('#player2')
const throwAgain = document.querySelector('.throw');
const play = document.querySelector('.play')

const playerThrow = ()=>{
    return Math.floor(Math.random() * 6) + 1
}




const refreshPage = ()=>{
    window.location.reload()
}

play.addEventListener('click' , function () {
    document.querySelector('#playGame').style.display= 'none'
    
    document.querySelectorAll('.dice').forEach(box =>{
        box.style.display = 'block'
    })
    document.querySelector('.player1').innerText = enterPlayerOne.value
    document.querySelector('.player2').innerText = enterPLayerTwo.value
})



throwAgain.addEventListener('click' , function(){
    
    //Player One Thrwo :
const playerOne = playerThrow()
    switch(playerOne){
        case 1:
            playerOneImg.src = "./images/dice1.png";
            break;
        case 2:
            playerOneImg.src = "./images/dice2.png";
            break;
        case 3:
            playerOneImg.src = "./images/dice3.png";
            break;

        case 4:
            playerOneImg.src = "./images/dice4.png";
            break;

        case 5:
            playerOneImg.src = "./images/dice5.png";
            break;

        case 6:
            playerOneImg.src = "./images/dice6.png";
            break;
        default:
            alert('not a Valide number')

    }


const playerTwo = playerThrow()

switch(playerTwo){
    case 1:
        playerTwoImg.src = "./images/dice1.png";
        break;
    case 2:
        playerTwoImg.src = "./images/dice2.png";
        break;
    case 3:
        playerTwoImg.src = "./images/dice3.png";
        break;

    case 4:
        playerTwoImg.src = "./images/dice4.png";
        break;

    case 5:
        playerTwoImg.src = "./images/dice5.png";
        break;

    case 6:
        playerTwoImg.src = "./images/dice6.png";
        break;
    default:
        alert('not a Valide number')

}




if(playerOne > playerTwo){
    document.querySelector('.winner').innerText = `Winner is ${enterPlayerOne.value}`
}else if(playerOne < playerTwo){
    document.querySelector('.winner').innerText = `Winner is ${enterPLayerTwo.value}`

}else{
    document.querySelector('.winner').innerText = 'Tie'
    
}
})
