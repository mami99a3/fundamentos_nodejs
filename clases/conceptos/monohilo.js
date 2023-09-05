/*
    Objetivo: mostrar en código como trabaja el monohilo de node al ejecutarse asíncronamente una función
    La función setInterval se queda en espera hasta que se cumpla un segundo para poder devolver algo

    El hecho de que nodejs sea monohilo lo hace delicado en el sentido de que puede ejecutarse algo que corte el código y detenga el programa, 
    como la ausencia de sintaxis o una variable pendiente por definir.
    - Si no se manejan bien los errores y algo truena, ya no continua con los procesos posteriores
    - Se debe estar pendiente de todo el código
*/

console.log('Hola mundo');  //Se ejecuta primero

let i = 0;
setInterval(function() {  //Se ejecuta tercero, asíncronamente al cumplirse el primer segundo
    console.log(i);
    i++;

    //Forzar un error para mostrar como se detiene un programa en ejecución
    //Cuando ocurre un error dentro de alguno de los hilos y no se controla apropiadamente (catch); 
    //Node detiene todos los hilos en ejecución. Esto puede ser muy peligroso, debido a que es dificil determinar fue el origen del problema y en que punto de ejecución se encontraba cada hilo cuando fue detenido.
    // if(i === 5){
    //     console.log('Forzamos error');
    //     var a = 3 + z;
    // }

}, 1000);

console.log('Segunda instrucción');  //Se ejecuta segundo

