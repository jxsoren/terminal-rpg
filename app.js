const ask = require('readline-sync');
const colors = require('colors');


// Global Variables -------------------------------------------------------------------------------------------------------------------------------------
let game0ver = false;
let inventory = [` First Aid Kit`];
let weapons = [` Wrench`.brightYellow.bold]
let pistolSoldOut = [`Pistol`.bold]
let shotgunSoldOut = [`Shotgun`.bold]



// UI/UX Spacing Functions ----------------------------------------------------------------------------------------------------------------------------

function lilSpace(){
    const lilSpacing = `
    
    `
    console.log(lilSpacing)
}

function bigSpace(){
    const bigSpacing = `                                                        
    `
    console.log(bigSpacing)
}


// Player Construction --------------------------------------------------------------------------------------------------------------------------------
class Player {
    constructor(name, health, balance, adam, eve, pistolRounds, shotgunShells, attack){
        this.name = name;
        this.health = health;  
        this.balance = balance; 
        this.adam =  adam;
        this.eve = eve;
        this.pistolRounds = pistolRounds;
        this.shotgunShells = shotgunShells;
        this.attack = attack;
    }  
    
    deposit(amount){
        this.balance += amount
    }
  
    getBalance(){
        return this.balance
    }
  
  }
  const player = new Player("", 125, 15, 0, 0, 0, 0, 0)

  if(player.balance < 0){
    player.balance = 0
}


// Enemy Construction v1
  class Enemy {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
};

  // GAME INTRO --------------------------------------------------------------------------------------------------------------------------------------------
lilSpace()
console.log(`1980s Mid-Atlantic. *You awake, finding yourself on a plane headed straight towards the Atlantic Ocean. You brace yourself for impact as the plane crashes. It worked and somehow you are still alive. You swim up to the surface as your lungs start to fill with water. You scan the horizon, spotting a lighthouse in the distance. You muster all the strength left in you and swim over to it. As you walk up to the gold plated doors, about to turn the knob, they swing open on their own. You cautiously step in and see an elevator that looks like it travels down beneath the water. Puzzled but desperate for help, you decide to enter. As you sit in the chair, the elevator shoots downward, thrusting you deep into the murky blue depths. After a few seconds of gray visibility, you see it. The majestic, underwater city that lies below the surface of the Atlantic. After hearing some bald guy yap about a man being entitled to the sweat of his brow. Weirdo. You enter a tube that presumably takes you inside. You witness what looks to be a demented man with claws slice another man in two. You were happy to survive the plane crash and now look at the mess you’re in. Sucks to suck I guess. You find a radio, pick it up and a guy named Atlas tries to give you help through an old radio that was in front of you. He starts to give instructions and asks “would you kindly?” After asking you to do anything. He's pretty nice though, must be Canadian. He informs you about how the remaining survivors are building a submarine to escape this hellhole, but they unfortunately don't have any ADAM or EVE to make the mixture they need for the fuel. He asks you to help them retrieve six ADAM and three EVE in exchange for letting you escape with them. Some obstacles lay ahead however, the only way to get ADAM that you know of is by harvesting it from these creepy little @#$%'s that the inhabitants of Rapture call “Little Sisters”. But first you'll have to kill their protectors, “Big Daddies”. Supposedly these huge, creepy monsters in an oversized Scuba Suit. The only way to get EVE is to loot the dead bodies of “Splicers”. Atlas tells you that there is a wrench just outside of the elevator that you can use as a starting weapon. He also tells you that using a “First Aid Kit” and/or “Bandages”. First aid kits will restore your health back to full, while “Bandages” will restore your health partially. You see a First Aid Kit right next to the wrench and grab them both as ATLAS informs you he will be on the radio, telling you everything you need to know. Just before you walk out though, you pick up a radio frequency on another channel. You switch over and hear a woman talking, she announces herself as Dr. Tenenbaum, Brigid Tenenbaum to be exact. She explains that she was one of the doctors who helped create the Little Sisters and while she understands the severity of her actions, she doesn't want to see them murdered for the sake of harvesting ADAM. She pleads to you, asking if you could save them instead. In return she would reward you handsomely. You think about it, pondering the type of man you are. Are you one to kill those you have the capacity to save? A little girl no less? And all for the prospect of leaving this place? You aren't a sinless man. Maybe this is where you can redeem yourself for all the harm and pain you've caused. Either way, you step out into Rapture for the first time as you take a deep breath, the musty, recycled air fills your lungs as you grip the wrench. Ready to do what's necessary.` 
.brightWhite.bgBlue)
lilSpace()
let nameData = ask.question(`*on radio* ATLAS:`.brightYellow.italic + ``.yellow.italic + ` Wait, what is your name? `.brightWhite);
player.name = nameData
lilSpace()
console.log(`*on radio* ATLAS:`.brightYellow.italic + ``.yellow.italic + ` ${player.name}`.brightCyan.bold + `? Yeah, you definitely spelled your name wrong just then, but lets get moving.`.brightWhite);
bigSpace()

console.log(`*on radio* ATLAS:`.brightYellow.italic + ``.yellow.italic + ` Okay, now that you have your wrench and health kit, you should be all set to start your hunting. Continue walking down the hall you are in by pressing the "1" key, until you eventually encounter an enemy. If you are too weak to fight or have alrady gotten all of the resorces you needed from said enemy you can just flee to live another day. Let's get a move on, kid! The Splicers are begining to discover where we are hiding.`.brightWhite)
bigSpace()
console.log(`CURRENT OBJECTIVE: Collect all materials to advance.`.brightWhite.bold)




// Pause Menu and Options -----------------------------------------------------------------------------------------------------------------------------------------

function pauseFunction(){
    let pauseText = `GAME PAUSED`.underline.cyan.bold
    let currentBalance = `$${player.balance}`.brightGreen.bold
    let currentHealth = `${player.health}`.brightGreen.bold + `/`.brightWhite.bold + ` 125 HP`.brightGreen.bold
    let pistolRounds = `${player.pistolRounds}`.bold
    let shotgunShells = `${player.shotgunShells}`.bold
    let materialsText = `MATERIALS GATHERED`.underline.bold
    
    function drinkWhiskey(){
        
        if(inventory.includes(` Old Tom Whiskey`)){
            inventory.splice(inventory.indexOf(` Old Tom Whiskey`), 1)
            lilSpace()
            console.log(`*on radio* ATLAS:`.brightYellow.italic + `Didn't your mother ever teach you any better? I'm sure she is moderately disapointed in your decision making abilities.`.brightWhite)
            lilSpace()
            console.log(`DONT'T DRINK DUMMY. IT'S BAD FOR YOUR LIVER!!! 20 HP has been deducted.`.brightRed.bold)
            lilSpace()
            player.health -= 20
        } else {
            bigSpace()
            console.log(`YOU DON'T HAVE THIS ITEM IN YOUR INVENTORY. YOU CAN'T USE IT!!!`.brightWhite.bold.bgBrightRed)
            pauseFunction()
            bigSpace()
        }
    }
    

    function smokeCig(){
        if(inventory.includes(` Cigarette`.red.bold)){
            inventory.splice(inventory.indexOf(` Cigarette`), 1)
            console.log(`*on radio* Rapture Food and Drug Administration: `.brightGreen.italic.bold + `There's a contract in every cigarette. When you light up, you sign up. Don't let tobacco control you. Brought to you by Rapture Food and Drug Administration.`)
            lilSpace()
            console.log(`10  HP has been deducted!`.brightRed.bold)
            lilSpace()
            player.health -= 10
        } else {
            console.log(`YOU DON'T HAVE THIS ITEM IN YOUR INVENTORY. YOU CAN'T USE IT!!!`.brightWhite.bold.bgBrightRed)
            pauseFunction()
        }
    }

    showInventory()
    function showInventory(){
        bigSpace()
        console.log(`--------------------------------------------------------GAME PAUSED------------------------------------------------------`.brightRed.bold)

    let pauseGame = 
    `------------------------------------------------------------------------------------------------------------------------- `.bold+`  
                                                          ${pauseText}   
  
                                                            `+`HEALTH`.underline.bold+ ` 
                                                       
                                                         ${currentHealth} 
                                                  
                                                          `+`BANK BALANCE`.underline.bold+ `
                                                         
                                                              ${currentBalance} 
                                                                                              
                                                           `+`WEAPONS`.underline.bold+` 
                                                               
                                                        ` + `[`.blue.bold + `${weapons}` + `]`.blue.bold + `
                                                              
                                                          `+`AMMUNITION`.underline.bold+`
  
                                            Pistol Rounds [${pistolRounds}] `.red.bold+`||`+` Shotgun Shells [${shotgunShells}]`.cyan.bold +`
  
                                                          `+`INVENTORY`.underline.bold + ` 
                                                        
                    [`.brightGreen.bold+`${inventory}`.magenta.bold +`                                                            ]`.bold.brightGreen+`
                                                                  
                                                       `+`CURRENT OBJECTIVE`.underline.bold +`

  Help Atlas and his crew gather the resourses necessary to create the fuel mixture to fuel and power his getaway submarine 
  to escape Rapture before the splicers find and kill Atlas and his crew. Collect 3 samples of Eve from the dead bodies of 
  spider splicers, 6 bottles of Adam from harvesting or saving little sisters, then bring Atlas the materials.`.brightYellow.bold + `
  
                                                       ${materialsText}

                                                         `+`${player.adam}`.brightCyan.bold + `/` + `6 Adam Bottles`.brightCyan.bold + `
                                                         `+`${player.eve}`.brightCyan.bold + `/` + `3 Eve Samples`.brightCyan.bold + `
  
  ------------------------------------------------------------------------------------------------------------------------- `.bold +`
                                                                    `
  
        console.log(pauseGame)
        useItemQuestion()

        function useItemQuestion(){
        let optionArr = [`Use `+`First Aid Kit`.brightGreen.bold + ` (restores health back to `+`full`.brightGreen.bold+`!)`, ``+`Use Bandage`.brightRed.bold + ` (restores + `+`30`.brightGreen.bold+` health! `+`only`.red.bold+` if in inventory!)`, `Drink `+`Old Tom Whiskey`.yellow.bold+` (`+`only`.red.bold+` if in inventoy!)`, `Smoke a `+`Cigarette`.red.bold+` (`+`only`.red.bold + ` if in inventory!)`, `Exit Inventory and `+`Resume`.brightGreen.bold+` Game`]
        const tem = ask.keyInSelect(optionArr, `Is there any item in your Inventory that you would like to use right now?`.brightWhite.bold)
        bigSpace()

        if(useItem === 0){
            lilSpace()
            restoreFitstAidKit()
            lilSpace()
            showInventory()
        } else if(useItem === 1){
            lilSpace()
            restoreBandage()
            showInventory()
        } else if(useItem === 2){
            lilSpace()
            drinkWhiskey()
            lilSpace()
            showInventory()
        } else if(useItem === 3){
            lilSpace()
            smokeCig()
            lilSpace()
            showInventory()
        } else if(useItem === 4 || useItem === -1){
            console.log(`--------------------------------------------------------GAME RESUMED------------------------------------------------------`.brightGreen.bold)
        }

     }
  }
    
};

 

  // Player Weapon Damage Values ----------------------------------------------------------------------------------------------------------------------------------

function playerWrenchDamage(){
    let min = 15;
    let max = 25;
    return Math.floor(Math.random() * (max-min+1)+min)
}
 
function playerPistolDamage(){
    let min = 35;
    let max = 45;
    player.pistolRounds -= 1
    return Math.floor(Math.random() * (min-max+1)+min)
}

function playerShotgunDamage(){
    let min = 60;
    let max = 80;
    player.shotgunShells -= 1
    return Math.floor(Math.random() * (min-max+1)+min)
}
lilSpace()


//Game Functions---------------------------------------------------------------------------------------------------------------------------------------------------
function lookforenemy(){
    const randomNum = Math.floor(Math.random() * 3) 
    if(randomNum === 0){
        lilSpace()
        attackStage(makeEnemy())
        lilSpace()
    }  else if(randomNum === 1){
        lilSpace()
        console.log(`You searched 3 rooms and no enemies. Just poor luck or bad game design? Either way, it's unfortanate for you. Keep searching and maybe you'll get lucky.`.brightWhite.bold)
        lilSpace()
    } else if(randomNum === 2){
        lilSpace()
        console.log(`WATCH OUT!!!!! A BIG DADDY JUST FELL FROM THE SKY!!! GOTCHA! HAHAHA just kidding. The're aren't any skies in Rapture. The whole city is underwater, dummy.`.brightWhite.bold)
        lilSpace()
    } else if(randomNum === 3){
        lilSpace()
        console.log(`Nothing here. Search again`.brightWhite.bold)
        lilSpace()
    }
};

function restoreBandage(){
    if(player.health <= 95){
    const checkInventory = inventory.indexOf(` Bandage`)
    if(inventory.includes(` Bandage`)){
        inventory.splice(checkInventory, 1)
    }
    console.log(`30 HP HAS BEEN RESTORED!!`.brightGreen.bold)
    player.health += 30

}   if(player.health > 96){
    lilSpace()
    console.log(`Your health isn't low enough to use a bandage!`.brightRed.bold)
    lilSpace()
}
};

function restoreFitstAidKit(){
    const inventoryIndex = inventory.indexOf(` First Aid Kit`)
    if(inventory.includes(` First Aid Kit`)){
        inventory.splice(inventoryIndex, 1)
        player.health = 125
        console.log(`Your health has been restored back to 125 HP/ 125 HP!`.brightGreen.bold)
    }

    lilSpace()
    
}


// Enemy Creation and Setting Enemy Stats ---------------------------------------------------------------------------------------------------------------------
function attackValue(){
    let min = 15;
    let max = 25;
    return Math.floor(Math.random() * (max-min+1)+min)
};

 function bigDaddyAttackValue(){
     let min = 30;
     let max = 50;
     return Math.floor(Math.random() * (max-min+1)+min)
 }


function makeEnemy(){
    const randomNum = Math.floor(Math.random() * 4)
        
        // Spider Splicer Creation ------------------------------------------------------------------
    if(randomNum === 0 || randomNum === 1){
        lilSpace()
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` WATCH OUT! A ` + `Spider Splicer`.brightRed.bold + ` just crawled out from the ceiling!!!`)
        bigSpace()
        return new Enemy("Spider Splicer", 75, attackValue())
        
        // Big Daddy Creation --------------------------------------------------------------------
    }else if(randomNum === 2){
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` Stay on gaurd, a `+`Big Daddy`.brightRed.bold+` and a `+`Little Sister`.brightRed.bold+` just walked into the room.`)
        bigSpace()
        return new Enemy("Big Daddy", 200, bigDaddyAttackValue())
        // let choice = [`Attack the `+`Big Daddy`.brightRed.bold, `Stand a little too close to the Little Sister that he is gaurding`, `RUN AWAY!!`.brightYellow.bold ,`Open `+`${player.name}'s`.brightCyan.bold+` Stats and Inventory`]
        // let index = ask.keyInSelect(choice, ` Choices, choices... so whats it gonna be?`)
        

        // if(index === 2){
        //     gameOptions()
        // } else if(index === 3){
        //     pauseFunction()
        // } else if(index === 0 || 1){
        //     lilSpace()
        //     console.log(`The `+` Big Daddy `.brightRed.bold + `DID NOT`.underline.brightRed + ` like that. You have ` + `ENRAGED`.bold.brightRed + ` the `+`Big Daddy`.brightRed.bold+`!!!`)
        //     attackStage(new Enemy("Big Daddy", 250, bigDaddyAttackValue()))
            
        // }

        // Security Bot Creation -------------------------------------------------------------------
    } else if(randomNum === 3 || randomNum === 4) {
        bigSpace()
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` YOU JUST SET OFF THE ALARM! A ` + `SECURITY`.brightRed.bold + ` BOT JUST CAME INTO THE ROOM!`)
        lilSpace()
        return new Enemy("Security Bot", 40, attackValue())
    }
}



// Looting Functions ---------------------------------------------------------------------------------------------------------------------------------------
function loot(){
    const randomNum = Math.floor(Math.random() * 4); 
    if(randomNum === 0){
        return ` First Aid Kit`.brightGreen.bold
    } else if(randomNum === 1) {
        return ` Old Tom Whiskey`.yellow.bold
    } else if (randomNum ===  2){
        return ` Old Tom Whiskey`.yellow.bold
    } else if(randomNum === 3) {
        return ` Cigarette`.red.bold
    } 
};

function moneyTime(){
    let min = 10;
    let max = 15;
    return Math.floor(Math.random() * (max-min+1)+min)
}


// Attack Phase ------------------------------------------------------------------------------------------------------------------------------------------------
function attackStage(enemy){
    while(enemy.health > 0 && player.health > 0){
        lilSpace()
        console.log(`*on radio* ATLAS: `.brightYellow.italic + `${player.name}`.brightCyan.bold +` currently has `+`${player.health} HP/ 125 HP.`.brightGreen.bold.underline + ` ${enemy.name}`.brightRed.bold + ` currently has `+`${enemy.health} HP!`.brightRed.bold.underline)
        lilSpace()
        const userResponse = ask.keyInSelect([`Attack the `+`${enemy.name}`.brightRed.bold, `Run away from the fight`, `Open `+`${player.name}'s`.brightCyan.bold+` Stats and Inventory`, `Visit the ` + `CIRCUS OF VALUES`.rainbow.bold], `*on radio* ATLAS:`.brightYellow.italic + ` Make a choice and 
        make it snappy, `.brightWhite.bold+`${player.name}!!!`.brightCyan.bold)
        lilSpace()

        let playerDmgValue = player.attack
        let enemyDamgValue = enemy.attack


        if(userResponse === 3){
            circusFunction()
            circusChoices()

        } else if(userResponse === 2){
            pauseFunction()
        } else if(userResponse === -1){
            lilSpace()
            console.log(`*ERROR 1959* You can't cancel!`.brightRed.bold)
        } else {
            lilSpace()
            weaponChoices()
        }

        
        function weaponChoices(){
            if(userResponse === 0){
            let chooseWeapon = ask.keyInSelect(weapons, `! CHOOSE A WEAPON TO ATTACK WITH !`.bold.brightYellow)
            lilSpace()
            
            if(chooseWeapon === -1){
                console.log(`*ERROR 1959* You can't cancel!`.brightRed.bold)
                bigSpace()  
            } 
            
            if(chooseWeapon === 0) {
                playerDmgValue = playerWrenchDamage()  
                enemy.health -= playerDmgValue
                player.health -= enemyDamgValue
                bigSpace() 
            }


             if(weapons.includes(` Pistol`.blue.bold) && chooseWeapon === 1 && player.pistolRounds >= 1){
                playerDmgValue = playerPistolDamage() 
                enemy.health -= playerDmgValue
                player.health -= enemyDamgValue        

            } else if(chooseWeapon === 1 && !weapons.includes(` Pistol`.blue.bold) || player.pistolRounds < 1 && chooseWeapon === 1){
                    console.log(`YOU EITHER HAVEN'T PURCHACED THE `.brightRed.bold+`PISTOL`.brightYellow.bold+` YET AND/OR DONT HAVE ENOUGH `.brightRed.bold+`PISTOL ROUNDS`.brightYellow.bold+` TO FIRE THE GUN!`.brightRed.bold)
                    console.log(`CHOOSE YOUR WEAPON AGAIN!`.brightWhite.bold)
                    weaponChoices()
            }
                
                
            if(weapons.includes(` Shotgun`.red.bold) && chooseWeapon === 2 && player.shotgunShells >= 1){
                playerDmgValue = playerShotgunDamage()
                enemy.health -= playerDmgValue
                player.health -= enemyDamgValue 
            } else if(chooseWeapon === 2 && !weapons.includes(` Shotgun`.red.bold) || player.shotgunShells < 1 && chooseWeapon === 2 ){
                console.log(`YOU EITHER HAVEN'T PURCHACED THE `.brightRed.bold+`SHOTGUN`.red.bold+` YET AND/OR DONT HAVE ENOUGH `.brightRed.bold+`SHOTGUN SHELLS`.brightCyan.bold+` TO FIRE THE GUN!`.brightRed.bold)
                console.log(`CHOOSE YOUR WEAPON AGAIN!`.brightWhite.bold)
                weaponChoices()
            }      
            console.log(`Your ${weapons[chooseWeapon]} is now equiped.`)
            lilSpace()


            // Enemy Dialog ---------------------------------------------------------------------------------------------------------------------
            function daddyDialogFunction(){
                const daddyNum = Math.floor(Math.random() * 2)
            let bigDaddyDialog1 = `The ${enemy.name}`.brightRed.bold + ` swings it's giant drill and hits ${player.name}`.brightCyan.bold + ` for ` + `${enemyDamgValue}`.brightRed.bold.underline + ` damage!`;
    
            let bigDaddyDialog2 = `The ${enemy.name}`.brightRed.bold + ` coils back and charges drill-first into ${player.name}`.brightCyan.bold + ` dealing ` + `${enemyDamgValue}`.brightRed.bold.underline + ` damage!`;
    
                if(daddyNum === 0){
                    lilSpace()
                   return console.log(bigDaddyDialog1)
                } else if (daddyNum === 1){
                    lilSpace()
                   return console.log(bigDaddyDialog2)
                } else {
                    lilSpace()
                   return console.log(`${enemy.name}`.brightRed.bold + ` gets ENRAGED and slams ${player.name}`.brightCyan.bold +` for ${enemyDamgValue}`.brightRed.bold.underline + `damage !!!`)
                }
            }   

            if (enemy.name === "Spider Splicer"){
                console.log(`The ${enemy.name}`.brightRed.bold + ` slashes `+`${player.name} `.brightCyan.bold +`for ` + `${enemyDamgValue}`.brightRed.bold.underline + ` damage!!!` )
                lilSpace()

            } else if(enemy.name === "Big Daddy"){
                daddyDialogFunction()
                lilSpace()

            } else if(enemy.name === "Security Bot"){
                lilSpace()
                console.log(`The ${enemy.name}`.brightRed.bold + ` activates it's turret defense system and sprays brass bullets into ${player.name}`.brightCyan.bold +` dealing` + `${enemyDamgValue}`.brightRed.bold.underline + ` damage!!!`)
                bigSpace()
            }

            // Player Weapon Dialog ------------------------------------------------------------------------------------------------------------------------------
            weaponLog()
            function weaponLog(){
            if(chooseWeapon === -1){
                console.log(`*on radio* ATLAS:`.brightYellow.italic + ` YOU DIDN'T CHOOSE A WEAPON! NEXT TIME, CHOOSE A WEAPON TO DEFEND YOURSELF WITH!`.brightBlue.bold)
                lilSpace()
            } else if(chooseWeapon === 0){
                lilSpace()
                console.log(`${player.name}`.brightCyan.bold + ` grips the Wrench tightly, and smacks `+`${enemy.name}`.brightRed.bold + ` for ` + `${playerDmgValue}`.brightCyan.bold.underline + ` damage!!!`);
                lilSpace()
            } else if (weapons.includes(` Pistol`.blue.bold) && chooseWeapon === 1 && player.pistolRounds > 1){
                lilSpace()
                console.log(`${player.name}`.brightCyan.bold + ` aims the pistol and pulls the trigger! `+`PAP!!!`.brightYellow.bold+` The chamber fires, the lead bullet hits `+`${enemy.name}`.brightRed.bold+` for `+`${playerDmgValue}`.brightCyan.bold.underline + ` damage!!!`);
                lilSpace()
                console.log(`*on radio* ATLAS:`.brightYellow.italic + `Nice shootin' kid!`)
                bigSpace()
            } else if (chooseWeapon === 2){
                lilSpace()
                console.log(`${player.name}`.brightCyan.bold + ` lines up the Shotgun and yanks the trigger. *chk, chk* `+`BOOOOOM!`.brightYellow.bold+` The barrel fires 6 steel pellets that hit `+`${enemy.name}`.brightRed.bold + ` for ` + `${playerDmgValue}`.brightCyan.bold + ` damage!!!`);
                bigSpace()
                console.log(`*on radio* ATLAS:`.brightYellow.italic + `Nice shootin' kid!`)
                bigSpace()
            }
             }
            }
        }
         
           // "Last Chance" Health Consumables Functions -----------------------------------------------------------------------------------------                 
            if(player.health < 50 && inventory.includes(`First Aid Kit`)){
                console.log(`--------------------------------------------------------GAME PAUSED------------------------------------------------------`.brightRed.bold)
                const useKit = ask.keyInSelect(["Use Health Kit", "Exit"], `*on radio* ATLAS:`.brightYellow.italic + ` Would you like to use a First Aid Kit to retore your  HP back up to 125? You currently have ${player.health}`.brightGreen.bold+` HP/ 125 HP.`.brightGreen.bold)
                bigSpace()
                    if(useKit === 0){
                        restoreFitstAidKit()
                    } else {
                        bigSpace()
                        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` Gotcha!`)
                        bigSpace()
                    }
                console.log(`--------------------------------------------------------GAME RESUMED------------------------------------------------------`.brightGreen.bold)

            }

            if(player.health < 30 && inventory.includes(` First Aid Kit`)){
                lilSpace()
                console.log(`--------------------------------------------------------GAME PAUSED------------------------------------------------------`.brightRed.bold)
                console.log(`*on radio* ATLAS:`.brightYellow.italic + ` YOUR HEALTH IS VERY LOW!!! USE A FIRST AID KIT TO RESTORE YOURSELF BACK TO FULL  HP!!! YOUR HEALTH IS VERY LOW!!! USE A FIRST AID KIT TO RESTORE YOURSELF BACK TO FULL  HP!!! YOUR HEALTH IS VERY LOW!!! USE A FIRST AID KIT TO RESTORE YOURSELF BACK TO FULL  HP!!! YOUR HEALTH IS VERY LOW!!! USE A FIRST AID KIT TO RESTORE YOURSELF BACK TO FULL  HP!!!`.brightRed.bold)
                lilSpace()
                const urgent = ask.keyInSelect(["USE FIRST AID KIT!"], "USE THE FIRST AID KIT OR YOU WILL DIE!!!")
                bigSpace()

                if(urgent === 0){
                    lilSpace()
                    restoreFitstAidKit()
                }  else {               
                    lilSpace()
                    console.log(`*on radio* ATLAS:`.brightYellow.italic + ` Okay, `+`${player.name}`.brightCyan.bold + `, suit yourself`)
                    bigSpace()
                }
                console.log(`--------------------------------------------------------GAME RESUMED------------------------------------------------------`.brightGreen.bold)
            }


            // Looting Stage ---------------------------------------------------------------------------------------------------------------------
            if(enemy.health <= 0){
                const randomItem = loot()
                const moneyT = moneyTime()
                console.log(`${enemy.name}`.brightRed.bold + ` has been defeated!!! K/D +1`)
                bigSpace()
                const postResponse = ask.keyInSelect(["Pick up item", "Leave item"], `*on radio* ATLAS:`.brightYellow.italic + ` ${randomItem} dropped from the battle. Would you like to place this item into your inventory`)
                lilSpace()
                console.log(`$${moneyT}`.brightGreen.bold+` has been added to your bank!`)
                bigSpace()
                player.deposit(moneyT)
                bigSpace() 


                if(enemy.name === `Big Daddy` && player.adam < 6){
                    lilSpace()
                    console.log(`The ` + `Big Daddy `.brightRed.bold + ` has been defeated. All that remains is the little sister. Would you like to save her or harvest her? Harvesting gives 2 Adam. Eve only gives 1 but Tenenbaum, the watcher for the little sisters offers extra rewards that are not Adam if you save them.`)
                    bigSpace()

                    const harvestOrSave = ask.keyInSelect([`Harvest the Little Sister`, `Save the Little Sister`])
                    bigSpace()

                    if(harvestOrSave === 0){
                        lilSpace()
                        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` The greedy route, just what I would've done. Nice work, kid!`)
                        lilSpace()
                        player.adam += 2
                    } else if(harvestOrSave === 1){
                        lilSpace()
                        console.log(`*on radio* Tenenbaum: `.brightGreen.italic.bold + `The path of the righteous is not always easy. You have shown kindness to my Little Ones. And for this, I am greatful. I'll gift something to demonstrate my gratitude.`)
                        bigSpace()
                        player.adam += 1
                        lilSpace()
                        console.log(`*`+`$20`.brightGreen.bold+` has been added to your bank. One First Aid Kit has been added to your inventory.*`)
                        lilSpace()
                        player.getBalance += 20
                        inventory.push(` First Aid Kit`)
                        
                    }

                        function remainingAdam(){
                            let sum = 6 - player.adam 
                                return sum
                        }
                    lilSpace()
                    console.log(`*on radio* ATLAS:`.brightYellow.italic + ` OBJECTIVE PROGRESS! You currently have ${player.adam}/6 Adam Bottles. Collect ${remainingAdam()} more Adam Bottle for the fuel mixture to get out of this hellhole`.brightGreen.bold)
                    lilSpace()
                    gameOptions()
                }

                if(enemy.name === `Spider Splicer` && player.eve < 4){
                    player.eve += 1
                    lilSpace()
                    console.log(`*on radio* ATLAS:`.brightYellow.italic + ` OBJECTIVE PROGRESS! You currently have ${player.eve}/3 Eve Samples. Collect all needed samples to help us create the mixture to help fuel the getaway submarine!`.brightGreen.bold)
                    bigSpace()
                }

                if(postResponse === 1){
                }   if(randomItem === 0 || 1 || 2 || 3){
                    inventory.push(randomItem)
                } 
                
                if(postResponse === 2) {
                    lilSpace()
                    console.log(`*on radio* ATLAS:`.brightYellow.italic + ` No Problem. Let's move right along then.`)
                    lilSpace()
                    gameOptions()
                    bigSpace()
                }
                gameOptions()
            }

        if(userResponse === 1){
            lilSpace()
            console.log(`*on radio* ATLAS:`.brightYellow.italic + ` COWARD! Rapture does not breed these kinds of sissies!!! We are running out of time here, `+`${player.name}`.brightCyan.bold+`!`)
            lilSpace()
            console.log(`*on radio* ATLAS:`.brightYellow.italic + ` You managed to escape the ${enemy.name}, only at the cost of your dignity.`)
            lilSpace()
            gameOptions()
            bigSpace()
                    
        } 
        
        if(userResponse === 2){
            lilSpace()
            pauseFunction()
            lilSpace()
            
        }   
    
  }
};


// MAIN GAME LOOP -----------------------------------------------------------------------------------------------------------------------------------------------


function gameOptions(){
    const gameChoices = ["Search the hallways of Rapture for trouble", `Open `+`${player.name}'s`.brightCyan.bold+` Stats and Inventory`, `Visit the ` + `CIRCUS OF VALUES`.rainbow.bold];
    lilSpace
    const userAnswer = ask.keyInSelect(gameChoices, `Alright `+`${player.name}`.brightCyan.bold + `, what are you going to do next?`)
    lilSpace()
    if(userAnswer === 0){
        lookforenemy()
    } if (userAnswer === 1){
        lilSpace()
        pauseFunction()
        lilSpace() 
    } if(userAnswer === 2){
        lilSpace()
        circusFunction()
        circusChoices()
        lilSpace()
    } if (userAnswer === -1){
        lilSpace()
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` You can't just simply cancel rapture! Choose again.`.brightRed.bold)
        lilSpace()
    }
} 

while(!game0ver){
    gameOptions()
    if(player.adam > 5){
        bigSpace()
        console.log(`*on radio* ATLAS: `.brightYellow.italic +` You have all of the Adam necessary to create one half of the fuel sample. Go kill some Spider Splicers if you don't already have enough Eve.`.yellow.bold)
        bigSpace()
    }
    
    if(player.eve > 2){
        bigSpace()
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` You have all of the Eve necessary to create one half of the fuel sample. Go harvest/save little sisters if you do not have enough Eve yet.`.yellow.bold)
        bigSpace()
    }
    
    if(player.adam > 5 && player.eve > 2){
        
        bigSpace()
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` You have all of the materials necessary to complete the mixture!. Come over to Point Prometheus to bring us the mixture so we can get the hell out of here!`.yellow.bold)
        let continueChoice = [`Proceed to Atlas and his crew Point Prometheus`, ` Circus of Values. Check inventory and player stats.`]
         let askContinue = ask.keyInSelect(continueChoice, `*on radio* ATLAS:`.brightYellow.italic + `Where are you headed next?`)
        bigSpace()
        
        if(askContinue === 0){  
            bossFight()
            bigSpace()
        } else if(askContinue === 1){
            bigSpace()
            circusFunction()
            circusChoices()
            bigSpace()
        } else if (askContinue === 2){
            bigSpace()
            pauseFunction()
            bigSpace()
        }
    }

   

    if(player.health <= 0){
        bigSpace()
        console.log("GAME 0VER")
        bigSpace()
        game0ver = true;
        bigSpace()
        credits()
        bigSpace()
    }
    
};



function loading(){
    const load = `
    LOADING...
    -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-`
    console.log(load)
    console.log(load)
    console.log(load)
    console.log(load)
    console.log(load)
    console.log(load)
    console.log(load)
    console.log(load)
    console.log(`
    COMPLETE.
    `)
    
}

function bossFight(){
    bigSpace()
    loading()
    bigSpace()
    console.log(`*on radio* ATLAS: `.brightYellow.italic + `Hey, kid! About time that you showed up! We're running out of time. Hurry and go drop off those Adam and Eve samples in that pneumo tube and we'll open the door for you and then you can get into the submarine`)
    bigSpace()

    bigSpace()
    console.log(`NEW RADIO FREQUENCY INCOMING!`.brightGreen.bold)
    bigSpace()

    console.log(`*on radio* Tenenbaum: `.brightGreen.italic + `STOP! DON'T LISTEN TO HIM! He is not who he says he is. I've been trying to warn you about him throughout your time here at Rapture. He does not have a crew nor is there a submarine. He plans to use the resourses that you have to power himself with the fluids, making him a monster that only makes it that much easier for him to destroy Rapture and take down everybody in it, including my little girls. Those little sisters you see are nothing but Adam fueled, mutated little angles that do not mean harm and seek salvation. Put those samples into the nuclear reactor right beside the door, that powers his biogenetic lab. Putting the samples into the reactor will set off a chemical reaction that will set explosive fire to the inside of his lab, killing him and stopping this inhumane behavior for good.`)
    bigSpace()

    const choicesChoices = ask.keyInSelect([`Give Atlas the Adam and Eve samples, to make him open the door and help you escape rapture.`, `Listen to Tenenbaum and load the fuel into the nuculear reactor.`], `*on radio* ATLAS:`.brightYellow.italic + `You really gonna listen to her? She has no idea what she's talkling about. So kid, what's it gonna be? You gonna stick with the guy who helped guide you through this nightmare and is offering you salvation, or will you join the traitor? Choose wisley, as you only get one shot at this.`, `Open `+`${player.name}'s`.brightCyan.bold+` Stats and Inventory`)
    bigSpace()

    if(choicesChoices === 2){
        pauseFunction()
    } else if(choicesChoices === 0){
        bigSpace()
        console.log(`*on radio* ATLAS:`.brightYellow.italic + ` Nice work, boyo! *(laughter)*. It’s time to end this little masquerade. There ain’t no Atlas, kid. Never was. Fella in my line a work takes on a variety of aliases. Hell, once I was even a China-Mfan for six months. But you’ve been a sport, so I guess I owe you a little honesty. The name’s Frank Fontaine.`)
        bigSpace()

        bigSpace()
        console.log(`Frank Fontaine (Atlas) later used your Adam and Eve fuzed sample to help power his plan.`)
        bigSpace()
        console.log(`GAME OVER! BETTER LUCK NEXT TIME.`.brightRed.bold)
        bigSpace()
        game0ver = true

    } else if(choicesChoices === 1){
        console.log(`Nuclulear Overload Incoming. All personel should evacuate IMMEDIATELY!`.brightRed.bold)
        bigSpace()
        console.log('T-10 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-9 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-8 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-7 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-6 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-5 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-4 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-3 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-2 Seconds untill self-destruction'.brightRed.bold)
        console.log('T-1 Seconds untill self-destruction'.brightRed.bold)
        console.log(`SELF-DESTRUCT INITIATED!`.brightRed.bold)

        bigSpace()
        
        console.log(
            `GUHUYTYGYGYUYGVUYHIOHJGVYUHYGVTYGUHYGFT^&YGUCFRF%&^TYGUFCRT^&YGUVCTF^&*YUHIGYTCR^&*YGUFCRTUFYRD$%ER^&T*YFRUD^%&TFYDR%^UT&*YFCRDU%^T&YGUTCRDU%^&T*Y&GUFCTRU&T^*YHGYTVCFRDT%^T&YGUTVFDHTR%T^&YGUVCFTRDU%^&TYGVFTR%^&TYGTVCTRD^%T&&YGVHFCRDU%^T&YGUTCRDF%^T&YGUTVFDHRTT^&*YHUGTCJRF&^*Y(UHIGYVTJFI^O&*Y(U)IOJHUKVTFYOT&Y(*U)PIOJHUVLYKFG&TY*U(IPOKJIKUBJYG&Y*(U)IO{PKOUBIG*U()I_O}P{LPOIU HP*Y(U)IIOHUGYTR^T&YGUFTRD$^%R&TFDRE$%^R&TFYDREXS$R%^TDXES$%R^TFYDXE$%^R&TUFYRDU^%&TUYGFTRDT%^&T*YUGT%R^&T*YUHYTR%^&T*YUHIYVGFCRF%^&T*YUIHYGVFCRDT^&*YUIHKBJVGFRTUDI%&R^T*&YIHUGYVGCFHRTU%IR&^*(YIUGFTURID%&OR%^(T&FYTID%&R%^T&*FYRTUD^%&RT^&*YFU%^*R%^&(*UYI&FTUDR%^R&IT*&(YUIGYCJURID%&R^*T&(YIGFTCRXUD%&R^T&IGYUFTCUXRD^%I&RT*GYUTCRXUD%R^&T&YGFUTCFXRTUD%R&^T*&GYTCFD)))))FTGYIUVYTF^GIUYVCTYF&^*T&GYIUTC%&R^T&YGYUTCRU%&^RT*YGIUT&R^T*&YGFTCRUDTFRES$%E^RDTYES%$WE^%S$E%$^SE$^%R&^DY&^T*FYDCF^&FYU^R%DRT%&DRSE%R$%RDRSTE$%^R^DR&^T*F%TR&^T*FYDRT^&FTYRCT&YUTCYFJTUG&YIUCGYIUYVGVHUOBIHVGJU*GIYVGIFUTCDGXTYDRXfgyuihkbjgtfyugytyf67yugftrft67t6y67R56T78TR67TRTD6R567R5RDT66R5D55DR567R5DT567R5E567R5E56ESZER456ESR456E4SR4564SR5RDE565DTDR6TYDFR6TDRUX678T6RTXDR67T8TRDR6T78FT7T7YGF8FTT78YFYT3R7EY8893YTF37Y8E9UY4GT7389UE8YFT678UOIFHGY789E37Y98UIOR3Y78UOIYGU378UIJOHU3GYT7Y8UI4R38OGY78U9GVY78U9Y4I3GRY8UYIGUY789UYHIUGY8U9OKP[]
            '?>LKOKP[;L'KMIJ0O-P[;',LMKJI90O-P[LPIU9I0OPLK;LIU9I0O-PLK;IOU9I0O[-PLK;OLIOU9I0OPK;LNIUHO89I0OPK;LUHIO89I0O[PK;LUHIO89I0[OPL'KJLIHOU9I0OP'LK;ILOU9I0O-LPK';LIJP90[OPK'LM;KNJBUHIOJKP';LMKNJUHOIUPK;LMNJBUIHOP9OK;LMNJUIHO89PIKO;LMNJBHUIHOPIOKJLNGIUY8OU9PIOJKNBHGVYIUHOUGVJGVUHIOUGVHJGGUHVHJG VYUHOIUVHJG HYUVHJGHUHKVHJUHIUVHUHIOJIHHJVUHOIUVHJUIJKLNJUHIOK;LNJBUHOIUKLNJBUHIJKLNBGUHIJKIJuiojuikojUYIJILHUIY89IOJ;hyhungyhbyg vybg yby7gvtty7gvg6gy6t6gfvg6g6yvybyhducy7 beg3 ydvgyegyeg3yevfwggvkgyebvfuwyvwyuvfuwybgfiuyubgwybfygbyedyghuyeghduywghfuyghyuwgeyywfvuyfg9768g987g69fgi7hgo8yftt7yuighouyefgutyfgywuiegfi3g62798gfw76efgd69ywgqy9dg2uy3gerf6978ftgr2ve3rt6yutygyvtcfgy62gygyufbnuhufhuehuehgueghughhuhuhhhbhsgdegdyydychchhdhuujusbgvgeduufufhfbhdfhhgrgerhjfnncbhhrgdeyhebennvjherhhyhhychbwhbebhfubhaeuidjiuhjijduhedubhquyvbhinhbjiubjidufyheubdyuvyagvdeygdahbcxjabdjbjbbsbydfghdjfbgwghuahuahushsuyghehgdyguyijijiajaijshyegyfuij3uhu3hgy3by3v3y3vegvdhbnjs gsvybhegvtghyt6gy7hbvtg6ybhdbnfjhbfuebndunbdububuuyreburbrubrubnrurbufbrubfurbrunijmkj nikmijkm,mrlef;f;;pf;f;f;f;[[l.pl.p[;'.[;,';,.;l'lp;,l,;,.;;,.;,.p,pp;;.;.LHKIUYO8OJLUy8ujy8u9ioknbygiuOIJHugy78u9ijHUGIyoijuY8U9Ijy8ouiJLHyiy8ouilhkuYUIuhjlkhygiOUJLkhyui8ouijlknBHYGIujhkbhygiuJLHKygujnbHJYGIUijhkbhvgyugihJNKBHvgfyguhjbvgTFYGuhbjvgctfyguhBVGtfugyhbgvcFTUGYhjvctfyguhKJBVGyguhjbgvTFUYGhjbvgtyguhjkbhGHFTUYGhjkbhvgYGUHJBKhvgyuhjbKHGTuyghjkbhgYUGIHJKbhgfgyuhjkbgyguhJKBVGyguhjkbvgyguhjkBVGyughjkbvgyUHJNbhvgyuhjkBHYGUijhbhygUHJNBHgyiuhjkbYGIUHjbvyguhjbyguHIKJgyuihjkYUGISE$RZ$%^DRSTEDR%DRYFTGFTDRESD$SR$%^DRSTYD%RD^XF&TUVYGVUTCF&%R^T*Y}))`.trap.random.bgRed)
            bigSpace()
            bigSpace()

        console.log(`*on radio* Tenenbaum: `.brightGreen.italic + `You did it. My Little Ones and I will forever be in your debt.`)
        bigSpace()

        credits()
        game0ver = true
    }
}

function credits(){
    bigSpace()
    console.log(`GAME OVER! `.brightRed.bold+`YOU WIN!`.brightGreen.bold +` or `.brightWhite.bold+`LOOSE`.brightRed.bold+`, depending if you died or not haha.`.brightWhite.bold)
    bigSpace()

    bigSpace()
    console.log(`To whomever actually has the patientce to finish this game, thank you. No seriously, thank you. Althogh the game is very bare bones, buggy and kinda sloppy, it took me a HUGE ammount of time to finish this game. For the limitations that are inevitable while being a beginner programmer and trying to make a fun, unique, text-based RPG game in the freaking console/terminal of all places, I'm proud of the result, although I can't take full credit as this is a Bioshock inspired game, but nontheless, Thank You `+`${player.name}`.brightCyan.bold+`!!! Quick shoutout to my Dad for pushing me to a deadline, to help me find the motivation finish this project. Also, a shoutout to google for giving me all the answers I needed lol. Shoutout to 'Big Buddy Liam' for play testing the game while it was still INCREDIBLY buggy and for also helping me with the writing and grammar(he takes college level english so, obviously he holds the title for being the most literate man out there ;). ), as that was the hardest part for me haha, the logic was easy.`)
    bigSpace()

    bigSpace()
    bigSpace()
    console.log(`
---------------------------------------------------------------------------------------
|                                     CREDITS                                         |
|                                   -----------                                       |
|                                                                                     |
|                        Script & Logic Writer: Josh Sorensen                         |
|                                                                                     |
|                                                                                     |
|               Lead UI/UX Designer: Josh Sorensen                                    |
|                                                                                     |
|                                                                                     |
|                        Naritive Inspiration: Bioshock® 2K Games                     |
|                                                                                     |
|                                                                                     |
|               Lead Game Tester: Liam Crettol                                        |
|                                                                                     |
|                                                                                     |
|                        Lead Literarity Correctness Manager: Liam Crettol            |
|                                                                                     |
|                                                                                     |
|               "This game was made possible by contributions to your                 |
|                PGDS(Public Game Dev Service) station from                           |
|                 Players Like You. Thank You."                                       |
|                                                                                     |
|                                                                                     |
---------------------------------------------------------------------------------------
`.brightYellow.bgBlack)
                           bigSpace()
                           bigSpace()
                        
}


// VENDING MACHINE (C I R C U S  O F  V A L U E S) ------------------------------------------------------------------------------------------------

  function checkBalance(){
    let currentBalance1 = `$${player.balance}`.brightGreen 
    return currentBalance1
  }
  

  function circusFunction(){
    bigSpace()
    console.log(`--------------------------------------------------------GAME PAUSED------------------------------------------------------`.brightRed.bold)
    let clownVoice = `*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold + `W E L C O M E  T O  T H E  C I R C U S  O F  V A L U E S ! ! !`.rainbow.bold.underline


    let circusOfValuesMenu = 
    
  `

  -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`.rainbow.underline.bold +                                                                       
  
  ` |`.rainbow.bold + `                                                                                                                 
  |`.rainbow.bold + `                        
   |`.rainbow.bold + `
  |`.rainbow.bold + `                                                             ` + `Ⓦ Ⓔ Ⓛ Ⓒ Ⓞ Ⓜ Ⓔ  Ⓣ Ⓞ  Ⓣ Ⓗ Ⓔ  Ⓒ Ⓘ Ⓡ Ⓒ Ⓤ Ⓢ  Ⓞ Ⓕ  Ⓥ Ⓐ Ⓛ Ⓤ Ⓔ Ⓢ ! `.rainbow.underline.bold + `
   |`.rainbow.bold + `                                                                     ====================================== `.rainbow.bold + `              
  |`.rainbow.bold + `
   |`.rainbow.bold + `                                                                                [1]`+` Bandage `.brightRed.bold  + ` $2 `.brightGreen.bold+`
  |`.rainbow.bold + `                                                                                [2]`+` First Aid Kit `.brightYellow.bold  + ` $5 `.brightGreen.bold+`
   |`.rainbow.bold + `                                                                                [3]`+` ${pistolSoldOut} `.brightRed  + ` $10 `.brightGreen.bold+`                    
  |`.rainbow.bold + `                                                                                [4]`+` 10 Pistol Rounds `.brightBlue.bold  + `$3 `.brightGreen.bold+`                                
   |`.rainbow.bold + `                                                                                [5]`+` ${shotgunSoldOut} `.brightCyan.bold + ` $20 `.brightGreen.bold+`                           
  |`.rainbow.bold + `                                                                                [6]`+` 3 Shotgun Bucks `.brightRed.bold  + ` $4 `.brightGreen.bold+`                                                       
   |`.rainbow.bold + `                                                                                [7]`+` Old Tom Whiskey `.brightCyan.bold + `$2`.brightGreen.bold + `                                                                                                                              
  |`.rainbow.bold + `
   |`.rainbow.bold + `
  ` +             `-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`.rainbow.underline.bold
    

    console.log(clownVoice)
      console.log(circusOfValuesMenu.bgMagenta.bold)
  
  };
  
  
  function checkInv(){
    lilSpace()
    let checkInvOptions = [`Go back to ` + `CIRCUS OF VALUES`.rainbow.bold, `Exit Inventory and Resume game`]
    pauseFunction()
    bigSpace()
    let checkInvChoice = ask.keyInSelect(checkInvOptions, `You are currently in your inventory. What would you like to do next?`.brightWhite.bold)
    if(checkInvChoice === 0){
        lilSpace()
      circusFunction()
      circusChoices()
        lilSpace()
    } else if (checkInvChoice === 1){
        lilSpace()
        console.log(`--------------------------------------------------------GAME RESUMED------------------------------------------------------`.brightGreen.bold)
        //   gameOptions()
        lilSpace()
    } else if (checkInvChoice <= -1){
        bigSpace()
      console.log(`PICK ONE OF THE OPTIONS ABOVE, NOT THIS ONE!`.red.underline.bold)
      console.log(`PICK ONE OF THE OPTIONS ABOVE, NOT THIS ONE!`.red.underline.bold)
      bigSpace()
    }
  }
  
  function circusChoices(){
    let circusOfValues = [`Bandage`.brightRed.bold, `First Aid Kit`.brightYellow.bold, `${pistolSoldOut}`.brightRed, `10 Pistol Rounds`.brightBlue.bold, `${shotgunSoldOut}`.brightCyan, `3 Shotgun Bucks`.
    brightRed.bold, `Old Tom Whiskey`.brightCyan.bold, `Check Inventory and Collection`.brightWhite.bold, `Exit and Resume Game`.brightWhite.bold];
    bigSpace()
    let vendingChoice = ask.keyInSelect(circusOfValues, `What would you like to purchace from the ` + `CIRCUS OF VALUES`.rainbow.bold + `?` + ` You currently have ${checkBalance()}` )
    bigSpace()


    if(vendingChoice === 8){
        console.log(`--------------------------------------------------------GAME RESUMED------------------------------------------------------`.brightGreen.bold)
        gameOptions()
    }

    if(vendingChoice <= -1){
      lilSpace()
      
      circusFunction()
      circusChoices()
      console.log(`YOU CANNOT CANCEL AT THIS TIME. CHOOSE AGAIN.`)
    }; 
    
    if(vendingChoice === 0 && player.balance >= 2 || vendingChoice === 0 && player.balance <= 1){
      if(player.balance <= 1){
        lilSpace()
        circusFunction()
        circusChoices()
        bigSpace()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow.bold + ` --You don't have enough money to purchase this item.--` .bold)
        bigSpace()
       
      }
      inventory.push(` Bandage`)
      player.balance -= 2
      lilSpace()
      console.log(`${circusOfValues[0]} has ben added to your inventory.`)
      lilSpace()
      whatNext()
      bigSpace()
    };  
    
    if (vendingChoice === 1 && player.balance >= 5 || vendingChoice === 1 && player.balance < 4){
      if(player.balance < 4){
        bigSpace()
        circusFunction()
        circusChoices()
        bigSpace()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow .bold + ` --You don't have enough money to purchase this item.--` .bold)
        lilSpace()
        
      }
      
      inventory.push(` First Aid Kit`)
      player.balance -= 5 
      lilSpace()
      console.log(`${circusOfValues[1]} has ben added to your inventory.`)
      lilSpace()
      whatNext()
    };
  
    if (vendingChoice === 2 && player.balance >= 10 || vendingChoice === 2 && player.balance < 9){
      if(player.balance < 9){
        lilSpace()
        circusFunction()
        circusChoices()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow .bold + ` --You don't have enough money to purchase this item.--` .bold) 
        lilSpace()
        
      }
  
      pistolSoldOut = `SOLD OUT`
      
      if(vendingChoice === 2 && weapons.includes(` Pistol`.blue.bold)){
        lilSpace()
        console.log(`This item is `+`SOLD OUT`.brightRed.underline.bold+` dummy.`)
        lilSpace()
        whatNext()
      } else {
        player.balance -= 10
      weapons.push(` Pistol`.blue.bold)
      lilSpace()
      console.log(`Purchace Complete. ${circusOfValues[2]} has now been aquired.`)
      lilSpace()
      whatNext()
      }
      
    }; 
    
    if(vendingChoice === 3 && player.balance >= 3 || vendingChoice === 3 && player.balance < 2){
      if(player.balance < 2){
        lilSpace()
        circusFunction()
        circusChoices()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow .bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.bold.briightWhite + ` --You don't have enough money to purchase this item.--` .bold) 
        lilSpace()
        
      }  
      
      player.pistolRounds += 10
      player.balance -= 3
      lilSpace()
      console.log(`${circusOfValues[3]} has ben added to your ammunition total.`)
      lilSpace()
      whatNext()
    }; 
    
    if(vendingChoice === 4 && player.balance >= 20 || vendingChoice === 4 && player.balance < 19){
      if(player.balance < 19){
        lilSpace()
        circusFunction()
        circusChoices()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.bold.brightWhite + `--You don't have enough money to purchase this item.--`) 
        lilSpace()
      }
      

      if(!weapons.includes(` Pistol`.blue.bold) && vendingChoice === 4 ){
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow +`YOU MUST BUY THE PISTOL FIRST BEFORE YOU BUY THE SHOTGUN!!!`.brightRed)
        whatNext()
      } else if(vendingChoice === 4 && weapons.includes(` Shotgun`.red.bold)){
          lilSpace()
          console.log(`This item is `+`SOLD OUT`.brightRed.underline.bold+` dummy.`)
          lilSpace()
          whatNext()
        } else if(vendingChoice === 4 && !weapons.includes(` Shotgun`.red.bold) && weapons.includes(` Pistol`.blue.bold)) {
          weapons.push(` Shotgun`.red.bold)
          player.balance -= 20
          lilSpace()
          console.log(`${circusOfValues[4]} has now been aquired.`)
          shotgunSoldOut = `SOLD OUT`
          lilSpace()
          whatNext()
          lilSpace()
        }
        
    }; 
    
    if(vendingChoice === 5 && player.balance >= 4 || vendingChoice === 5 && player.balance < 2 ){
      if(player.balance < 2){
        lilSpace()
        circusFunction()
        circusChoices()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.rainbow.rainbow.bold+ `--You don't have enough money to purchase this item.--`) 
        lilSpace()
        
       
      }  
  
      player.balance -= 4
      player.shotgunShells += 3
      lilSpace()
      console.log(`${circusOfValues[5]} has ben added to your ammunition total.`)
      lilSpace()
      whatNext()
    };
  
    if (vendingChoice === 6 && player.balance > 3 || vendingChoice === 6 && player.balance < 1 ){
      if(player.balance < 1){
        lilSpace()
        circusFunction()
        circusChoices()
        console.log(`*scratchy, prerecorded, mocking clown voice* `.brightYellow.bold +`COME BACK WHEN YOU GET SOME MONEY, BUDDY.`.brightWhite.bold + ` --You don't have enough money to purchase this item.--`.bold )
        lilSpace()
        
      } 
  
      inventory.push(` Old Tom Whiskey`)
      player.balance -= 2
      lilSpace()
      console.log(`${circusOfValues[6]} has ben added to your inventory.`)
      lilSpace()
      whatNext()
    }; 
    
    if(vendingChoice === 7){
      lilSpace()
      checkInv()
      lilSpace()
    };
  
  };
  
  function whatNext(){
    lilSpace()
    let whatQuestion = ask.keyInSelect([`Go back to ` + `CIRCUS OF VALUES`.rainbow.bold, `Exit and Resume Game`, `Open `+`${player.name}'s`.brightCyan.bold+` Stats and Inventory`], `Would you like to purchase something else?`)
    lilSpace()
  
    if(whatQuestion === 2){
        console.log(`--------------------------------------------------------GAME PAUSED------------------------------------------------------`.brightRed.bold)
        pauseFunction()
    }

    if(whatQuestion <= -1){
      lilSpace()
      console.log(`ERROR. CANNOT CANCEL AT THIS TIME.`.brightRed.bold)
      lilSpace()
      whatNext()
      lilSpace()
    };
  
    if(whatQuestion === 0){
      lilSpace()
      circusFunction()
      lilSpace()
      circusChoices()
      lilSpace()
    };
    
    if(whatQuestion === 1){
      lilSpace()
      console.log(`--------------------------------------------------------GAME RESUMED------------------------------------------------------`.brightGreen.bold)
      gameOptions()
    };
    
  }



  // END OF VENDING MACHINE -----------------------------------------------------------------------------------------------------------------------------