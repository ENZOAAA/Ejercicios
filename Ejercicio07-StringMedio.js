/*7. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.
*/

function middleCharacter (string){
    let mitad= parseInt((string.length-1) / 2);
    let strarr = string.split("");
    for (let i = 0; i < mitad; i++){
    strarr.shift()
    strarr.pop()
    }
    return strarr.join("");
}
console.log(middleCharacter("hola"));
