const prodModule =  require("./product");

let  empsArray =  prodModule.getData();


function getCategory(value){
    for(let item of empsArray){
        if(value == item.category){
            console.log(item);
        }
    }
}



function getPrice(lprice, hprice){
    for(let item of empsArray){
        if(lprice < item.Price &&  item.Price< hprice){
            console.log(item);
        }
    }
}

function getOutOfStock(){
    for(let item of empsArray){
        if(item.Quantity == 0){
            console.log(item);
        }
    }
}

function getInOfStock(){
    for(let item of empsArray){
        if(item.Quantity != 0){
            console.log(item);
        }
    }
}

// console.log(empsArray);
// getCategory("B");
// getPrice(9000,11000);
getOutOfStock()  
// getInOfStock()
