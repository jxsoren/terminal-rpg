const ask = require('readline-sync');
const colors = require('colors');

let player = {

        eve: 2
}

while(player.eve > 1){
    console.log('hello there')
    
    if(player.eve < 0){
        player.eve = -1
        console.log('YAY')
    }
}