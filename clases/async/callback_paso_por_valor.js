/*
    Objetivo: Entender el funcionamiento de las funciones callback
    Cuando nosotros realizamos funciones asíncronas no tendremos realmente el control de en que momento se ejecutaran o se mostraran, 
    por eso si queremos que una función asíncrona se muestre en un momento determinado después de que sucediera cierto evento, 
    debemos de llamar o invocar esta función asíncrona dentro de otra función, para esto se usan los callbacks, 
    son parámetros que reciben funciones para que se ejecuten dentro de un evento ya determinado.
*/ 

function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola ' + nombre)
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adiós ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...')
hola('Isaac', function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso...')
    })
});