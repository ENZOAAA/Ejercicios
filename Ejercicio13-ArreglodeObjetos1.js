/*13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` y que contenga el valor del número y sus anteriores.
*/

function arregloDeObjetos(array) {
    return [...Array(5).keys()].map(valor => {
        return {"valor": valor+1};
    });
}

console.log(arregloDeObjetos(5));