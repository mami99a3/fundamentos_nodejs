/*
    Objetivo: Comprender el uso de las funciones callback

    La función callback es una función que se pasa a otra función como argumento
    que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
    Para hacer que los procesos sean asíncronos es necesario crear funciones callback con setTimeout
*/

function proceso(miCallback){
    setTimeout(function (){
        console.log("Soy una función asíncrona"); // #2
        miCallback();
    })
}

console.log("Iniciando proceso..."); // #1
//Mandas la declaración de la función como argumento en la misma llamada a la función callback
proceso(function (){
    console.log("Terminando proceso 1..."); // #3
});

//Declaras la función antes y luego la mandas como argumento en la función callback
function procesoFin(){
    console.log("Terminando proceso 2..."); // #3
}
proceso(procesoFin);