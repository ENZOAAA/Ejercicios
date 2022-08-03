/*13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` y que contenga el valor del número y sus anteriores.
*/

function arregloDeObjetos(num, string) {
    let res = [];
    for(let i = 1; i <= num; i++){
    res.push({[string]:i});
}
    return res;
}
console.log(arregloDeObjetos(5,"hola"))