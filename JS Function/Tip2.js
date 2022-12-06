
foodprice = prompt("unee oruulna uu?");

totalPays = [];


let tipPercent = 0;

findTipPercent(foodprice);
findTip(foodprice);
findTotalPay(foodprice, tip);






function findAverageTotalPay(params) {
    averageTotalPay = totalPaid / totalPais.length
}



function findTotalPaid() {
    for ( i = 0; i < totalPays.length; i++) {
        totalPaid[totalPaid.length] = totalPaid 
    }
    return
    
};

function findTip(foodprice) {
    tip = foodprice * tipPercent
    // return
};



function findTotalPay(foodprice) {
    totalPay = foodprice * 1 + tip * 1;

    totalPays[totalPays.length] = totalPay;

    console.log(totalPays)
    
    // return
};

function findTipPercent(foodprice) {
    if (foodprice >= 5000 && foodprice <= 30000) {
        tipPercent = 0.15 
    } else {
        tipPercent = 0.2
    };
    console.log("tip percent = " + tipPercent);
    // return ;

    
};

function findAverageTotalPaid() {
    for ( i = 0; i < totalPays.length; i++) {
        totalPaid = totalPaid / totalPays[i]
    }
    return 
};


// console.log(Number.foodprice);
// console.log(Number.tip);
console.log(tipPercent);

console.log("tip = " + tip);
console.log("total pay = " + totalPay);

