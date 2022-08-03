/*
12. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos:
*/
function minSum(num){ 
let res = num.sort((a, b) => a - b);
    res.splice(2)
let total = res.reduce(function(a, b){ return a + b; })
    return total
}
console.log(minSum([5,4,6,9,3,1,2,6]));