const colors = require('colors');
const ask = require('readline-sync');

function space(){
  const largeSpacing = 
  
  
  (`                                                                                                                                                                                                                                                                                                                       `)
  console.log(largeSpacing)
}


class Player {
  constructor(name, health, balance, adam, eve, pistolRounds, shotgunShells){
      this.name = name;
      this.health = health;  
      this.balance = balance; 
      this.adam =  adam;
      this.eve = eve;
      this.pistolRounds = pistolRounds;
      this.shotgunShells = shotgunShells;
  }  
  
  deposit(amount){
      this.balance += amount
  }

  getBalance(){
      return this.balance
  }

}
const player = new Player("", 100, 100, 0, 0, 0, 0)


let inventory = [`First Aid Kit`];
let weapons = [`Wrench`]

let pistolSoldOut = [`Pistol`.bold]
let shotgunSoldOut = [`Shotgun`.bold]

let circusOfValues = [`Bandage`.brightRed.bold, `First Aid Kit`.brightYellow.bold, `${pistolSoldOut}`.brightRed, `10 Pistol Rounds`.brightBlue.bold, `${shotgunSoldOut}`.brightCyan, `3 Shotgun Bucks`.brightRed.bold, `Scotch`.brightCyan.bold, `Check Inventory and Collection`.brightWhite.bold];


function checkBalance(){
  let currentBalance1 = `$${player.balance}`.brightGreen 
  return currentBalance1
}

function pauseFunction(){
  let pauseText = `GAME PAUSED`.underline.cyan.bold
  let currentBalance = `$${player.balance}`.brightGreen 
  let currentHealth = `${player.health}hp / 100hp`.brightRed
  let pistolRounds = `${player.pistolRounds}`.bold
  let shotgunShells = `${player.shotgunShells}`.bold
  
  
  let pauseGame = 
  `-------------------------------------------------------------------------------------------------------------------------   
                                                        ${pauseText}   

                                                          `+`HEALTH:`.underline.bold+ ` 
                                                     
                                                        ${currentHealth} 
                                                
                                                       `+`BANK BALANCE:`.underline.bold+ `${currentBalance} 
                                                              
                                                          
                                                       `+`WEAPONS:`.underline.bold+` ${weapons}
                                                            
                                              
                                                        `+`AMMUNITION:`.underline.bold+`

                                          Pistol Rounds: [${pistolRounds}] `.red.bold+`||`+` Shotgun Shells: [${shotgunShells}]`.cyan.bold +`

                                                        `+`INVENTORY:`.underline.bold + ` 
                                                      
                  ${inventory}`.bold+`
                                                                
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


function circusFunction(){

let circusOfValuesMenu = 

`-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`.rainbow.underline.bold +                                                                       

` |`.rainbow.bold + `                                                                                                                 
|`.rainbow.bold + `                        
 |`.rainbow.bold + `
|`.rainbow.bold + `                                                                          ` + `Ⓦ Ⓔ Ⓛ Ⓒ Ⓞ Ⓜ Ⓔ  Ⓣ Ⓞ  Ⓣ Ⓗ Ⓔ  Ⓒ Ⓘ Ⓡ Ⓒ Ⓤ Ⓢ  Ⓞ Ⓕ  Ⓥ Ⓐ Ⓛ Ⓤ Ⓔ Ⓢ ! `.rainbow.underline.bold + `
 |`.rainbow.bold + `                                                                     ====================================== `.bold + `              
|`.rainbow.bold + `
 |`.rainbow.bold + `                                                                                [1]`+` Bandage `.brightRed.bold  + ` $2 `.brightGreen.bold+`
|`.rainbow.bold + `                                                                                [2]`+` First Aid Kit `.brightYellow.bold  + ` $5 `.brightGreen.bold+`
 |`.rainbow.bold + `                                                                                [3]`+` ${pistolSoldOut} `.brightRed  + ` $10 `.brightGreen.bold+`                    
|`.rainbow.bold + `                                                                                [4]`+` 10 Pistol Rounds `.brightBlue.bold  + `$3 `.brightGreen.bold+`                                
 |`.rainbow.bold + `                                                                                [5]`+` ${shotgunSoldOut} `.brightCyan.bold + ` $20 `.brightGreen.bold+`                           
|`.rainbow.bold + `                                                                                [6]`+` 3 Shotgun Bucks `.brightRed.bold  + ` $4 `.brightGreen.bold+`                                                       
 |`.rainbow.bold + `                                                                                [7]`+` Scotch `.brightCyan.bold + `$2`.brightGreen.bold + `                                                                                                                              
|`.rainbow.bold + `
 |`.rainbow.bold + `
` +             `-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`.rainbow.underline.bold

    console.log(circusOfValuesMenu.bgMagenta.bold)

};

space()
starterQuestion()
function starterQuestion(){
let circusOrNot = ask.keyInSelect([`Visit ` + `CIRCUS OF VALUES`.rainbow.bold, `No`], `Would you like to visit the ` + `CIRCUS OF VALUES`.rainbow.bold + `?`)

  if(circusOrNot < -1){
  starterQuestion()
    
  }

  if(circusOrNot === 0){
    space()
    circusFunction()
    circusChoices()
    space()
  }
  
  if (circusOrNot === 1){

  }

  
}

function checkInv(){
  space()
  let checkInvOptions = [`Go back to ` + `CIRCUS OF VALUES`.rainbow.bold, `Exit inventory and resume game`]
  pauseFunction()
  let checkInvChoice = ask.keyInSelect(checkInvOptions, `You are currently in your inventory. What would you like to do next?`)
  if(checkInvChoice === 0){
    circusFunction()
    circusChoices()
  } else if (checkInvChoice === 1){
    // proceed()
  } else if (checkInvChoice <= -1){
    console.log(`PICK ONE OF THE OPTIONS ABOVE, NOT THIS ONE!`.red.underline.bold)
    checkInv()
    console.log(`PICK ONE OF THE OPTIONS ABOVE, NOT THIS ONE!`.red.underline.bold)
  }
}

function circusChoices(){
  let vendingChoice = ask.keyInSelect(circusOfValues, `What would you like to purchace from the ` + `CIRCUS OF VALUES`.rainbow.bold + `?` + ` You currently have ${checkBalance()}` )

  if(vendingChoice <= -1){
    space()
    console.log(`YOU CANNOT CANCEL AT THIS TIME. CHOOSE AGAIN.`)
    circusFunction()
    circusChoices()
  }; 
  
  if(vendingChoice === 0 && player.balance >= 2 || vendingChoice === 0 && player.balance <= 1){
    if(player.balance <= 1){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow .bold + `--You don't have enough money to purchase this item.--` .bold)
      circusChoices()
    }

    inventory.push(` Bandage`)
    player.balance -= 2
    space()
    console.log(`${circusOfValues[0]} has ben added to your inventory.`)
    space()
    whatNext()
  };  
  
  if (vendingChoice === 1 && player.balance >= 5 || vendingChoice === 1 && player.balance < 4){
    if(player.balance < 4){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow .bold + `--You don't have enough money to purchase this item.--` .bold)
      space()
      circusChoices()
    }
    
    inventory.push(` First Aid Kit`)
    player.balance -= 5 
    space()
    console.log(`${circusOfValues[1]} has ben added to your inventory.`)
    space()
    whatNext()
  };

  if (vendingChoice === 2 && player.balance >= 10 || vendingChoice === 2 && player.balance < 9){
    if(player.balance < 9){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow .bold + ` --You don't have enough money to purchase this item.--` .bold) 
      space()
      circusFunction()
      circusChoices()
      space()
    }

    pistolSoldOut = `SOLD OUT`

    player.balance -= 10
    
    if(vendingChoice === 2 && weapons.includes(` Pistol`)){
      space()
      console.log(`This item is `+`SOLD OUT`.brightRed.underline.bold+` dummy.`)
      space()
      whatNext()
    } else {
    player.balance += 10
    weapons.push(` Pistol`)
    space()
    console.log(`Purchace Complete. ${circusOfValues[2]} has now been aquired.`)
    space()
    whatNext()
    }
    
  }; 
  
  if(vendingChoice === 3 && player.balance >= 3 || vendingChoice === 3 && player.balance < 2){
    if(player.balance < 2){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.bold.briightWhite + `--You don't have enough money to purchase this item.--` .bold) 
      space()
      circusChoices()
    }  
    
    player.pistolRounds += 10
    player.balance -= 3
    space()
    console.log(`${circusOfValues[3]} has ben added to your ammunition total.`)
    space()
    whatNext()
  }; 
  
  if(vendingChoice === 4 && player.balance >= 20 || vendingChoice === 4 && player.balance < 19){
    if(player.balance < 19){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow.bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.bold.brightWhite.bold + `--You don't have enough money to purchase this item.--` .bold) 
      circusChoices()
      space()
    }

    player.balance -= 20

      if(vendingChoice === 4 && weapons.includes(` Shotgun`)){
        space()
        console.log(`This item is `+`SOLD OUT`.brightRed.underline.bold+` dummy.`)
        space()
        whatNext()
      } else {
        weapons.push(` Shotgun`)
        space()
        console.log(`${circusOfValues[4]} has now been aquired.`)
        shotgunSoldOut = `SOLD OUT`
        space()
        whatNext()
        space()
      }
      
  }; 
  
  if(vendingChoice === 5 && player.balance >= 4 || vendingChoice === 5 && player.balance < 2 ){
    if(player.balance < 2){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow.rainbow.bold + `--You don't have enough money to purchase this item.--` .bold) 
      space()
      circusChoices()
      space()
    }  

    player.balance -= 4
    player.shotgunShells += 3
    space()
    console.log(`${circusOfValues[5]} has ben added to your ammunition total.`)
    space()
    whatNext()
  };

  if (vendingChoice === 6 && player.balance > 3 || vendingChoice === 6 && player.balance < 1 ){
    if(player.balance < 1){
      space()
      console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.bold.brightWhite.bold + `--You don't have enough money to purchase this item.--` .bold).brightRed
      space()
      circusChoices()
      space()
    } 

    inventory.push(` Scotch`)
    player.balance -= 2
    space()
    console.log(`${circusOfValues[6]} has ben added to your inventory.`)
    space()
    whatNext()
  }; 
  
  if(vendingChoice === 7){
    space()
    checkInv()
    space()
  };

};

function whatNext(){
  space()
  let whatQuestion = ask.keyInSelect([`Go back to ` + `CIRCUS OF VALUES`.rainbow.bold, `Exit`], `Would you like to purchase something else?`)
  space()

  if(whatQuestion <= -1){
    space()
    console.log(`ERROR. CANNOT CANCEL AT THIS TIME.`.brightRed.bold)
    space()
    whatNext()
    space()
  };

  if(whatQuestion === 0){
    space()
    circusFunction()
    space()
    circusChoices()
    space()
  };
  
  if(whatQuestion === 1){
    space()
    //proceed()
  };
  
}



                                                   

                     