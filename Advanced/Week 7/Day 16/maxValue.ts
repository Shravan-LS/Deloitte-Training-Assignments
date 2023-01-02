function maxValue(...ar:number[]){
    var i:number = 0;
    for(var k of ar){
        if(k > i){
            i = k;
        }
    }
    console.log(i);
}

maxValue(10,20, 11, 110, 74);
maxValue(36, 26, 47, 84, 32, 73, 47, 93, 23);