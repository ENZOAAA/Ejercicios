/*Prefijos Telefónicos
	Utils:
	var prefijos = [54, 55, 56, 57, 58]
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

1-Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo : 

{
54: “Argentina”,
55: ”Brasil”,
56: ”Ecuador”,
57: ”Colombia”
}


2-Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
3-En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”


*/

let prefijos = [54, 55, 56, 57, 58];
let paises = ["Argentina", "Brasil", "Chile", "Colombia", "Venezuela"];

const obj = Object.fromEntries(
        prefijos.map((pre, i) => 
        [pre, paises[i][0] + paises[i].slice(1)])
        );

function validarPrefijo (num) {
const pais = obj[String(num).substring(0, 2)];
    return pais ? `Este número pertenece a ${pais}.` : 
`El número no pertenece a nuestros países.`
};
console.log(validarPrefijo("5434544632"));
console.log(validarPrefijo("5798874432"));
console.log(validarPrefijo("9033225566"));

///////////////////////////////////////////////////////////////////////

function validar(num){ 
    let num2 = Number([String(num).substring(0, 2)]);
    switch (num2) {
        case 54:
        return `Este numero pertenece a Argentina`;        
            break;
        case 55:
        return `Este numero pertenece a Brasil`;        
            break;
        case 56:
        return `Este numero pertenece a Ecuador`;        
            break;
        case 57:
        return `Este numero pertenece a Colombia`;        
            break;
        default:
        return `El numero no pertenece a un pais nuestro`
            break;
    }}
    
    
    console.log(validar(5423234234))