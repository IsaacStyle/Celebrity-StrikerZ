/*----- constants -----*/
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

}
const cardib = new Card("Cardi B.",4,5,10,100,0,false,"No ability")
console.log(cardib)


  /*----- state variables -----*/
let player1 = 30
let player2 = 30
let sp1 = 20
let sp2 = 20

  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/