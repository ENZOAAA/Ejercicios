/*4. Callback
Debes crear una función llamada callback que reciba como Parámetros un número y
una función. Esta deberá retornar el resultado de esa función pasándole como
argumento el número que llega por parámetro.*/


function callback (number) {
setTimeout(() => {console.log( 'Hola estoy dentro de un callback')}, number);
};
callback(3000);