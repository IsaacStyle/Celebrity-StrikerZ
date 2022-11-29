/*----- constants -----*/
// Sp = Star Power
const p1Deck = []
const p2Deck = []
const p1Shuffle = []
const p2Shuffle = []
const globalShuffle = []
class Card {
    constructor(name, atk, def, sp, accuracy, dodge, ability, abilityText) {
        this.name = name
        this.atk = atk
        this.def = def
        this.spcost = sp
        this.accuracy = accuracy
        this.dodge = dodge
        this.ability = ability
        this.abilityText = abilityText
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
cardib: new Card("Cardi B.",3,3,10,100,0,false,"No ability"),
nicki: new Card("Nicki Minaj",4,5,20,100,0,false,"No ability"),
rock: new Card("Dwayne 'The Rock' Johnson",8,8,40,100,0,false,"No ability"),
thor: new Card("Chris Helmsworh", 4,8,30,100,0,true,"Any card attacked by this card loses 2 atk and 50% accuracy."),
hart: new Card("Kevin Hart", 2,2,10,100,50,true,"This card has a 50% chance to dodge any attack. Takes no damage while attacking."),
peter: new Card("Peter Dinklage",2,1,0,100,0,true,"This card requires no star power to cast"),
megan: new Card("Megan The Stallion",3,4,20,true,"This card can perform 2 attacks per turn"),
nas: new Card("Lil Nas X",5,5,30,100,20,true,"While on the stage, your opponent's cards lose 20% accuracy. This card has a 20% chance to dodge any attack."),
terminator: new Card("Arnorld Shwartzenager?",10,10,40,40,0,true,"Only has a 40% chance to hit any attack."),
betty: new Card("Betty White",2,2,10,100,0,true,"Increase your life by 3 points while in battle."),
obama: new Card("Barrack Obama",6,6,40,100,0,true,"Raises the attack of all cards on your stage by 2"),
taylor: new Card("Taylor Swift",5,5,30,100,0,true,"Raises your starpower by 10 when cast and on every turn she remains on the field."),
trump: new Card("Donald Trump",6,6,40,100,0,true,"Raises the defense of all cards on your stage by 2."),
gaga: new Card("Lady Gaga",6,7,30,100,0,false,"No Ability"),
harry: new Card("Daniel Radcliffe",2,4,20,100,0,true,"Increases the def of all your cards by 1."),
jim: new Card("Jim Carey",4,2,10,100,0,false,"No Ability"),
tom: new Card("Tom Cruise",5,4,20,70,0,true,"Has a 70% chance to hit any attack."),
rdj: new Card("Robert Downey Jr.",2,5,20,100,0,true,"You gain 5 star power for each battle this card is a part of."),
super: new Card("Henry Cavil",5,8,30,100,0,false,"No Ability"),
morgan: new Card("Morgan Freeman",3,2,10,100,30,true,"Has a 30% chance to dodge any attack."),
}
Object.entries(celebs).forEach((celeb) => {
    globalShuffle.push(celeb)
}
)

/*----- state variables -----*/
let player1 = 30
let player2 = 30
let sp1 = 20
let sp2 = 20
let spGain = 20

/*----- functions -----*/


function shuffleCards(deck) {
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
} 
}


function chooseDecks(player) {
    globalShuffle.forEach((celeb) => {
        while (player.length <= 9) {
            if (Math.random() > 0.3) {
    player.push(celeb)
    break
    } else {
        break
    }
} shuffleCards(globalShuffle)
while (p1Deck.length <= 9) {
    if (Math.random() > 0.3) {
    player.push(celeb)
    break
    } else {
        break
    }
}
})
}


/*----- cached elements  -----*/


  /*----- event listeners -----*/

// Main Code
shuffleCards(globalShuffle)
chooseDecks(p1Deck)
chooseDecks(p2Deck)
shuffleCards(p1Deck)
shuffleCards(p2Deck)

