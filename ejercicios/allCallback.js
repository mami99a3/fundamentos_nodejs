function map(numbersArray, myCallback){
    let newArray = [];
    for(let number = 0; number < numbersArray.length; number++){
        console.log(myCallback(numbersArray[number]))
        newArray.push(myCallback(numbersArray[number]));
    }
    console.log(newArray);
}

function filter(selectedNumber, myCallback){
    if(myCallback(selectedNumber) === 0) {
        return selectedNumber * 2;
    }
    else {
        return 0
    }
}

const numbers = [2, 4, 10, 100, 50, 30];
map(numbers, function(number){
    return filter(number, function(selectedNumber){
        return selectedNumber % 10;
    });
});
