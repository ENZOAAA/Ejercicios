/*8. Mover ceros a lo último:
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.
*/


const moverZeros =(array)=>array.filter((e)=>e!==0).concat(array.filter((e)=> e ===0))

console.log(moverZeros([1,2,0,3,0,9,true,0,"a",0,5]))
