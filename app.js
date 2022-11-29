/*----- constants -----*/
class Card {
    constructor(name, atk, def, sp, ability) {
        this.name = name
        this.atk = atk
        this.def = def
        this.spcost = sp
        this.ability = ability
    }
}
const cardib = new Card("Cardi B.",4,5,10,true)
console.log(cardib)
cardib.fire = true
console.log(cardib)

  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/