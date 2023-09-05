/*
    Crear una función map que acepte un array y un callback y que:
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    - obtenga el resultado
    - lo pushee a un nuevo array
    - devuelva el array final con el resultado de cada una de las llamadas al callback.
    
    Ejemplo:
    const numeros = [1, 2, 3]
    const duplicar = x => x * 2
    map(numeros, duplicar) // [2, 4, 6]

*/

function map(numbersArray, myCallback){
    let newArray = [];
    for(let number = 0; number < numbersArray.length; number++){
        newArray.push(myCallback(numbersArray[number]));
    }
    return newArray
}

function duplicar(number){
    return number * 2;
}

numbers = [4, 5, 100];
console.log(numbers, map(numbers, duplicar));