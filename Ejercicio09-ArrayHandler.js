/*9. Manejar dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”
*/
function arrayHandler(array1,array2){
    let res,res2,newArray=[];
    if(array1.length===array2.length){
        for (let i = 0; i < array1.length; i++) {
            res = [i+1];
            res2= array2[i]
            newArray += (`[Soy ${res} y Yo ${res2} ]`)}
}
return newArray
}


console.log(arrayHandler([1,2,3,4], ['H','O','L','A']))
