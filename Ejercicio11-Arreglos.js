
/* 11. Arreglos
Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
*/


// 1.“join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”:
function join(array2){ 
    let resultado =[];
    array2.forEach(valor => {
        resultado += valor})
    return `"${resultado}"`
    };
    console.log(join([1,2,3,4,5]))


// 2. “pop([1,2,3,4,5])” debe retornar 5:
function nuevo(array){
    let res= [];
    for (let i =0; i<array.length;i++){
    res = array[i]
    console.log(res)
    }
    return res
    }
    console.log(nuevo([1,2,3,4,5,7,1]))
/*3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]:
*/
function filter(array){
    let res = []
    array.forEach(valor=>{ 
        if (valor %2===0){
            res.push(valor)}
    })
    return res
    }
    console.log(filter([1,2,3,4,5]));
    
/*4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
*/

function map(array){
    let res = []
    array.forEach(valor=>{ 
    res.push(valor*10);
    })
    return res
    }
    console.log(map([1,2,3,4,5]));
    