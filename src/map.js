class Map{
    constructor(){
        this.map = []
    }

    creatArrays(){
        let ranArray = []
        for(let i = 0; i < 4; i++){
            for(let i = 0; i < 1; i++){
                ranArray.push(0);
            }
            this.map.push(ranArray)
            //ranArray.splice(0,4)
        }
    }
    resetArray(){
        let num = this.map.length
        this.map.splice(0, num)
    }

    spawning(){
        let x = Math.floor(Math.random() * 4);
        let y = Math.floor(Math.random() * 4);
        //let a = this.map[x][y]
        /*console.log(x,y,a);
        console.log(a);
        if(this.map[x][y] === 0){
            console.log(this.map[x][y], x,y);
        }*/
        //console.log(one.map[0],one.map[1], one.map[2], one.map[3]);
        //console.log(this.map[1][0]);
        if(this.map[x][y] == 0){
            this.map[x][y] = "p";
        }
        //console.log(this.map[2][0]);
        //console.log(one.map[0],one.map[1], one.map[2], one.map[3]);
        //console.log(x,y);
        for(let i = 0; i < 2; i++){
            //console.log(x,y);
            let numx = Math.floor(Math.random() * 4);
            let numy = Math.floor(Math.random() * 4);
            if(this.map[numx][numy] !== "m" && this.map[numx][numy] !== "p"){
                this.map[numx][numy] = "m"
            }
            //this.map[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = "m"
        }
    }
    collisionStatus(){
        let status = false;
        for(let i = 0; i < this.map.length; i++){
            if(this.map[i].includes("p") && this.map[i].includes("m")){
                status = true
                console.log(status)
                //break;
            }
        }
        return status;
    }
}

const one = new Map();
one.creatArrays();
console.log(one.map);

//one.resetArray();
//console.log(one.map);
one.spawning();
console.log(one.map[0],one.map[1], one.map[2], one.map[3]);
one.collisionStatus()

exports.module = {Map};