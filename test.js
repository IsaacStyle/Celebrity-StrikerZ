let player1Life = 30
let player2Life = 30
const person = {
     atk: 3,
     accuracy: 100,
     canAtk: 1,
}
playerTurn = true


function directDamage(card1) {
    if (Math.random() < card1.accuracy / 100  ) {
        
        console.log(player1Life, player2Life)
        if (playerTurn === true) {
            player1Life -= card1.atk
            // p1Life.innerText = `Player 1 Life: ${playerLife}`
            console.log(player1Life, player2Life)
        } else {
            // p2Life.innerText = `Player 2 Life: ${playerLife}`  
        }
    }
    card1.canAtk -= 1
    // console.log(card1.canAtk)
    console.log(player1Life, player2Life)
}
directDamage(person)
directDamage(person)
directDamage(person)