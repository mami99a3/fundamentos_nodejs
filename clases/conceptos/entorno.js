/*
    Objetivo: Declarar y obtener variables de entorno
    Las variables de entorno son aquellas que vienen afuera del programa (no están adentro del software)
    Ejemplos: Peticiones de API, Claves, Tokens, Pwd de acceso, Emails, Direcciones, URL, IP
    Las variables de entorno se declaran en MAYUSCULAS separadas por GUION_BAJO
    Para que el programa entorno.js pueda acceder a las variables de entorno se tienen que pasar al momento de ejecutar

    NOMBRE=Isaac MI_CORREO=imartinez@akubica.com node entorno.js
*/

let nombre = process.env.NOMBRE || 'Sin nombre';
let correo = process.env.MI_CORREO || 'No tengo correo';

console.log('Hola ' + nombre + ' bienvenido');
console.log('Mi correo es: ' + correo);