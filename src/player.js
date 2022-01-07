class Player{
    constructor(name, hp, attacks){
        this.name = name
        this.hp = hp
        this.attacks = attacks
    }
}

const play = new Player("Cleo", 100, "Catch");
console.log(play);

exports.module = {Player};