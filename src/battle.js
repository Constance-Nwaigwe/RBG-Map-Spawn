
export default function battleOn(status, monName, playName){
    if(status == true){
        let monstername = monName;
        let PlayerName = playName,
        const monsterAttack = ["Fireball", "Kick", "Punch", "Throw"];
        const playerAttack = ["Waterball", "Kick", "Punch", "Catch"];
        let playerHp = 100;
        let monsterHp = 100;
        let time = 5;

        //let numx = Math.floor(Math.random() * 4);
        //let numy = Math.floor(Math.random() * 4);
        //if(monsterAttack[x]){}

        for(let i = 0; i <= time; i++){
            if(playerHp == 0 || monsterHp == 0){
                break;
            }
            else{
                let x = Math.floor(Math.random() * 4);
                let y = Math.floor(Math.random() * 4);
                //monsterAttack[x];
                //playerAttack[y];
                if(monsterAttack[x] == "Fireball"){
                    if(playerAttack[y] == "WaterBall"){
                        monsterHp--;
                    }else{
                        playerHp--;
                    }
                }
                else if(monsterAttack[x] == "Kick"){
                    if(playerAttack[y] == "Punch"){
                        playerHp--;
                    }else{
                        monsterHp--;
                    }
                }
                else if(monsterAttack[x] == "Punch"){
                    if(playerAttack[y] == "Punch"){
                        monsterHp--;
                        playerHp--;
                    }else{
                        monsterHp--;
                    }
                }
                else if(monsterAttack[x] == "Throw"){
                    if(playerAttack[y] == "WaterBall" || playerAttack[y] == "Catch"){
                        monsterHp--;
                    }else{
                        playerHp--;
                    }
                }
            }
        }

        (playerHp > monsterHp) ? console.log("Player WINS!!!!") : console.log("Player LOST :(");
        //console.log(playerHp, monsterHp)
    }
    else{
        console.log("Game can not start.");
    }
}
//battleOn(false);