
//Metodos basicos importantes:
parametro.splice(1,2,1);// splice(1)elimina primer elemento. splice(1,2)elimina los elementos fuera de los parametros;
parametro.push();//añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
parametro.split("");//convierte un string en un array;
parametro.pop(); //elimina los ultimos elem de un array(si esta dentro de un for, va eliminando uno por uno hasta la length pasada);
parametro.shift();//elimina los primeros elem de un array(si esta dentro de un for, va eliminando uno por uno hasta la length pasada);
parametro.reverse();//revierte un array(sea number o string);
parametro.join("");//convierte array en string;
parseInt((string.length-1)/2)//calcula la mitad de un string y lo transforma en numero entero.

//Filter:
array.filter((e)=>e!==0);// Filtra los elementos dentro de un array.
(array)=>array.filter((e)=>e!==0).concat(array.filter((e)=>e===0));// se puede concatenar con otro array filtrado.

//MAP:
const array= array.map((e)=>{return e * 10});                          //multiplica los elementos del array
suma = res.map((e)=> e + num)                                         //suma el lop , pero solo los arrays;
const newArray =array.map((valor,)=> ` valor : ${valor}` )           //mapea un objeto .

//reduce:
array.reduce((a,b)=> a + b)                            //reduce un array a un solo numero, sumandolo.


// Maneras de iterar: Array.keys(); For; ForEach;
let x = [...Array(parametro).keys()]                 //itera de manera simple ,numeros o string.length.
for (let i = 0; i < array.length; index++){};        //iteracion habitual, si las demas son limitadas;
array.forEach(i => {});                              //forma mas actual de iterar(alguna veces es limitada);

//.some();
const res = array.some(i => i < 0)                   //return un boolean si en el array hay un numero menor a el parametro.

//callback, con setTimeout:
function callback(num){}                                // permite ejecutar una funcion dentro de la funcion, con el mismo parametro.
setTimeout(() => {console.log("hola estoy aqui")},num); //retraza el tiempo necesario la funcion dentro;

//metodo para pushear dos array en uno:
res.push(array2[i])
res.push(array1[i])
//metodo para pushear una palabra con un numero:
res.push({[string]:i});
//reduce una palabra a un unico valor, teniendo parametros de valores.
let uno = w1.split("").reduce((a, c) => (a += parseInt(abc[c])), 0)
//metodo para reducir un numero largo a dos digitos:
let num2 = Number([String(num).substring(0, 2)]);
//metodos de comparacion:
typeof(obj)=== "object"; typeof obj === "number"; Array.isArray(parametro); typeof obj==="string";
//forma correcta de retornar con un ternario:
return res === string  ? `mensaje` : `mensaje`;
