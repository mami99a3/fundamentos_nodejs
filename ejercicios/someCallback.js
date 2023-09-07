/*
    SOME
    Crear una función some que acepte un array y un callback y que:
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    - devuelva true si al menos una de las llamadas al callback devolvió true
    
    Ejemplo:
    const numeros = [10, 2, 3, 40, 33, 50]
    const multiploDe10 = x => x % 10 === 0
    const esPositivo = x => x >= 0

    some(numeros, multiploDe10) // true
    some(numeros, esPositivo) // true
*/

function some(numbers, myCallback){
    let flag = false;
    for(let i = 0; i < numbers.length; i ++) {
        let selectedNumber = numbers[i];
        if(myCallback(selectedNumber)) {
            flag = true;
            break;
        }
        else {
            continue;
        }
    }
    return flag
}

function multiple(number){
    return number % 10 === 0;
}

function integer(number){
    return number >= 0;
}

const numbers = [10, 2, 3, 40, 33, 50];
console.log(some(numbers, multiple));
console.log(some(numbers, integer));