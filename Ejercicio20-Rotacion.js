/*20. Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
*/

function rotar(array,num) {
let res = array.slice(num);
let res2= array.splice(0,num,num);
let res3 =[ ...res,...res2];
return res3;
}
console.log(rotar([1,2,3,4,5],3));
