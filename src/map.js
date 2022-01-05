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
}

const one = new Map();
one.creatArrays();
console.log(one.map);

one.resetArray();
console.log(one.map);