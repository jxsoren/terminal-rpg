const colors = require('colors');
const ask = require('readline-sync');

let inventory = [`Toast`]


class Player {
    constructor(name, health, attack, balance, adam, eve, pistolRounds, shotgunShells){
        this.name = name;
        this.health = health;  
        this.attack = attack;
        this.balance = balance; 
        this.adam = adam;
        this.eve = eve;
        this.pistolRounds = pistolRounds;
        this.shotgunShells = shotgunShells;
    }  
    
    hasPistol = false;
    hasShotgun = false;
  
    deposit(amount){
        this.balance += amount
    }
  
    
  
  }
  const player = new Player("Player", 100, 10, 40, 0, 0, 2, 2)
  let currentHealth = `${player.health} HP/100 HP`.brightRed
  let pauseText = `GAME PAUSED`.underline.cyan.bold

  function getBalance(){
    return player.balance
}


    function pauseMyGame(){
  let pauseGame = `-------------------------------------------------------------------------------------------------------------------------   
  ${pauseText}   

`+`HEALTH:`.underline.bold+ ` ${currentHealth} 

`+`BANK BALANCE:`.underline.bold+` $${getBalance()}

`+`WEAPONS:`.underline.bold+` 

`+`INVENTORY:`.underline.bold + ` 
${inventory}
          
`+`CURRENT OBJECTIVE:`.underline.bold +`
Help Atlas and his crew gather the resourses necessary to create the fuel mixture to fuel and power his getaway submarine 
to escape Rapture before the splicers find and kill Atlas and his crew. Collect 3 samples of Eve from the dead bodies of 
spider splicers, 2 bottles of Adam and then bring Atlas the materials.

Materials
${player.adam}/2 Adam Bottles
${player.eve}/3 Eve Samples

-------------------------------------------------------------------------------------------------------------------------
            `
        console.log(pauseGame)

};


player.balance -= 20
inventory.push(`Jam`)

pauseMyGame()

