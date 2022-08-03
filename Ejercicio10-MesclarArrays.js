/*10. Mezclar arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.
*/
function mezclar (array1,array2){
    if (array1.length === array2.length){ 
    let res= [];
    for (let i =0; i<array1.length;i++){
    res.push(array1[i])
    res.push(array2[i])}
    return res
    }
    else { return "introduzca arrays de la misma longitud"}
    
    }
    console.log(mezclar([1,2,3,4],[8,7,6,5]))