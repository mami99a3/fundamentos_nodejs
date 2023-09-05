/*
    Crear una función filter que acepte un array y un callback y que:
    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    si dicho callback devuelve true, pushea el elemento a un nuevo array
    devuelva el array final con los elementos que pasaron el "filtro".

    Ejemplo:
    const numeros = [10, 2, 3, 40, 33, 50]
    const multiploDe10 = x => x % 10 === 0
    filter(numeros, multiploDe10) // [10, 40, 50]
*/

function filter(numbers, multiple, myCallback){
    let newArray = [];
    let selectedNumber;
    for(let i = 0; i < numbers.length; i ++){
        selectedNumber = numbers[i];
        if(myCallback(multiple, selectedNumber)) {
            newArray.push(selectedNumber);
        }
    }
    return newArray;
}

function multiple(multiple, number){
    let flag = false;
    if (number % multiple === 0){
        flag = true;
    }
    return flag;
}

numbers = [100, 2, 20, 35, 5, 500];
console.log(filter(numbers, 2, multiple));