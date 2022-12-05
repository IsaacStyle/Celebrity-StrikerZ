/*----- constants -----*/
// Sp = Star Power
const p1Deck = []
const p2Deck = []
const p1Shuffle = []
const p2Shuffle = []
const globalShuffle = []
const p1Life = document.querySelector('.p1Life')
const p2Life = document.querySelector('.p2Life')
const p1Hand = document.querySelectorAll('#p1Hand')
const p2Hand = document.querySelectorAll('#p2Hand')
const player1Zones = document.querySelectorAll('#p1Z')
const player2Zones = document.querySelectorAll('#p2Z')
const turnSwap = document.querySelector('button')

class Card {
    constructor(name, atk, def, spcost, accuracy, dodge, ability, abilityText, img, data, canAtk) {
        this.name = name
        this.atk = atk
        this.def = def
        this.spcost = spcost
        this.accuracy = accuracy
        this.dodge = dodge
        this.ability = ability
        this.abilityText = abilityText
        this.img = img
        this.data = data
        this.canAtk = canAtk
    }
    takeDamage(num) {
        return this.def -= num
    }
    healDamage(num) {
        return this.def += num
    }
    gainAttack(num) {
        return this.atk += num
    }
    loseAttack(num) {
        return this.atk -= num
    }
    changeAccuracy(num) {
        this.accuracy -= num
    }
    changeDodge(num) {
        this.dodge += num
    }
    removeAbility() {
        this.ability = false
    }

}
const celebs = {
cardib: new Card("CardiB.",3,3,10,100,0,false,"No ability", './Card Images/cardib.jpeg', 'a',1),
nicki: new Card("Nicki Minaj",4,5,20,100,0,false,"No ability", './Card Images/nicki-minaj.webp', 'b',1),
rock: new Card("Dwayne Johnson",8,8,40,100,0,false,"No ability", './Card Images/therock.webp', 'c',1),
thor: new Card("Chris Helmsworth", 4,8,30,100,0,true,"Any card attacked by this card loses 2 atk and 50% accuracy.", './Card Images/thor.jpeg', 'd',1),
hart: new Card("Kevin Hart", 2,2,10,100,50,true,"This card has a 50% chance to dodge any attack. Takes no damage while attacking.", './Card Images/960x0.jpeg', 'e',1),
peter: new Card("Peter Dinklage",2,1,0,100,0,true,"This card requires no star power to cast", './Card Images/peter.webp', 'f',1),
megan: new Card("Megan The Stallion",3,4,20,100,0,true,"This card can perform 2 attacks per turn", './Card Images/megan.jpeg', 'g',2),
nas: new Card("Lil Nas X",5,5,30,100,20,true,"While on the stage, your opponent's cards lose 20% accuracy. This card has a 20% chance to dodge any attack.", './Card Images/nas.jpeg', 'h',1),
terminator: new Card("Arnorld Shwartzenegger",10,10,40,40,0,true,"Only has a 40% chance to hit any attack.", './Card Images/terminator.webp', 'i',1),
betty: new Card("Betty White",1,3,10,100,0,true,"Increase your life by 3 points while in battle.", './Card Images/betty.webp', 'j',1),
obama: new Card("Barack Obama",6,6,40,100,0,true,"Raises the attack of all cards on your stage by 2", './Card Images/obama.jpeg', 'k',1),
taylor: new Card("Taylor Swift",5,5,30,100,0,true,"Raises your starpower by 10 when cast and on every turn she remains on the field.", './Card Images/taylor.webp', 'l',1),
trump: new Card("Donald Trump",6,6,40,100,0,true,"Raises the defense of all cards on your stage by 2.", './Card Images/trump.jpeg','m',1),
gaga: new Card("Lady Gaga",6,7,30,100,0,false,"No Ability", './Card Images/gaga.jpeg', 'n',1),
harry: new Card("Daniel Radcliffe",2,4,20,100,0,true,"Increases the def of all your cards by 1.", './Card Images/harry.jpeg','o',1),
jim: new Card("Jim Carey",4,2,10,100,0,false,"No Ability", './Card Images/jim.webp', 'p',1),
tom: new Card("Tom Cruise",5,4,20,70,0,true,"Has a 70% chance to hit any attack.", './Card Images/tom.jpeg', 'q',1),
rdj: new Card("Robert Downey Jr.",2,5,20,100,0,true,"You gain 5 star power for each battle this card is a part of.", './Card Images/rdj.webp', 'r',1),
super: new Card("Henry Cavil",5,8,30,100,0,false,"No Ability", './Card Images/superman.jpeg', 's',1),
morgan: new Card("Morgan Freeman",3,2,10,100,30,true,"Has a 30% chance to dodge any attack.", './Card Images/morgan.png', 't',1),
}
Object.entries(celebs).forEach((celeb) => {
    globalShuffle.push(celeb)
}
)

/*----- state variables -----*/
let playerTurn = true
let turn = 1
let player1Life = 30
let player2Life = 30
let sp1 = 25
let sp2 = 25
let spGain = 20


/*----- functions -----*/
// Drag Code
function onDragOver(ev) {
    ev.preventDefault()
  }
  
  function onDragStart(ev) {
    if (playerTurn === true) {
        if (sp1 >= ev.path[0].card.spcost && ev.path[1].id == 'p1Hand' || ev.path[1].id == 'p1Z') {
    ev.dataTransfer.setData("text", ev.target.id,)
    console.log(ev.path[0].card)
      }
    }
    if (playerTurn === false) {
        if (sp2 > ev.path[0].card.spcost && ev.path[1].id == 'p2Hand' || ev.path[1].id == 'p2Z') {
    ev.dataTransfer.setData("text", ev.target.id,)
    console.log(ev.path[1].id)
      }
    }
}
  
  function onDrop(ev) {
      let data = ev.dataTransfer.getData("text")
      if (playerTurn === true) {
          if (ev.path[0].innerHTML == '' && ev.target.className != document.querySelector('.cardimg').className && ev.target.id == 'p1Z' && document.getElementById(data).parentNode.id == 'p1Hand') {
              ev.preventDefault()
              console.log(document.getElementById(data).parentNode.id)
            ev.target.appendChild(document.getElementById(data))
            sp1 -= document.getElementById(data).card.spcost
        }
    console.log(ev.path[0].card)
    
  }

  if (playerTurn === false) {
    if (ev.path[0].innerHTML == '' && ev.target.className != document.querySelector('.cardimg').className && ev.target.id == 'p2Z' && document.getElementById(data).parentNode.id == 'p2Hand') {
        ev.preventDefault()
        console.log(document.getElementById(data).parentNode.id)
      ev.target.appendChild(document.getElementById(data))
      sp2 -= document.getElementById(data).card.spcost
  }
}
  console.log(sp1, sp2)
}

  function onDropBattle(ev) {
      let data = ev.dataTransfer.getData("text")
    if (ev.path[1].id != document.getElementById(data).parentNode.id && turn != 1 && ev.target.id != 'p1Life' && ev.target.id != 'p2Life') {
        ev.preventDefault()
        let atkr = document.getElementById(data).card
        let defr = ev.path[0].card
        console.log(ev.path[1])
        console.log(document.getElementById(data).childNodes)
        if (document.getElementById(data).id != ev.target.id && atkr.canAtk > 0) {
            console.log(document.getElementById(data).card)
            console.log(ev.path[0].card)
            battle(atkr,defr)
        }
        document.getElementById(data).childNodes[9].innerText = `${atkr.def}`
        document.getElementById(ev.target.id).childNodes[9].innerText = `${defr.def}`
        document.getElementById(data).childNodes[7].innerText = `${atkr.atk}`
        document.getElementById(ev.target.id).childNodes[7].innerText = `${defr.atk}`
        if (atkr.def <= 0) {
            document.getElementById(data).parentNode.innerHTML = ""
            }
        if (defr.def <= 0) {
            ev.path[1].innerHTML = ""
            }
    } 
    if (ev.target.id == "p1Life" && document.getElementById(data).parentNode.id == 'p2Z' && turn != 1 && document.getElementById(data).card.canAtk > 0) {
        ev.preventDefault()
        let atkr = document.getElementById(data).card
        directDamage(atkr, player1Life)
    }
    if (ev.target.id == "p2Life" && document.getElementById(data).parentNode.id == 'p1Z' && turn != 1 && document.getElementById(data).card.canAtk > 0) {
        ev.preventDefault()
        let atkr = document.getElementById(data).card
        directDamage(atkr, player2Life)
    } console.log(player1Life, player2Life)
  }
//   if (document.querySelectorAll('.zone')[0].innerHTML == "") {
//     console.log("ello")
//   }
//   Drag Code End

// drag battle code

function battle(card1,card2) {
    if (Math.random() < card1.accuracy / 100 && Math.random() > card2.dodge / 100) {
        card2.takeDamage(card1.atk)
        console.log(card2.def)
    }
    if (Math.random() < card2.accuracy / 100 && Math.random() > card1.dodge / 100) {
        card1.takeDamage(card2.atk)
        console.log(card1.def)
    }
card1.canAtk -= 1
}

function shuffleCards(deck) {
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
} 
}


function chooseDecks(player, player2) {
    for(let i = 0; i < 10; i++) {
        player.push(globalShuffle[i])
    }
    for(let i = 10; i < 20; i++) {
        player2.push(globalShuffle[i])
    }
}


function directDamage(card1) {
    if (Math.random() < card1.accuracy / 100  ) {
        console.log(player1Life, player2Life)
        if (playerTurn === false) {
            player1Life -= card1.atk
            p1Life.innerText = `Player 1 Life: ${player1Life}`
            console.log(player1Life, player2Life)
        } else {
            player2Life -= card1.atk
            p2Life.innerText = `Player 2 Life: ${player2Life}`  
        }
    }
    card1.canAtk -= 1
    // console.log(card1.canAtk)
    console.log(player1Life, player2Life)
}

function initialDraw() {
    let j = 0
    for(let i = 0;i < 5;i++) {
        const p1Card = p1Deck[i][1];
        p1Hand[j].innerHTML = `<div class="card" id="${p1Card.data}${j}" data-nam="${p1Card.data}" draggable="true" ondragstart="onDragStart(event)" ondrop="onDropBattle(event)" >
        <div class="spcost">${p1Card.spcost}</div>
        <div class="cardimgbox" draggable='false'>
            <img class="cardimg" src="${p1Card.img}" alt="${p1Card.name}" draggable='false'>
        </div>
        <div class="ability"><span class="name">${p1Card.name}<br></span> ${p1Card.abilityText} </div> 
        <div class="atk">${p1Card.atk}</div>   
        <div class="def">${p1Card.def}</div>
        </div>`
        const p1cards = document.querySelectorAll('#p1Hand .card');
        p1cards[i].card = p1Card;
        j += 1

    } 
    for(let i = 0;i < 5;i++) {
        p1Deck.splice(0,1);
    }

   
    for(let i = 0;i < 5;i++) {
        const p2Card = p2Deck[i][1];
        p2Hand[i].innerHTML = `<div class="card" id="${p2Card.data}${j}" draggable="true" ondragstart="onDragStart(event)" ondrop="onDropBattle(event)">
        <div class="spcost">${p2Card.spcost}</div>
        <div class="cardimgbox">
            <img class="cardimg" src="${p2Card.img}" alt="${p2Card.name}" draggable='false'>
        </div>
        <div class="ability"><span class="name">${p2Card.name}<br></span> ${p2Card.abilityText} </div> 
        <div class="atk">${p2Card.atk}</div>   
        <div class="def">${p2Card.def}</div>
        </div>`
        

        const p2cards = document.querySelectorAll('#p2Hand .card');
        p2cards[i].card = p2Card;
        j += 1
    }
    for(let i = 0;i < 5;i++) {
        p2Deck.splice(0,1)
    }
}
function passTurn() {
    playerTurn = !playerTurn
    turn += 1
    console.log(turn, playerTurn)
}
function onTurn() {
    passTurn()
    if (playerTurn === true) {
        player1Zones.forEach((zone) => {
            if (zone.innerHTML != "") {
            zone.firstChild.card.canAtk = 1
                if (zone.firstChild.card.name == "Megan The Stallion") {
                    zone.firstChild.card.canAtk = 2
                }
            console.log(zone.firstChild.card.canAtk)
            sp1 += spGain
            }
        })
    }
    if (playerTurn === false) {
        player2Zones.forEach((zone) => {
            if (zone.innerHTML != "") {
            zone.firstChild.card.canAtk = 1
                if (zone.firstChild.card.name == "Megan The Stallion") {
                    zone.firstChild.card.canAtk = 2
                }
            console.log(zone.firstChild.card.canAtk)
            if (turn != 2) {
            sp2 += spGain  
            }  
            }
        })
    }
}
/*----- cached elements  -----*/


  /*----- event listeners -----*/
  turnSwap.addEventListener('click', onTurn)

//*-- Main Code --*\\
shuffleCards(globalShuffle)
console.log(globalShuffle)
chooseDecks(p1Deck, p2Deck)
shuffleCards(p1Deck)
shuffleCards(p2Deck)
// console.log(p1Deck[1][1])
// battle(p1Deck[0][1],p2Deck[0][1])
initialDraw()

