class Monster{
    constructor(name, hp, attacks){
        this.name = name
        this.hp = hp
        this.attacks = attacks
    }
}
const mon = new Monster("Werewolf", 100, "throw");
console.log(mon);
exports.module = {Monster};